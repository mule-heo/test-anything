import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import Confirm from "./components/Confirm";
import Input from "./components/Input";
import Result from "./components/Result";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "confirm",
        element: <Confirm />,
      },
      {
        path: "input",
        element: <Input />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
