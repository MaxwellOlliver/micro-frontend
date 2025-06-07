## Micro Frontend To-How

First things first, we need to understand what is module federation.

Module Federation is a concept introduced by Webpack 5 (and adapted to Vite via vite-plugin-federation) that allows apps to:

Expose modules (components, pages, etc.) to other apps

Consume remote modules from other apps at runtime, not at build time

### Folder structure

```bash
your-project/
├── apps/
│ ├── shell/ # The host app (consumer)
│ └── dashboard/ # A microfrontend
├── packages/
│ └── shared-ui/ # Optional shared library
├── pnpm-workspace.yaml
├── package.json
```

### Step-by-step

#### Installation

First, assuming you are already inside your project folder, we need init pnpm:

```bash
pnpm init
```

Then, we create a `pnpm-workspace.yaml` containing:

```yaml
packages:
  - apps/*
  - packages/*
```

Next we create the shell (consumer) and an example app (in this case, a dashboard):

```bash
pnpm create vite apps/shell -- --template react-ts
pnpm create vite apps/dashboard -- --template react-ts
```

Then, `cd apps/shell && pnpm install`. Same for dashboard.

Now we need to install `@module-federation/vite` by running.

```bash
pnpm add @module-federation/vite -w
```

#### Micro Frontend configuration

Go to `apps/dashboard` and update `vite.config.ts`:

```typescript
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
        "./DashboardPage": "./src/Dashboard.tsx",
      },
      shared: {
        react: {
          requiredVersion: pkg.dependencies.react,
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
```

We will get into details later.

Now, create the exposed file inside `src`:

```tsx
export default function DashboardPage() {
  return <h2>📊 Dashboard MFE loaded!</h2>;
}
```

#### Shell (Consumer) configuration

Update `vite.config.ts` to:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {federation} from '@module-federation/vite';
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

```

Update `App.tsx`to load the Dashboard MFE:

```tsx
import { lazy, Suspense } from "react";

const DashboardPage = lazy(() => import("dashboard/DashboardPage"));

export default function App() {
  return (
    <div>
      <h1>Shell</h1>
      <Suspense fallback="Loading MFE...">
        <DashboardPage />
      </Suspense>
    </div>
  );
}
```

If you're using typescript, you'll need to declare dashboard as module.

```ts
// src/decls.d.ts
declare module "dashboard/*" {
  const Component: React.ComponentType<unknown>;
  export default Component;
}
```
