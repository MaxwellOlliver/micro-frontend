import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      dev: true,
			remotes: {
				dashboard: {
					type: 'module',
					name: 'dashboard',
					entry: 'http://localhost:5001/remoteEntry.js',
					entryGlobalName: 'dashboard',
					shareScope: 'default',
				},
				users: {
					type: 'module',
					name: 'users',
					entry: 'http://localhost:5002/remoteEntry.js',
					entryGlobalName: 'users',
					shareScope: 'default',
				},
			},
			filename: 'remoteEntry.js',
			shared: {
				react: {
					requiredVersion: pkg.dependencies.react,
					singleton: true,
				},
			},
    }),
  ],
  server: {
    port: 5000,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
