import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createAppRouter } from "./routes/router";
import { RouterProvider } from "react-router";

async function startApp() {
  // await import("@moondev/ui/theme").catch((err) => {
  //   console.error("Error loading theme", err);
  // });

  const router = await createAppRouter();

  if (!router) {
    throw new Error("Router not found");
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <h1 className="text-2xl font-bold text-purple-600">Shell</h1>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

startApp();
