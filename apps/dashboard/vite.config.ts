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
        "./exports": "./src/exports.ts",
      },
      shared: {
        react: {
          requiredVersion: pkg.dependencies.react,
          singleton: true,
        },
        "react-dom": {
					requiredVersion: pkg.dependencies["react-dom"],
					singleton: true,
				},
        "@shared/router": {
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
