import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "users",
  exposes: { "./exports": "./src/exports.ts" },
  filename: "remoteEntry.js",
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "@moondev/ui": { singleton: true },
  },
});
