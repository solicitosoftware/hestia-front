import { bookings } from "@prisma/client";
import style from "../syles/Booking.module.css";
import BookingCard from "./BookingCard";

interface Props {
  bookings: bookings[];
}

const Booking = ({ bookings }: Props) => {
  return (
    <div className="px-2 max-w-[1300px]">
      <div className={style.container}>
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default Booking;
