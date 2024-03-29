import ProductCardDetail from "@/products/components/ProductCardDetail";
import { ProductType } from "@/products/interfaces/product";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const data: ProductType[] = await fetch(
    "https://us-central1-elprincipepruebas.cloudfunctions.net/productos/api/getProductos"
  ).then((res) => res.json());

  return data.map(({ id }) => {
    id;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const product = await getProduct(params.id);

    return {
      title: `${product?.nombre}`,
      description: `${product?.descripcion}`,
    };
  } catch (error) {
    console.error({ error });
    return {
      title: "Detalle Producto",
      description: "No existe",
    };
  }
}

const getProduct = async (id: string): Promise<ProductType> => {
  try {
    const data: ProductType = await fetch(
      `https://us-central1-elprincipepruebas.cloudfunctions.net/productos/api/getProducto/${id}`,
      // segundos * minutos * horas * dias * meses
      {
        next: {
          revalidate: 60 * 60 * 24 * 7,
        },
      }
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.error({ error });
    return notFound();
  }
};

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProduct(params.id);

  return (
    <div className="flex items-center justify-center h-full">
      <ProductCardDetail product={product} />
    </div>
  );
}
