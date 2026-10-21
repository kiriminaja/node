import { describe, expect, it } from "bun:test";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve, join } from "node:path";
import { spawnSync } from "node:child_process";

interface WorkflowStep {
    name?: string;
    run?: string;
}

interface ReleaseWorkflow {
    permissions: Record<string, string>;
    jobs: {
        verify: { steps: WorkflowStep[] };
        publish: {
            needs: string;
            permissions: Record<string, string>;
            steps: WorkflowStep[];
        };
    };
}

const root = resolve(import.meta.dir, "..");
const source = readFileSync(join(root, ".github/workflows/release.yml"), "utf8");
const workflow = Bun.YAML.parse(source) as ReleaseWorkflow;
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

function runGuard(name: string, tag: string) {
    const script = workflow.jobs.verify.steps.find(step => step.name === name)?.run;
    if (!script) throw new Error(`Missing workflow guard: ${name}`);
    const temporary = mkdtempSync(join(tmpdir(), "kiriminaja-release-"));
    try {
        return spawnSync("bash", ["-c", script], {
            cwd: root,
            env: {
                ...process.env,
                RELEASE_TAG: tag,
                GITHUB_OUTPUT: join(temporary, "output"),
            },
            encoding: "utf8",
        });
    } finally {
        rmSync(temporary, { recursive: true, force: true });
    }
}

describe("trusted npm release workflow", () => {
    it.each(["v0.0.0", "v1.5.0", "v10.20.30"])("accepts stable tag %s", tag => {
        expect(runGuard("Validate release tag", tag).status).toBe(0);
    });

    it.each(["main", "1.5.0", "v1.5.0-beta.1", "v01.5.0", "v1.5", "v1.5.0\nignored"])(
        "rejects invalid tag %s", tag => {
            expect(runGuard("Validate release tag", tag).status).not.toBe(0);
        },
    );

    it("requires the tag to match the package version", () => {
        expect(runGuard("Verify tag matches package version", `v${pkg.version}`).status).toBe(0);
        expect(runGuard("Verify tag matches package version", "v999.999.999").status).not.toBe(0);
    });

    it("grants OIDC only to publishing after verification", () => {
        expect(workflow.permissions).toEqual({ contents: "read" });
        expect(workflow.jobs.publish.needs).toBe("verify");
        expect(workflow.jobs.publish.permissions["id-token"]).toBe("write");
        expect(source).not.toContain("secrets.NPM_TOKEN");
        expect(source).not.toContain("NODE_AUTH_TOKEN:");
        const publish = workflow.jobs.publish.steps.find(step => step.name === "Publish to npm using OIDC");
        expect(publish?.run).toContain("npm publish ./release/*.tgz");
        expect(publish?.run).toContain("--ignore-scripts");
        expect(pkg.scripts.release).not.toContain("npm publish");
    });
});
