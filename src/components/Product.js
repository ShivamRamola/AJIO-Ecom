import React from "react";
const Product = ({ product }) => {
  const { image, title, price, rating } = product;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{rating.rate} ratings</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
