import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.spec.ts", "**/*.spec.tsx"],
    environment: "jsdom",
    setupFiles: "src/ui/tests/setup.ts",
  },
});
