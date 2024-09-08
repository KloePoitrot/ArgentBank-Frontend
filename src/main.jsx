import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";

import App from "./App";
import Signin from "./pages/signin";
import UserPage from "./pages/user";

import "./css/main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/user",
    element: <UserPage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
