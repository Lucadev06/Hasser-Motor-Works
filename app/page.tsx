"use client";
import Image from "next/image";
import { Button, Box, Typography, ThemeProvider, Tooltip } from "@mui/material";
import { GlobalStyles, useMediaQuery } from "@mui/system";
import { useState, useEffect } from "react";
import PreloadImages from "@/components/PreloadImages";
import "../components/app.css";
import Header from "@/components/Header";
import { servicios } from "@/components/constans/servicios.const";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const isMenuMobile = useMediaQuery("(max-width: 900px)"); // Definir el ancho límite

  // Definir imágenes para cada tipo de dispositivo
  const imagesDesktop = [
    "/images/swap-03.jpeg",
    "/images/inyeccion-12.jpeg",
    "/images/inyeccion-08.jpeg",
    "/images/restauracion-02.jpeg",
    "/images/portada-06.jpeg",
  ];

  const imagesMobile = [
    "images/portada-02.jpeg",
    "/images/portada-03.jpeg",
    "/images/portada-01.jpeg",
    "/images/inyeccion-08.jpeg",
    "/images/swap-03.jpeg",
  ];

  // Estado para imágenes actuales
  const [imagesHead, setImagesHead] = useState<string[]>(
    isMenuMobile ? imagesMobile : imagesDesktop
  );
  const [imagesLoaded, setImagesLoaded] = useState<string[]>([]);
 

  // Efecto para actualizar imágenes al cambiar de tamaño
  useEffect(() => {
    setImagesHead(isMenuMobile ? imagesMobile : imagesDesktop);
  }, [isMenuMobile]); // Se ejecuta cada vez que `isMobile` cambia

  // Preload de imágenes
  useEffect(() => {
    PreloadImages(imagesHead).then(() => setImagesLoaded(imagesHead));
  }, [imagesHead]); // Se ejecuta cada vez que `imagesHead` cambia

 



  const isMobile = useMediaQuery("(max-width: 900px)");
 

  const router = useRouter();
  const handleRedirectSection = (titulo: string) => {
    const rutas = {
      inyecciones: "/inyecciones",
      modificaciones: "/modificaciones",
      restauraciones: "/restauraciones",
      swaps: "/swaps",
    };

    const ruta = rutas[titulo.toLowerCase() as keyof typeof rutas]; // TypeScript entiende que es una clave válida

    if (ruta) {
      router.push(ruta);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        {imagesHead.map((image, index) => (
          <img key={index} src={image} alt={`preload-${index}`} />
        ))}
      </Box>

      <GlobalStyles
        styles={{
          "@keyframes fadeInOut": {
            "0%": { opacity: 1 },
            "20%": { opacity: 1 },
            "25%": { opacity: 0 },
            "95%": { opacity: 0 },
            "100%": { opacity: 0 },
          },
        }}
      />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMenuMobile ? "33rem" : "45rem",
          overflow: "hidden",
        }}
      >
        {imagesHead.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: index === 0 ? 1 : 0,
              animation: `fadeInOut 25s infinite ease-in-out`,
              animationDelay: `${index * 5}s`,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}

        <Header />
      </Box>
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "3rem",
              gap: "4rem",
              marginTop: "2rem",
              backgroundColor: "#f5f5f5",
              borderRadius: "1rem",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Sombra sutil para destacar
            }}
          >
            {/* Lista de servicios */}
            <Box sx={{ flex: 1 }}>
              <ul>
                {servicios.map((servicio, index) => (
                  <li
                    key={index}
                    style={{ marginBottom: "2rem" }}
                    className="lista-servicios"
                  >
                    <Button
                      variant="text"
                      color="primary"
                      sx={{
                        color: "black",
                        fontSize: "2rem",
                       
                      }}
                      onClick={() => handleRedirectSection(servicio.titulo)}
                    >
                      {servicio.titulo}
                    </Button>

                    <Typography variant="body1" sx={{ color: "#333" }}>
                      {servicio.descripcion}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
         
        </>

      <Footer />
    </>
  );
}
