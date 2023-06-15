import { Saira } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Caputeeno",
  description: "Desafio Rocketseat para criação de um Ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
