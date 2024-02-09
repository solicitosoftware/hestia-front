"use client"; // Error components must be Client Components

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-black tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] text-white px-2 text-lg rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="mt-10 text-center">
        {/* <p className="text-sm mb-4">{error.message}</p> */}
        <button>
          <span className="relative block px-8 py-3 bg-[#1A2238] text-white rounded-md">
            <Link href="/">Go Home</Link>
          </span>
        </button>
      </div>
    </main>
  );
}
