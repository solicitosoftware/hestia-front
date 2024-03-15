import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url("/cityDefault.jpg")',
      }}
    >
      <div className="absolute bg-gradient-to-b from-primary to-complement opacity-70 inset-0 z-0"></div>
      <div className="min-h-screen flex flex-col md:flex-row mx-0 justify-center">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <img src="" className="mb-3" />
            <h1 className="mb-3 font-bold text-5xl">¡Bienvenido a Hestia!</h1>
            <p className="pr-3 text-justify font-medium">
              Hestia, te proporciona una solución integral para la
              administración eficiente de propiedades residenciales. A través de
              nuestra plataforma, es posible llevar a cabo todas las tareas
              administrativas necesarias para gestionar una unidad residencial
              de manera efectiva.
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="px-12 pb-10 bg-white mx-auto rounded-2xl w-100 flex flex-col items-center">
            <Image
              alt="hestia"
              src={"/logo-hestia.jpg"}
              width={125}
              height={150}
            />
            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-50 text-title rounded-lg p-2 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                ></img>
                <span className="ml-4">Ingresar con Google</span>
              </div>
            </button>
            <div className="flex items-center justify-center space-x-2 my-2">
              <span className="h-px w-16 bg-gray-100"></span>
              <span className="text-gray-300 font-normal">o</span>
              <span className="h-px w-16 bg-gray-100"></span>
            </div>
            <div>
              <Input label="Correo electronico" type="text" />
              <Input label="Contraseña" type="text" />

              <div className="py-2">
                <Button type="submit" styleColor="primary" name="Ingresar" />
              </div>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="text-xs text-title hover:text-complement"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
