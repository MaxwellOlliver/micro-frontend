import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    dashboard: "dashboard@http://localhost:5001/remoteEntry.js",
    users: "users@http://localhost:5002/remoteEntry.js",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    "@moondev/ui": { singleton: true },
  },
});
