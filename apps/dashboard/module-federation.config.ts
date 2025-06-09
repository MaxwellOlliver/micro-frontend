import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "dashboard",
  filename: "remoteEntry.js",
  exposes: { "./exports": "./src/exports.ts" },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "@moondev/ui": { singleton: true },
  },
});
