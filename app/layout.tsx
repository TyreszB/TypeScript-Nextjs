import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typescript Shopify App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
