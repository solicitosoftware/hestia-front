import { ProductType } from "../interfaces/product";
import style from "../styles/ProductStyle.module.css";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductType[];
}

const Product = ({ products }: Props) => {
  return (
    <div id="container" className={style.container}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
