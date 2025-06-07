import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [
    react(),
    federation({
      dev: true,
      filename: "remoteEntry.js",
      name: "dashboard",
      exposes: {
        "./DashboardPage": "./src/Dashboard.tsx",
      },
      shared: {
        react: {
          requiredVersion: pkg.dependencies.react,
          singleton: true,
        },
      },
    }),
  ],
  server: {
    port: 5001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
