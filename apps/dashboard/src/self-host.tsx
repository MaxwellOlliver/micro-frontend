import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routeTree } from "./routes";

async function startApp() {
  await import("@moondev/ui/theme").catch((err) => {
    console.error("Error loading theme", err);
  });

  const router = createBrowserRouter(routeTree);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

startApp();
