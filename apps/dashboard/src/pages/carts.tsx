import { useNavigate } from "@tanstack/react-router";

export const CartsPage = () => {
  const navigate = useNavigate({ from: "/dashboard/carts" });

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="text-2xl font-bold">Carts</h1>
      <p className="text-yellow-600">
        This is a shared component from the <code>@moondev/ui</code> package.
      </p>
      <button onClick={() => navigate({ to: "/dashboard/products" })}>
        Go to Products
      </button>
    </div>
  );
};
