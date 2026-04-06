import type { Metadata } from "next";
import { Providers } from "../components/ui/provider";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

export const metadata: Metadata = {
  title: "Uber Brasil - Solicite uma viagem",
  description: "Vá a qualquer lugar com o app da Uber",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
