import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QueryProvider from "./components/ReactQueryProvider";
import ContactForm from "./components/contact-form/ContactForm";
import ModalProvider from "./components/contact-form/confirmation-modal/ModalProvider";
import ConfirmationModal from "./components/contact-form/confirmation-modal/Modal";

const inter = Roboto({ subsets: ["latin"], weight: ["500", "400", "700"] });

export const metadata: Metadata = {
  title: "Bartosz Paradowski",
  description: "Web dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={`${inter.className} grid min-h-screen grid-rows-[auto_1fr_auto]`}>
          <Header />
          {children}
          <ModalProvider>
            <ContactForm />
            <ConfirmationModal />
          </ModalProvider>
          <Footer />
        </body>
      </QueryProvider>
    </html>
  );
}
