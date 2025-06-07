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
