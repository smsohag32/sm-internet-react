import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Packages from "./components/Packages/Packages";
import Services from "./components/Services/Services";
import Blogs from "./components/Blogs/Blogs";
import GetConnection from "./components/GetConnection/GetConnection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("packages.json"),
      },
      {
        path: "packages",
        element: <Packages />,
        loader: () => fetch("packages.json"),
      },

      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "packages/:packageId",
        element: <GetConnection />,
        loader: () => fetch("packages.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
