import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoApp } from "./Todo/TodoApp.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App.tsx";
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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
