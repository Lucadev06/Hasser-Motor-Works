import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const metadata: Metadata = {
  title: "Hasser Motor Works",
  description: "Generated by create next app",
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
      <head>
      <meta name="viewport" content="width=device-width, initial-scale"/>
      <meta name="description" content="Hasser Motor Works" />
      <meta name="author" content="Luca Simonazzi"/>
      <meta name="keywords" content="INYECCIONES, MODIFICACIONES, SWAPS, RESTAURACIONES, auto"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/site.webmanifest" />
        <title>Hasser Motor Works</title>
      </head>

      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
