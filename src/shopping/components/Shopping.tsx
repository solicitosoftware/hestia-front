"use client";

import Product from "@/products/components/Product";
import { ProductType } from "@/products/interfaces/product";
import { useAppSelector } from "@/redux/hooks";
import { selectProduct } from "@/redux/selectors";

interface Props {
  shop: number;
  products: ProductType[];
}

export const Shopping = ({ shop, products }: Props) => {
  const productsRedux = useAppSelector(selectProduct);

  console.log({ productsRedux });

  const getShops = (): ProductType[] => {
    const productShop = Object.keys(shop);
    return products?.filter((x) => productShop.includes(x.id));
  };

  return <Product products={getShops()} />;
};
