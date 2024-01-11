import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, NavBar } from "@/components/common";
import SideBar from "@/components/ui/SideBar";
import { CartSidebar } from "@/components/cart";
import { UIProvider } from "@/components/context";

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
        <UIProvider>
          <NavBar />
          <SideBar>
            <CartSidebar />
          </SideBar>
          <main>{children}</main>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
