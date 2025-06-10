import { useNavigate } from "@tanstack/react-router";

export const ProductsPage = () => {
  const navigate = useNavigate({ from: "/dashboard/products" });

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => navigate({ to: "/users/registration" })}>
        Go to Users
      </button>
    </div>
  );
};
