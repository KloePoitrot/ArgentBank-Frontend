import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "signin",
        // element: ,
      },
      {
        path: "user",
        // element: ,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
