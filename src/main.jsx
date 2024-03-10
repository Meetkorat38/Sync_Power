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
import Ats from "./components/Ats";
import Ups from "./components/Ups";
import SwitchGear from "./components/SwitchGear";
import CircuitBreaker from "./components/CircuitBreaker";
import ServicesMain from "./components/ServicesMain";

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
        children: [
          {
            path: "/services",
            element: <ServicesMain />,
          },

          {
            path: "/services/ups",
            element: <Ups />,
          },
          {
            path: "/services/ats",
            element: <Ats />,
          },
          {
            path: "/services/circuit-breaker",
            element: <CircuitBreaker />,
          },
          {
            path: "/services/switchgear",
            element: <SwitchGear />,
          },
        ],
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
  <RouterProvider router={router} />
);
