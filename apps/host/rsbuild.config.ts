import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import moduleFederationConfig from "./module-federation.config";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";
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
    port: 5000,
  },
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack({ target: "react" })],
    },
  },
});
