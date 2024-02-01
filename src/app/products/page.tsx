"use client";
import { useQuery } from "react-query";
import { fetchProducts } from "../utils/products";
import Loader from "../shared/Loader";
import ProductComp from "./_components/Product";
import Product from "../types/types.product";

const ProductsPage = () => {
  const { data: products, isLoading, error, isRefetching } = useQuery<
    Product[],
    Error
  >({
    queryKey: "products",
    queryFn: fetchProducts,
    staleTime: 10000,
  });

  if (error)
    return (
      <div className="h-screen">
        <h1>{error.message}</h1>
      </div>
    );

  if (isLoading && !isRefetching) return <Loader />;

  const renderProducts = () => {
    return (
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <ProductComp key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        {renderProducts()}
      </div>
    </div>
  );
};

export default ProductsPage;
