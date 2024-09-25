import { ShoppingCart } from "lucide-react";
export interface MenuItem {
  name: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
}

export const menuConfig: MenuItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "My profile",
    path: "/users/profile/1",
  },
  {
    name: "OrderStatus",
    path: "/users/orderstatus",
  },
  {
    name: ShoppingCart,
    path: "/cart",
  },
];
