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
      name: "users",
      exposes: {
        "./exports": "./src/exports.ts",
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
    port: 5002,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
