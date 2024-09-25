"use client";

import Link from "next/link";
import { menuConfig } from "@/core/application/config/menu.config";

export const NavMenu = () => {
  return (
    <div className="hidden md:flex md:justify-end md:flex-grow h-full space-x-4 text-right items-center">
      {menuConfig.map((navBarElement, index) => {
        return (
          <Link
            href={navBarElement.path}
            className="text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-700 text-sm font-medium transform hover:scale-110 hover:underline hover:underline-offset-4 flex items-center space-x-1"
            key={index}
          >
            {typeof navBarElement.name === "string" ? (
              <span>{navBarElement.name}</span>
            ) : (
              <navBarElement.name className="w-5 h-5" />
            )}
          </Link>
        );
      })}
    </div>
  );
};
