import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsPaths()],
  server: {
    port: 3000,
  },
});
