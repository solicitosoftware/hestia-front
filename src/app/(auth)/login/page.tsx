import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";
import Image from "next/image";
import style from "./styles/login.module.css";
import Link from "next/link";

const description = `Hestia, te proporciona una solución integral para la
administración eficiente de propiedades residenciales. A través de
nuestra plataforma, es posible llevar a cabo todas las tareas
administrativas necesarias para gestionar una unidad residencial
de manera efectiva.`;

export default function LoginPage() {
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: 'url("/cityDefault.jpg")',
      }}
    >
      <div className={style.background}></div>
      <div className={style.screen}>
        <div className={style.grid}>
          <div className={style.greting}>
            <h1 className={style.title}>¡Bienvenido a Hestia!</h1>
            <p className={style.description}>{description}</p>
          </div>
        </div>
        <div className={style.login}>
          <div className={style["image-hestia"]}>
            <Image
              alt="hestia"
              src={"/logo-hestia.jpg"}
              width={125}
              height={150}
            />
            <button type="button" className={style.google}>
              <div className={style["image-google"]}>
                <Image
                  alt="google"
                  width={20}
                  height={20}
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                ></Image>
                <span>Ingresar con Google</span>
              </div>
            </button>
            <div className={style.separator}>
              <span className={style.line}></span>
              <span>o</span>
              <span className={style.line}></span>
            </div>
            <div className={style.form}>
              <Input label="Correo electronico" type="email" />
              <Input label="Contraseña" type="password" />
              <Button type="submit" styleColor="primary" name="Ingresar" />
            </div>
            <Link href="#" className={style.link}>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
