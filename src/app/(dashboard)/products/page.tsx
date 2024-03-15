import Product from "@/products/components/Product";
import { ProductType } from "@/products/interfaces/product";

export const metadata = {
  title: "Productos",
  description: "Listado de Productos",
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

export default async function ProductsPage() {
  const products = await getProducts(50);
  return (
    <div className="flex flex-col">
      <Product products={products} />
    </div>
  );
}
