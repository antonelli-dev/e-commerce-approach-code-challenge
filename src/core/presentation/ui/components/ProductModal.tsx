"use client";

import { Button } from "./Button";
import { useState, MouseEventHandler } from "react";
import { Plus, Minus, XIcon } from "lucide-react";
import { useCartStore } from "@/core/application/store/cart.store";
import { CartItem } from "@/core/domain/value-objects/cart-item.value-object";
import { Product } from "@/core/domain/entities/Product";

interface ProductModalProps {
  isOpen: boolean;
  onClose: MouseEventHandler<SVGSVGElement>;
  onAddedProduct?: (product: Product, quantity: number) => void;
  product: Product;
}

const ProductModal = ({ isOpen, product, onAddedProduct, onClose }: ProductModalProps) => {
 
  const { addCartItem, modifyQuantity, cart } = useCartStore();
  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeOnQuantity = (amount: number) => {
    const q = quantity + amount;

    setQuantity(q <= 0 ? 1 : q);
  };

  const handleAddProductToCart = () => {
    let productToAdd: CartItem | undefined = cart.items.find(x => x.product?.id == product?.id );
    
    if( productToAdd ) {
      modifyQuantity(productToAdd, quantity );
    }
    else if ( !productToAdd && product ) {
      productToAdd = new CartItem();
      productToAdd.product = product;
      addCartItem(quantity, productToAdd);
      
      if( onAddedProduct ) {
        onAddedProduct(productToAdd.product!, quantity);
      }
    }
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-row justify-end">
          <button>
            <XIcon color="black" onClick={onClose}></XIcon>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-black">{product.title}</h2>
        <p className="mb-2 text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold text-gray-700">
          Price: ${product.price}
        </p>
        <div className=" flex flex-row w-full items-center mb-2">
          <span
            className="w-[100px] h-fit text-xl text-center border rounded-lg p-2 text-black"
          >{quantity}</span>
          <Plus
            className="text-black"
            size={30}
            onClick={() => handleChangeOnQuantity(1)}
          />
          <Minus
            className="text-black"
            size={30}
            onClick={() => handleChangeOnQuantity(-1)}
          />
        </div>
        <div className="flex flex-row gap-2 items-center h-full">
          <Button
            text="Add To Cart"
            buttonStyle="h-10 w-full bg-black rounded-lg transition-all duration-300 ease-in-out hover:scale-105 px-4 py-2 inline-flex justify-center items-center hover:underline hover:underline-offset-4"
            onClickAction={handleAddProductToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
