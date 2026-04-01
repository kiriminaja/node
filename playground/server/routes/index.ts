import { defineHandler } from "nitro"

export default defineHandler(() => {
  return {
    routes: {
      "/provinces": "GET - List all provinces",
    },
  };
});
