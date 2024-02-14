"use client";

import { Product } from "@/products";
import { useAppSelector } from "@/redux/hooks";
import { selectProduct } from "@/redux/selectors";

interface Props {}

export const Shopping = ({}: Props) => {
  const productsShopping = useAppSelector(selectProduct);
  return <Product products={productsShopping} />;
};
