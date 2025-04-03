import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hasser Motor Works',
  description: 'Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos. Con un equipo de expertos, garantizamos calidad y rendimiento en cada proyecto.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
