import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import About from "./components/About";
import Men from "./components/Men";
import Kid from "./components/Kid";
import Women from "./components/Women";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => (
  <div>
    <Navbar />
    <ProductCard />
  </div>
);

// create router AFTER App and other components are defined/imported
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/about", element: <About />, errorElement: <Error /> },
  { path: "/men", element: <Men />, errorElement: <Error /> },
  { path: "/kids", element: <Kid />, errorElement: <Error /> },
  { path: "/women", element: <Women />, errorElement: <Error /> },
  { path: "/cart", element: <Cart />, errorElement: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export default App;
