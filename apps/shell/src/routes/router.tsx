import { createRouter } from "@tanstack/react-router";
import { getRemoteRoutes } from "../remote-route-trees";
import { RootRoute } from "@shared/router";

const remoteRoutes = await getRemoteRoutes();
console.log(remoteRoutes);
const routeTree = RootRoute.addChildren(remoteRoutes);

export const router = createRouter({ routeTree });
