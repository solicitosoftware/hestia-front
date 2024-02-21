import Link from "next/link";
import style from "../syles/Booking.module.css";
import Image from "next/image";
import { bookings } from "@prisma/client";

interface Props {
  booking: bookings;
}

const BookingCard = ({ booking }: Props) => {
  return (
    <div className={style.card}>
      <Link href="#" className="block">
        <div className={style.background}>
          <div className={style["container-image"]}>
            <Image
              src={booking.route ?? `/services/${booking.name}.png`}
              className={style.image}
              alt={booking.name}
              width="200"
              height="200"
            />
          </div>
        </div>
        <div className={style["container-title"]}>
          <p className={style.title}>{booking.name}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookingCard;
