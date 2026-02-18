import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider.tsx";
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
        path: "/todo-app",
        Component: TodoApp,
      },
      {
        path: "/weather-app",
        Component: WeatherApp,
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
