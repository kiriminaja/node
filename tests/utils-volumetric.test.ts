import { describe, expect, test } from "bun:test";
import { calculate, Volumetric } from "../src/utils/volumetric";

describe("Volumetric.calculate", () => {
    test("returns zero dimensions for empty input", () => {
        expect(calculate([])).toEqual({ length: 0, width: 0, height: 0 });
    });

    test("returns single item dimensions", () => {
        expect(calculate([{ qty: 1, length: 10, width: 5, height: 3 }])).toEqual({
            length: 10,
            width: 5,
            height: 3,
        });
    });

    test("picks vertical stacking when smallest", () => {
        // 2 flat items stack vertically into a small cube
        expect(calculate([{ qty: 2, length: 10, width: 10, height: 2 }])).toEqual({
            length: 10,
            width: 10,
            height: 4,
        });
    });

    test("picks horizontal stacking when smallest", () => {
        const out = calculate([
            { qty: 5, length: 2, width: 10, height: 10 },
            { qty: 1, length: 10, width: 1, height: 1 },
        ]);
        expect(out).toEqual({ length: 20, width: 10, height: 10 });
    });

    test("picks side stacking when smallest", () => {
        const out = calculate([
            { qty: 5, length: 10, width: 2, height: 10 },
            { qty: 1, length: 1, width: 10, height: 1 },
        ]);
        expect(out).toEqual({ length: 10, width: 20, height: 10 });
    });

    test("treats qty<1 as 1", () => {
        expect(calculate([{ qty: 0, length: 10, width: 5, height: 3 }])).toEqual({
            length: 10,
            width: 5,
            height: 3,
        });
    });

    test("namespace export works", () => {
        expect(Volumetric.calculate([])).toEqual({ length: 0, width: 0, height: 0 });
    });
});
