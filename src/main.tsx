import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider.tsx";
import { FormBuilderApp } from "./FormBuilder/FormBuilderApp.tsx";
import { ImageGalleryApp } from "./ImageGallery/ImageGalleryApp.tsx";
import "./index.css";
import { TodoApp } from "./Todo/TodoApp.tsx";
import { WeatherApp } from "./Weather/WeatherApp.tsx";
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
