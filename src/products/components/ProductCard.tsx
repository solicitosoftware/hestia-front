"use client";

import Image from "next/image";
import { ProductType } from "..";
import style from "../styles/ProductStyle.module.css";
import Link from "next/link";
import { formatPrice } from "@/helpers";
import { namePath } from "@/app/constants";
import { useAppDispatch } from "@/redux/hooks";
import { addProduct } from "@/redux/product/productSlice";

interface Props {
  product: ProductType;
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const addToCart = (product: ProductType) => {
    dispatch(addProduct(product));
  };

  return (
    <div id="card" className={style.card}>
      <svg className={style.background} viewBox="0 0 375 283" fill="none">
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div id="container-image" className={style["container-image"]}>
        <Link prefetch href={`${namePath.pathProducts}/${product.id}`}>
          <Image
            height={100}
            width={100}
            priority={false}
            className={style.image}
            src={product.imagen}
            alt={product.nombre}
          />
        </Link>
      </div>
      <div id="text" className={style.description}>
        <span className={style.name}>{product.nombre}</span>
        <div className="flex mt-1 justify-between">
          <span className={style.category}>{product.categoria.nombre}</span>
          <button onClick={() => addToCart(product)}>
            <span className={style.price}>{formatPrice(product.precio)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
