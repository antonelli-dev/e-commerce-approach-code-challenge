import type { Metadata } from "next";
import { Product } from "@/core/domain/entities/Product";
import { GetProductsByCategoryUseCase } from "@/core/application/usecases/get-products-by-category.use-case";
import { ListProducts } from "./components/ListProducts";

export const metadata: Metadata = {
  title: "Products",
  description: "Our products",
};

const ProductsPage = async () => {
  const categories: string[] = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const products: Product[] = await new GetProductsByCategoryUseCase().execute(
    categories[Math.floor(Math.random() * (categories.length - 1))]
  );

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-8">
        Our products
      </h1>

      <ListProducts products={products} />
    </div>
  );
};

export const revalidate = 60;
export default ProductsPage;
