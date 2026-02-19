import { NavLink, Outlet } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const ShoppingCartApp = () => {
  return (
    <div className="flex flex-col gap-6 w-5/6 md:w-4/6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <NavigationMenu className="flex justify-between">
        <NavigationMenuLink>
          <NavLink to="/shopping-cart">Products</NavLink>
        </NavigationMenuLink>
        <NavigationMenuLink>
          <NavLink to="/shopping-cart/cart">Cart</NavLink>
        </NavigationMenuLink>
      </NavigationMenu>
      <Outlet />
    </div>
  );
};
