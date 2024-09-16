import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";

import App from "./App";
import Signin from "./pages/signin";
import UserPage from "./pages/user";

import { Provider } from 'react-redux'

import "./css/main.css"
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

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
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
    
  </Provider>
);
