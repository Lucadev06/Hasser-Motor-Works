"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface ImageData {
    src: string;
    text: string;
}

interface ImagesGalleryProps {
    images: ImageData[];
}

const ImagesGallery: React.FC<ImagesGalleryProps> = ({ images }) => {
    return (
        <Box sx={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: "1.5rem",
                    maxWidth: "800px",
                    width: "100%",
                }}
            >
                {images.slice(0, 4).map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: "100%",
                            borderRadius: "1rem",
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={`Imagen ${index + 1}`}
                            width={500}
                            height={600}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "1rem",
                                cursor: "default",
                            }}
                            priority
                        />
                        <Typography
                            variant="body1"
                            sx={{ marginTop: "0.5rem", textAlign: "center", fontWeight: "bold" }}
                        >
                            {image.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ImagesGallery;
