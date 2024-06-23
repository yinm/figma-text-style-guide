import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src/plugin",
  build: {
    target: "esnext",
    outDir: path.resolve("dist"),
    emptyOutDir: false, // Suppress the warning
    rollupOptions: {
      input: "src/plugin/code.ts",
      output: {
        entryFileNames: "code.js",
      },
    },
  },
});
