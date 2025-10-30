import React, { useEffect, useState } from "react";
import Product from "./Product";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  // keep products in state so we can update (filter) them safely
  // start with empty products so Skeleton shows while we fetch
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    // store fetched products so UI updates and skeleton is removed
    setProducts(resData);
    setFilteredProduct(resData);
  };

  const showTopRated = () => {
    // filter from the original full list so filters don't stack on top of each other
    const filtered = filteredProduct.filter(
      (product) => product.rating && product.rating.rate >= 4
    );
    setProducts(filtered);
  };

  return products.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div style={{ margin: "10px" }}>
        <input
          type="text"
          // onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          placeholder="Search products..."
        />
        <button
          onClick={() => {
            // search from the preserved original list so each search is independent
            const filteredData = filteredProduct.filter((product) => {
              return product.title
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setProducts(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const filteredProducts = products.filter(
            (product) => product.rating.rate >= 4
          );
          setProducts(filteredProducts);
        }}
        style={{ marginTop: "10px" }}
      >
        Top Rated Product
      </button>
      <div className="product-card">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ProductCard;
