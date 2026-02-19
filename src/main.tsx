import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import { FormBuilderApp } from "./apps/FormBuilder/FormBuilderApp.tsx";
import { ImageGalleryApp } from "./apps/ImageGallery/ImageGalleryApp.tsx";
import { Cart } from "./apps/ShoppingCart/components/Cart.tsx";
import { ProductList } from "./apps/ShoppingCart/components/ProductList.tsx";
import { ShoppingCartApp } from "./apps/ShoppingCart/ShoppingCartApp.tsx";
import { TodoApp } from "./apps/Todo/TodoApp.tsx";
import { WeatherApp } from "./apps/Weather/WeatherApp.tsx";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider.tsx";
import "./index.css";
import { Welcome } from "./Welcome.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Welcome,
      },
      {
        path: "/todo",
        Component: TodoApp,
      },
      {
        path: "/weather",
        Component: WeatherApp,
      },
      {
        path: "/image-gallery",
        Component: ImageGalleryApp,
      },
      {
        path: "/form-builder",
        Component: FormBuilderApp,
      },
      {
        path: "/shopping-cart",
        Component: ShoppingCartApp,
        children: [
          {
            index: true,
            Component: ProductList,
          },
          {
            path: "/shopping-cart/cart",
            Component: Cart,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
