import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Error from "./components/Error";

// Lazy-loaded components
const ProductCard = lazy(() => import("./components/ProductCard"));
const About = lazy(() => import("./components/About"));
const Men = lazy(() => import("./components/Men"));
const Kid = lazy(() => import("./components/Kid"));
const Women = lazy(() => import("./components/Women"));
const Cart = lazy(() => import("./components/Cart"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));

// Layout that stays across all routes (Navbar + content)
const AppLayout = () => (
  <div>
    <Navbar />
    <Suspense
      fallback={
        <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
      }
    >
      <Outlet /> {/* This is where route components will render */}
    </Suspense>
  </div>
);

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <ProductCard /> }, // default (home) route
      { path: "products", element: <ProductCard /> }, // product listing page
      { path: "products/:id", element: <ProductDetail /> }, // product detail page
      { path: "about", element: <About /> },
      { path: "men", element: <Men /> },
      { path: "kids", element: <Kid /> },
      { path: "women", element: <Women /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export default AppLayout;
