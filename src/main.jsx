import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Solution from "./Pages/Solution";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <RouterProvider router={router} />
  // </React.StrictMode>,
);
