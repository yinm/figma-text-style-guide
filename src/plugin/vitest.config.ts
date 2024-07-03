import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["**/*.spec.ts"],
    setupFiles: "src/plugin/tests/setup.ts",
  },
});
