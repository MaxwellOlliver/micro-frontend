import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import packageJson from "./package.json";

export default createModuleFederationConfig({
  name: "users",
  exposes: { "./exports": "./src/exports.ts", "./app": "./src/export-app.ts" },
  filename: "remoteEntry.js",
  shared: {
    ...packageJson.dependencies,
    react: { singleton: true, requiredVersion: packageJson.dependencies.react },
    "react-dom": {
      singleton: true,
      requiredVersion: packageJson.dependencies["react-dom"],
    },
    "@moondev/ui": {
      singleton: true,
      requiredVersion: packageJson.dependencies["@moondev/ui"],
    },
  },
});
