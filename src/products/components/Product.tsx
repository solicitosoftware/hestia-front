import { ProductCard, ProductType } from "..";
import style from "../styles/ProductStyle.module.css";

interface Props {
  products: ProductType[];
}

export const Product = ({ products }: Props) => {
  return (
    <div id="container" className={style.container}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
