import { productList } from "../utils/constant";
import { Product } from "./Product";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductCard;
