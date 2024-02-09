import { Product, ProductType } from "../../../products";

const getProducts = async (
  limit: number = 10,
  offset: number = 0
): Promise<ProductType[]> => {
  const data: ProductType[] = await fetch(
    `https://us-central1-elprincipepruebas.cloudfunctions.net/productos/getProductos/${0}?limit=${limit}`
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
    <div className=" flex flex-col">
      <Product products={products} />
    </div>
  );
}
