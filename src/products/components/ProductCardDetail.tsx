import Image from "next/image";
import { ProductType } from "..";
import style from "../styles/ProductDetailStyle.module.css";
import { formatPrice } from "@/utils";
import Link from "next/link";
import { namePath } from "@/app/constants";

interface Props {
  product: ProductType;
}

export const ProductCardDetail = ({ product }: Props) => {
  return (
    <div className={style.card}>
      <Image
        src={product?.imagen}
        width={375}
        height={250}
        className={style.image}
        alt={product?.nombre}
      />
      <div className={style.detail}>
        <h1 className={style.name}>{product?.nombre}</h1>
        <Link href={`${namePath.pathDistricts}${product?.categoria.id}`}>
          <span className={style.category}>{product?.categoria.nombre}</span>
        </Link>
        <span className={style.description}>{product?.descripcion}</span>
        <div className="grid-cols-2 flex group justify-between">
          <div className="font-black flex flex-col">
            <span
              className={`${product?.estado ? "text-lime-300" : "text-red-300"}
                  text-xs md:text-xl`}
            >
              {product?.estado ? "Disponible" : "No Disponible"}
            </span>
            <span className={style.price}>{formatPrice(product?.precio)}</span>
          </div>
          <div className="flex flex-col items-end">
            <div className=" h-4 md:h-7" />
            <span className={style.orden}>#{product?.orden}</span>
          </div>
        </div>
      </div>
      <div className={style["background-container"]}>
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
      </div>
    </div>
  );
};
