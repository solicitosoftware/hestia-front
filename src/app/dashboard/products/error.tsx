"use client"; // Error components must be Client Components

import Link from "next/link";
import { namePath } from "../../interfaces";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-red-300 tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] text-white px-2 text-lg rounded rotate-12 absolute">
        {error?.message}
      </div>
      <div className="mt-10 text-center text-white font-semibold">
        <button>
          <span className=" px-8 py-3 bg-[#0FA3C7] rounded-md">
            <Link href={namePath.pathMain}>Ir al Inicio</Link>
          </span>
        </button>
      </div>
    </main>
  );
}
