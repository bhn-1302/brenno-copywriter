import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brenno | Copywriter",
  description:
    "Portfólio de copywriter focado em landing pages, páginas de venda e conteúdo estratégico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
