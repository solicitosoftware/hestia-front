import type { Metadata } from "next";
import { fontGeneral } from "./config/fonts";
import "./globals.css";
import { Providers } from "@/redux/providers";

export const metadata: Metadata = {
  title: "Hestia",
  description: "Administración eficiente de propiedades residenciales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fontGeneral.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
