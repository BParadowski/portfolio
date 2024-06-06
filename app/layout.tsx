import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["500", "400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid min-h-screen grid-rows-[auto_1fr_auto]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
