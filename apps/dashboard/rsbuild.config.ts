import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import moduleFederationConfig from "./module-federation.config";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact({
      splitChunks: {
        router: false,
        react: false,
      },
    }),
    pluginModuleFederation(moduleFederationConfig),
  ],
  server: {
    port: 5001,
  },
});
