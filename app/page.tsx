"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Box, Typography, ThemeProvider, Tooltip } from "@mui/material";
import Keyframes from "styled-components/dist/models/Keyframes";
import { GlobalStyles, useMediaQuery } from "@mui/system";
import { useState, useEffect } from "react";
import PreloadImages from "@/components/PreloadImages";
import "../components/app.css";
import Header from "@/components/Header";
import { servicios } from "@/components/constans/servicios.const";
import Footer from "@/components/Footer";
import { Module } from "vm";


export default function Home() {
 setTimeout(() => {
    document
        .querySelectorAll(".nextjs-toast, .nextjs-static-indicator-toast-wrapper")
        .forEach((el) => el.remove());
}, 100);


  // Imagenes del head
  const imagesHead = [
    "images/portada-02.jpeg",
    "/images/portada-01.jpeg",
    "/images/inyeccion-12.jpeg",
    "/images/restauracion-02.jpeg",
    "/images/swap-03.jpeg",
  ];
  const placeholderImage = "/images/foto-inyecciones-02.svg"; // Imagen de respaldo

  const [currentImage, setCurrentImage] = useState(placeholderImage);
  const [imagesLoaded, setImagesLoaded] = useState<string[]>([]);

  useEffect(() => {
    // Preload todas las imágenes
    PreloadImages(imagesHead).then(() => setImagesLoaded(imagesHead));
  }, []);

  useEffect(() => {
    if (imagesLoaded.length > 0) {
      let index = 0;

      const interval = setInterval(() => {
        index = (index + 1) % imagesHead.length;
        setCurrentImage(imagesLoaded[index]);
      }, 5000); // Cambia la imagen cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [imagesLoaded]);

  // imagenes del main
  const imageBody = [
    "/images/inyeccion-11.jpeg",
    "/images/modificacion-02.jpeg",
    "/images/restauracion-01.jpeg",
    "/images/swap-06.jpeg",
    "/images/importacion-01.jpeg"
  ]

  const [imageMain, setImageMain] = useState(imageBody[3]);
   
  const isMobile = useMediaQuery("(max-width: 900px)");
  const handleImageBody = (id: number) => {
    if (id === 1) {
      setImageMain(imageBody[0]);
    }else if (id === 2) {
      setImageMain(imageBody[1]);
    } else if (id === 3) {
      setImageMain(imageBody[2]);
    } else if (id === 4) {
      setImageMain(imageBody[3]);
    } else if (id === 5) {
      setImageMain(imageBody[4]);
    }
  };

  const handleScrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth",block: 'center', 
        inline: 'center'  });
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
          height: "40rem",
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

        <Header/>
      </Box>
      {isMobile ? (
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
          <Box 
            sx={{ flex: 1}}>
            <ul >
              {servicios.map((servicio, index) => (
                <li key={index} style={{ marginBottom: "2rem" }}className="lista-servicios">
                  <Button variant="text" color="primary" className="botones-item-main" onClick={() => {handleImageBody(servicio.id), handleScrollToElement("contenedor-imagenes")}}>
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
          <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
           
            padding: "1rem",
            transition: "transform 0.3s ease-in-out",
            marginTop: "1rem",
          }}
          id="contenedor-imagenes"
        >
          <Image
            src={imageMain}
            alt="Servicio"
            width={700}
            height={500}
            style={{
              borderRadius: "2rem",
              objectFit: "cover",
            }}
            />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
        <Box 
          sx={{ flex: 1}}>
          <ul >
            {servicios.map((servicio, index) => (
              <li key={index} style={{ marginBottom: "2rem" }}className="lista-servicios">
                <Button variant="text" color="primary" className="botones-item-main" onClick={() => {handleImageBody(servicio.id), handleScrollToElement("contenedor-imagenes")}}>
                  {servicio.titulo}
                </Button>
                <Typography variant="body1" sx={{ color: "#333" }}>
                  {servicio.descripcion}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>

        {/* Contenedor de imagen */}
        {/* Imagen dinámica */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
            overflow: "hidden",
            padding: "1rem",
            transition: "transform 0.3s ease-in-out",
            marginTop: "1rem",
          }}
          id="contenedor-imagenes"
        >
          <Image
            src={imageMain}
            alt="Servicio"
            width={720}
            height={750}
            style={{
              borderRadius: "2rem",
              objectFit: "cover",
              marginBottom: "2rem",
            }}
            />
          </Box>
        </Box>
      )}
      
      <Footer/>
    </>
  );
}
