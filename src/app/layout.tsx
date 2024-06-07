import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ListingAnime",
  description: "Veni wacho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
