"use client";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/core/application/store/cart.store";

const CartPage = () => {
  const { cart, modifyQuantity, removeCartItem } = useCartStore();
  const [localQuantities, setLocalQuantities] = useState<{
    [key: number]: number;
  }>({});

  useEffect(() => {
    const initialQuantities = cart.items.reduce((acc, item) => {
      if (item.product?.id) {
        acc[item.product.id] = item.quantity;
      }
      return acc;
    }, {} as { [key: number]: number });

    setLocalQuantities(initialQuantities);
    console.log("Initialized quantities:", initialQuantities);
  }, [cart]);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedQuantity = Math.max(newQuantity, 1);
    setLocalQuantities((prev) => ({ ...prev, [productId]: updatedQuantity }));
    const item = cart.items.find((i) => i.product?.id === productId);
    if (item) {
      modifyQuantity(item, updatedQuantity);
      console.log("Modified quantity in store for productId:", productId);
    }
  };

  const handleRemoveItem = (productId: number) => {
    removeCartItem(productId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Your Shopping Cart
      </h1>
      {cart.items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.items.map((item, index) => {
            const productId = item.product?.id || 0;
            const quantity = localQuantities[productId] || item.quantity;

            return (
              <div
                key={`${productId}-${index}`}
                className={`flex flex-col lg:flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg ${
                  index === 0 ? "first-item" : ""
                }`}
              >
                <div className="lg:w-1/4 w-full mb-4 lg:mb-0">
                  <img
                    src={item.product?.image}
                    alt={item.product?.title}
                    className="w-full h-40 object-contain rounded-md"
                  />
                </div>
                <div className="lg:w-1/2 w-full">
                  <h2 className="text-lg font-semibold mb-2">
                    {item.product?.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {item.product?.description}
                  </p>
                  <p className="font-bold text-xl text-blue-600 mb-2">
                    ${item.product?.price}
                  </p>
                </div>
                <div className="lg:w-1/4 w-full flex items-center justify-center lg:justify-end space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        productId,
                        parseInt(e.target.value, 10) || 1
                      )
                    }
                    className="w-16 p-2 border rounded text-center"
                  />
                  <button
                    onClick={() => handleRemoveItem(productId)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold">
              Total: $
              {cart.items
                .reduce(
                  (sum, item) =>
                    sum + (item.product?.price || 0) * item.quantity,
                  0
                )
                .toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
