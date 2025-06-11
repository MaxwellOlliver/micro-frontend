import { useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const ProductsPage = () => {
  const navigate = useNavigate({ from: "/dashboard/products" });

  return (
    <div className="flex flex-col h-full gap-4 p-4 items-center justify-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ff8336] to-[#fd2d92] bg-clip-text text-transparent mb-2">
        Products page here!!
      </h1>

      <button
        onClick={() => navigate({ to: "/users/registration" })}
        className="gap-2 bg-gradient-to-r from-[#ff8336] to-[#fd2d92] text-white p-4 rounded-md cursor-pointer flex items-center"
      >
        <ChevronRight className="w-4" />
        navigate to users remote from carts remote
      </button>
    </div>
  );
};
