import { Shopping } from "@/shopping";

export const metadata = {
  title: "Carrito",
  description: "Productos Agregados",
};

export default async function ShoppingPage() {
  return (
    <div className=" flex flex-col">
      <Shopping />
    </div>
  );
}
