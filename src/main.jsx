import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";

import App from "./App";
import Signin from "./pages/signin";
import UserPage from "./pages/user";

import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from './reducers'

import "./css/main.css"

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
