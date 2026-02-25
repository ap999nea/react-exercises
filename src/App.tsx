import { NavLink, Outlet } from "react-router-dom";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "./components/ui/navigation-menu";
import { Toaster } from "./components/ui/sonner";

export const App = () => {
  return (
    <>
      <div className="my-6 gap-16 w-screen flex flex-col items-center">
        <NavigationMenu className="flex flex-col lg:flex-row lg:justify-between w-5/6 md:w-4/6">
          <div className="flex flex-col lg:flex-row gap-4">
            <NavigationMenuLink>
              <NavLink to="/">Home</NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <NavLink to="/todo">Todo App</NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <NavLink to="/weather">Weather App</NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <NavLink to="/image-gallery">Image Gallery</NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <NavLink to="/form-builder">Form Builder</NavLink>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <NavLink to="/shopping-cart">Shopping Cart</NavLink>
            </NavigationMenuLink>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </NavigationMenu>
        <Outlet />
      </div>
      <Toaster />
    </>
  );
};
