import Booking from "@/bookings/components/Booking";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Reserva Zonas Comunes",
  description: "Listado de Zonas Comunes",
};

export default async function BookingsPage() {
  const bookings = await prisma.bookings.findMany({
    orderBy: { name: "asc" },
  });
  return (
    <div className="py-12 px-6">
      <Booking bookings={bookings} />
    </div>
  );
}
