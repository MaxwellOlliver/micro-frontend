import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  MainLayout,
  Sidebar,
  Navbar,
  SidebarSection,
} from "@moondev/ui/layout";
import { ShoppingCart, User, Box, Loader2 } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-col h-full gap-4 p-4 items-center justify-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ff8336] to-[#fd2d92] bg-clip-text text-transparent mb-2">
        Page not found
      </h1>
    </div>
  );
}

function Pending() {
  return (
    <div className="flex flex-col h-full gap-4 p-4 items-center justify-center">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
}

function Component() {
  const sidebarSections: SidebarSection[] = [
    {
      label: "dashboard",
      items: [
        { icon: ShoppingCart, label: "Carts", href: "/dashboard/carts" },
        { icon: Box, label: "Products", href: "/dashboard/products" },
      ],
    },
    {
      label: "users",
      items: [{ icon: User, label: "Users", href: "/users/registration" }],
    },
  ];

  return (
    <MainLayout
      sidebar={<Sidebar sections={sidebarSections} />}
      navbar={<Navbar />}
    >
      <Outlet />
      <TanStackRouterDevtools />
    </MainLayout>
  );
}

export const Route = createRootRoute({
  component: Component,
  notFoundComponent: NotFound,
  pendingComponent: Pending,
});
