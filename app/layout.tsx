import "./globals.css";
import Navbar from "@/components/Navbar";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Título del sitio */}
        <title>Hasser Motor Works</title>

        {/* ✅ Meta descripción */}
        <meta name="description" content="Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos." />

        {/* ✅ Meta keywords */}
        <meta name="keywords" content="INYECCIONES, MODIFICACIONES, SWAPS, RESTAURACIONES, auto" />

        {/* ✅ Autor */}
        <meta name="author" content="Luca Simonazzi" />

        {/* ✅ Open Graph (para redes sociales) */}
        <meta property="og:title" content="Hasser Motor Works - Inyecciones, Modificaciones, Restauraciones y Swaps"/>
        <meta property="og:description" content="Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos." />
        <meta property="og:url" content="https://hassermotorworks.com"/>
        <meta property="og:site_name" content="Hasser Motor Works"/>
        <meta property="og:image" content="https://hassermotorworks.com/images/og-image.jpg"/>
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Cards (para compartir en Twitter/X) */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Hasser Motor Works - Inyecciones, Modificaciones, Restauraciones y Swaps"/>
        <meta name="twitter:description" content="Especialistas en inyecciones, modificaciones y swaps. Hasser Motor Works ofrece soluciones personalizadas para autos clásicos y modernos."/>
        <meta name="twitter:image" content="https://hassermotorworks.com/images/og-image.jpg"/>

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* ✅ Viewport para responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
