"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignJustify, XIcon } from "lucide-react";

import { menuConfig } from "@/core/application/config/menu.config";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex-grow flex flex-row justify-end sm:right-0 md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <AlignJustify color="black" />
        </button>
      </div>
      {isOpen && <div
        className={`md:hidden absolute bg-white z-50 h-full ${
          isOpen ? "sm:w-[200px]" : "w-0"
        } right-0 top-0 border-l-2 border-opacity-5 transition-[width] duration-500 ease-in-out`}
      >
        <div className="p-5">
          <div className="text-right items-end">
            <button onClick={() => setIsOpen(false)}className="absolute" >
              <XIcon className="hover:text-blue-600 text-black font-bold"></XIcon>
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {menuConfig.map((navBarElement, index) => {
              return (
                <Link
                  href={navBarElement.path}
                  className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-700 text-sm font-medium transform hover:scale-110 hover:underline hover:underline-offset-4"
                  key={index}
                >
                  {navBarElement.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>}
    </>
  );
};
