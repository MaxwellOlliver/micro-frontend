import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  MainLayout,
  Sidebar,
  Navbar,
  SidebarSection,
} from "@moondev/ui/layout";
import { ShoppingCart, User } from "lucide-react";

function Component() {
  const sidebarSections: SidebarSection[] = [
    {
      label: "dashboard",
      items: [
        { icon: ShoppingCart, label: "Carrinho", href: "/dashboard/carts" },
        { icon: ShoppingCart, label: "Produtos", href: "/dashboard/products" },
      ],
    },
    {
      label: "users",
      items: [{ icon: User, label: "Usuários", href: "/users" }],
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
});
