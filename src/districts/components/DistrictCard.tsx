import Image from "next/image";
import style from "../styles/DistrictStyle.module.css";
import Link from "next/link";
import { namePath } from "@/app/constants";
import { districts } from "@prisma/client";

interface Props {
  district: districts;
}

const DistrictCard = ({ district }: Props) => {
  return (
    <Link
      href={`${namePath.pathDistricts}/${district.id}`}
      className={style.link}
    >
      <div className={style.container}>
        <div className={style["container-image"]}>
          <Image
            className={style.image}
            height={250}
            width={380}
            src={district.image ?? "/cityDefault.jpg"}
            alt={district.name}
          />
        </div>
        {/* {district.description.length !== 0 && (
          <div className={style["position-desciption"]}>
            <div className={style["container-desciption"]}>
              {district.description.map((desciption) => (
                <p key={desciption.name} className={style.desciption}>
                  <svg
                    className={style.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d={`${desciption?.icon}`}></path>
                  </svg>
                  <span className={style.amount}>{desciption.cantidad}</span>
                </p>
              ))}
            </div>
          </div>
        )} */}
        <span className={style.name}>{district.name}</span>
      </div>
    </Link>
  );
};

export default DistrictCard;
