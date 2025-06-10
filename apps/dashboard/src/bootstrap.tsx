import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

async function startApp() {
  await import("@moondev/ui/theme").catch((err) => {
    console.error("Error loading theme", err);
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App basename="/dashboard" />
    </StrictMode>
  );
}

startApp();
