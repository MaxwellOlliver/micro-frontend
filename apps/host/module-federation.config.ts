import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import packageJson from "./package.json";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    dashboard: "dashboard@http://localhost:5001/remoteEntry.js",
    users: "users@http://localhost:5002/remoteEntry.js",
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
