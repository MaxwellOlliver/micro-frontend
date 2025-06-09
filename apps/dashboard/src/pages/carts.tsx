// import { Button } from "@moondev/ui/components";
import { useNavigate } from "react-router";

export const CartsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Carts</h1>
      <p className="text-yellow-600">
        This is a shared component from the <code>@moondev/ui</code> package.
      </p>
      <button onClick={() => navigate("/dashboard/products")}>
        Go to Products
      </button>
    </div>
  );
};
