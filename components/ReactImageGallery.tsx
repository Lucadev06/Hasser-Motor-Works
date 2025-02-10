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
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

    // Bloquea el scroll de la página cuando el modal está abierto
    useEffect(() => {
        if (open) {
            document.documentElement.style.overflow = "hidden"; // Evita el scroll en la página
        } else {
            document.documentElement.style.overflow = ""; // Restaura el scroll al cerrar el modal
        }
        return () => {
            document.documentElement.style.overflow = ""; // Asegura que el scroll se restaura si el componente se desmonta
        };
    }, [open]);

    const openDialog = (image: ImageData) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
        setSelectedImage(null);
    };

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

            {/* Modal con scroll interno y sin movimiento en la página */}
                {/*<Dialog
                    open={open}
                    onClose={closeDialog}
                    maxWidth="md"
                    sx={{
                        "& .MuiPaper-root": {
                            width: "600px",
                            maxHeight: "90vh", // Altura máxima del modal
                            overflowY: "auto", // Permitir scroll solo dentro del modal
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "1rem",
                            backgroundColor: "white",
                            borderRadius: "8px",
                        }}
                    >
                       
                        <IconButton
                            onClick={closeDialog}
                            sx={{
                                position: "absolute",
                                top: "-8px",
                                right: "0px",
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                      
                        {selectedImage && (
                            <>
                                <Image
                                    src={selectedImage.src}
                                    alt="Imagen Seleccionada"
                                    width={500}
                                    height={400}
                                    style={{ maxWidth: "100%", height: "auto", borderRadius: "1rem", marginTop: "1rem" }}
                                />
                                <Typography variant="h6" sx={{ marginTop: "1rem", textAlign: "center" }}>
                                    {selectedImage.text}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Dialog>*/}
        </Box>
    );
};

export default ReactImageGallery;
