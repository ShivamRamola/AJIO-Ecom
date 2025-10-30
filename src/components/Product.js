const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="product_image" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.rating.rate} ratings</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;
