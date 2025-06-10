import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    Root: typeof routeTree;
  }
}

async function startApp() {
  // await import("@moondev/ui/theme").catch((err) => {
  //   console.error("Error loading theme", err);
  // });

  const router = createRouter({
    routeTree,
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <h1 className="text-2xl font-bold text-purple-600">Shell</h1>
      <Suspense fallback={<div>Loading.. asdasd.</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}

startApp();
