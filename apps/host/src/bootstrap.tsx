import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "@moondev/ui/theme";
import { Button } from "@moondev/ui/components";

declare module "@tanstack/react-router" {
  interface Register {
    Root: typeof routeTree;
  }
}

async function startApp() {
  const router = createRouter({
    routeTree,
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <h1 className="text-2xl font-bold text-purple-600 bg-red-500">Shell</h1>
      <Button />
      <Suspense fallback={<div>Loading.. asdasd.</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}

startApp();
