"use client";
import React, { useState, useEffect } from "react";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

// Definir el tipo de imágenes con descripción
interface ImageData {
    src: string;
    text: string;
}

// Definir las props que recibirá el componente
interface ReactImageGalleryProps {
    images: ImageData[];
}

const ReactImageGallery: React.FC<ReactImageGalleryProps> = ({ images }) => {
  
    return (
        <Box sx={{ padding: "2rem" }}>
            {/* Galería de imágenes */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "center",
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "30%" },
                            cursor: "pointer",
                            borderRadius: "1rem",
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={`Imagen ${index + 1}`}
                            width={500}
                            height={600}
                            style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
                            priority
                        />
                        <Typography variant="body1" sx={{ marginTop: "0.5rem", textAlign: "center", fontWeight: "bold" }}>
                            {image.text}
                        </Typography>
                    </Box>
                    
                ))}
            </Box>

          
        </Box>
    );
};

export default ReactImageGallery;
