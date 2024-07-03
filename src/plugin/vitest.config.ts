import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/plugin/**/*.spec.ts"],
    setupFiles: "src/plugin/tests/setup.ts",
  },
});
