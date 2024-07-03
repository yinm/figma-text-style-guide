import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/ui/**/*.spec.ts?(x)"],
    environment: "jsdom",
    setupFiles: "src/ui/tests/setup.ts",
  },
});
