import "@/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LandingPage from "@/pages/Landing";
import AppLayout from "@/layouts/App";
import HomePage from "@/pages/Home";
import BusinessEstablishments from "@/pages/BusinessEstablishments";
import Emissions from "@/pages/Emissions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
const router = createBrowserRouter([
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
      {
        path: "business-establishments",
        element: <BusinessEstablishments />,
      },
      {
        path: "emissions",
        element: <Emissions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
