
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const metadata = {
  title: "Hasser Motor Works",
  description: "Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos.",
  openGraph: {
    title: "Hasser Motor Works - Inyecciones, Modificaciones, Restauraciones y Swaps",
    description: "Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos.",
    url: "https://hassermotorworks.com",
    siteName: "Hasser Motor Works",
    images: [
      {
        url: "https://hassermotorworks.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hasser Motor Works",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasser Motor Works - Inyecciones, Modificaciones, Restauraciones y Swaps",
    description: "Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos.",
    images: ["https://hassermotorworks.com/images/og-image.jpg"],
  },
};

// ⬇️ Asegúrate de que `RootLayout` exporta correctamente el componente
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
