import { NavLink, Outlet } from "react-router-dom";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuLink,
} from "./components/ui/navigation-menu";

export const App = () => {
  return (
    <div className="my-6 gap-16 w-screen flex flex-col items-center">
      <NavigationMenu className="flex justify-between w-5/6 md:w-4/6">
        <div className="flex justify-between gap-4">
          <NavigationMenuLink>
            <NavLink to="/">Home</NavLink>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <NavLink to="/todo-app">Todo App</NavLink>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <NavLink to="/weather-app">Weather App</NavLink>
          </NavigationMenuLink>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </NavigationMenu>
      <div className="w-5/6 md:w-4/6">
        <Outlet />
      </div>
    </div>
  );
};
