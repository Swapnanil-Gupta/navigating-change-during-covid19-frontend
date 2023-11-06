import "@/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import GlobalLayout from "@/layouts/GlobalLayout";
import AppLayout from "@/layouts/AppLayout";
import HomePage from "@/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "app",
        element: <AppLayout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
