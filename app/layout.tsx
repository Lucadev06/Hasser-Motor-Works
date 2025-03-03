import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: "Hasser Motor Works",
  description: "Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos.",
  keywords: ["INYECCIONES", "MODIFICACIONES", "SWAPS", "RESTAURACIONES", "auto"],
  authors: [{ name: "Luca Simonazzi" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
