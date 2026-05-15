import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perfora — Modern Oral Care",
  description: "Premium oral care. Designed for your everyday ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
