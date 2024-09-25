"use client";
import { useState, useEffect } from "react";

import { useCartStore } from "@/core/application/store/cart.store";
import { Product } from "@/core/domain/entities/Product";
import { CardProductItem } from "@/core/presentation/ui/components/CardProductItem";
import ProductModal from "@/core/presentation/ui/components/ProductModal";

interface Props {
  products: Product[];
}

export const ListProducts = ({ products }: Props) => {
 
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { removeCartItem, hasProductInCart } = useCartStore();

  const handleAddToCartButton = (product: Product) => {
    
      setSelectedProduct(product);
    
  };

  const onProductAdded = () => {
    setSelectedProduct(null);
  };

  const handleRemoveItem = (product: Product) => {
    removeCartItem(product.id);
    setSelectedProduct(null);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full h-full">
      {products.map((p) => (
        <CardProductItem
          key={p.id}
          productId={p.id}
          image={p.image}
          title={p.title}
          address={p.description}
          price={p.price}
          isProductInCart={isMounted && hasProductInCart(p.id)}
          onClickAddToCart={() => handleAddToCartButton(p)}
          onRemoveItem={() => handleRemoveItem(p)}
        ></CardProductItem>
      ))}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={selectedProduct != null}
          onAddedProduct={onProductAdded}
          onClose={() => handleCloseModal()}
        />
      )}
    </div>
  );
};
