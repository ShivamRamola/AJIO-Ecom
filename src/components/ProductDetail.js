import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    if (!id) return;
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok)
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);

      // Read text first so we can handle empty or invalid JSON responses gracefully
      const text = await res.text();
      if (!text) throw new Error("Empty response from server");

      let resData;
      try {
        resData = JSON.parse(text);
      } catch (err) {
        throw new Error("Failed to parse JSON response");
      }

      setSingleProduct(resData);
    } catch (err) {
      console.error("Failed to fetch product:", err);
      // Store an error object so the UI can show a message instead of crashing
      setSingleProduct({ error: true, message: err.message });
    }
  };

  if (singleProduct === null) {
    return <Skeleton />;
  }
  if (singleProduct && singleProduct.error) {
    return (
      <div className="product-detail-error">
        <h2>Unable to load product</h2>
        <p>{singleProduct.message}</p>
      </div>
    );
  }
  const { image, title, rating = {}, price } = singleProduct;
  return (
    <div className="product-detail">
      <Link
        to="/products"
        className="back-button"
        style={{
          display: "block",
          marginBottom: "20px",
          textDecoration: "none",
          color: "#333",
        }}
      >
        ← Back to Products
      </Link>
      <div
        className="product"
        style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
      >
        <img
          className="product_image"
          src={image}
          alt={title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
        />
        <h2 style={{ marginTop: "20px" }}>{title}</h2>
        <p>
          Rating: {rating?.rate ?? "N/A"} ({rating?.count ?? 0} reviews)
        </p>
        <p className="price" style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          Price: ${price}
        </p>
      </div>
    </div>
  );
};
export default ProductDetail;
