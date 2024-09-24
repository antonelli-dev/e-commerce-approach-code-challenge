import { Store } from "lucide-react";
import React, { ReactNode } from "react";

import { NavMenu } from "@/core/presentation/ui/components/NavMenu";
import { MobileMenu } from "@/core/presentation/ui/components/MobileMenu";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col overflow-y-scroll max-h-full">
      <div className="h-16 min-h-16 bg-white px-10 shadow-md flex flex-row items-center ">
        <div className="flex flex-row gap-2 items-center">
          <Store className="text-blue-500" size={40} />
          <span className="text-xl font-bold text-gray-900">E-commerce</span>
        </div>
        <NavMenu />
        <MobileMenu />
      </div>
      <div id="wrapper-main-menu" className="flex-grow pb-5 px-10">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
