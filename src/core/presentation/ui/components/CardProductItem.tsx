"use client";

import { Button } from "@/core/presentation/ui/components/Button";
import { MouseEventHandler } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  productId: number;
  title: string;
  image?: string | StaticImageData;
  address: string;
  price?: number;
  isProductInCart: boolean;
  isDemo?: boolean;
  onClickAddToCart?: MouseEventHandler<HTMLButtonElement> | undefined;
  onRemoveItem?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const CardProductItem = ({
  isProductInCart,
  title,
  image,
  address,
  price = 0,
  isDemo,
  onClickAddToCart,
  onRemoveItem,
}: Props) => {
  return (
    <div className="w-full flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="bg-slate-500 rounded-t-lg h-60">
        <Image
          src={image || ""}
          alt={image ? title : ""}
          className="w-full h-full"
          width="100"
          height="100"
          data-testid="product-image"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow items-start">
        <div className="flex flex-col justify-between h-full items-startvgv">
          <p className="text-black font-bold text-xl">{title}</p>
          <p className="text-gray-600 text-sm">{address}</p>
          {price !== 0 && (
            <p className="text-blue-600 font-bold text-xl mb-5">${price}</p>
          )}
        </div>
        <div className="w-full flex flex-row gap-2">
          {!isDemo && (
            <>
              {!isProductInCart && (
                <Button
                  text="Add To Cart"
                  buttonStyle="h-10 w-full bg-black rounded-lg transition-all duration-300 ease-in-out hover:scale-105 px-4 py-2 inline-flex justify-center items-center hover:underline hover:underline-offset-4"
                  onClickAction={onClickAddToCart}
                />
              )}

              {isProductInCart && (
                <Button
                  text="Remove"
                  buttonStyle="h-10 w-full bg-black rounded-lg transition-all duration-300 ease-in-out hover:scale-105 px-4 py-2 inline-flex justify-center items-center hover:underline hover:underline-offset-4"
                  onClickAction={onRemoveItem}
                />
              )}
            </>
          )}
          {isDemo && (
            <Link href={"products"}>
              <span className="hover:text-red-600 hover:font-bold text-black">
                See All Products
              </span>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
