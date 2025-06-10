import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import packageJson from "./package.json";

export default createModuleFederationConfig({
  name: "dashboard",
  filename: "remoteEntry.js",
  exposes: {
    "./exports": "./src/exports.ts",
    "./app": "./src/export-app.ts",
  },
  shared: {
    ...packageJson.dependencies,
    react: { singleton: true, requiredVersion: packageJson.dependencies.react },
    "@moondev/ui": {
      singleton: true,
      requiredVersion: packageJson.dependencies["@moondev/ui"],
    },
    "react-router": {
      singleton: true,
      requiredVersion: packageJson.dependencies["react-router"],
    },
  },
});
