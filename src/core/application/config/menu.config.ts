export interface MenuItem {
  name: string;
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
];
