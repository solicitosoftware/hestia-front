import { ProductType } from "@/products/interfaces/product";
import { Shopping } from "@/shopping";
import { cookies } from "next/headers";

export const metadata = {
  title: "Carrito",
  description: "Productos Agregados",
};

const getProducts = async (
  limit: number = 10,
  offset: number = 0
): Promise<ProductType[]> => {
  const data: ProductType[] = await fetch(
    `https://us-central1-elprincipepruebas.cloudfunctions.net/productos/getProductos/${offset}?limit=${limit}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.error(error);
    });

  return data;
};

export default async function ShoppingPage() {
  const cookieStore = cookies();
  const cookieProducts = JSON.parse(cookieStore.get("products")?.value ?? "{}");

  const products = await getProducts(50);

  return (
    <div className=" flex flex-col">
      <Shopping products={products} shop={cookieProducts} />
    </div>
  );
}
