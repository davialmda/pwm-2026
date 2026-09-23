import "./globals.css";

export const metadata = {
  title: "Davi Almeida — Portfólio",
  description: "Portfólio de Davi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
