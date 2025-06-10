import { createRemoteComponent } from "@module-federation/bridge-react";
import { loadRemote } from "@module-federation/runtime";
import { Fallback } from "./fallback";
import { loading } from "./loading";

interface RemoteApp {
  appName: string;
  component: React.ComponentType<{ basename: string }>;
}

// For bridge react
// Basically, this is useful for loading remote apps
// It can be used to load remote from even other frameworks like vue, angular, etc.
// The library will act as a proxy to intermediate routing system

export const getRemoteApps = async (): Promise<RemoteApp[]> => {
  const remoteApps = [
    {
      appName: "dashboard",
      component: createRemoteComponent({
        loader: () => loadRemote("dashboard/app"),
        fallback: Fallback,
        loading,
      }),
    },
    {
      appName: "users",
      component: createRemoteComponent({
        loader: () => loadRemote("users/app"),
        fallback: Fallback,
        loading,
      }),
    },
  ];

  return remoteApps;
};
