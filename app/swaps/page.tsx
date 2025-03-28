import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'    
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import ImageGallery from "@/components/ImagesGallery";


export default function Page() {
    const swapsImages = [
        { src: "/images/swap-05.jpeg", text: "190D SWAP SLK 230K 240HP" },
        { src: "/images/inyeccion-12.jpeg", text: "W202 SWAP 3.7 AMG" },
        { src: "/images/swap-01.jpeg", text: "W111 SWAP M272K - Inyeccion Directa" },
        { src: "/images/swap-06.jpeg", text: "190E Swap 2.3 con cuerpos de admisión" },
    ];
    return (
        <>
            <Box sx={{ backgroundColor: "black" }}>
                <Header />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5%",
                }}
            >
                <Typography variant="h4">SWAPS</Typography>
            </Box>
            <ImageGallery images={swapsImages} />
            <Footer />
        </>
    )
}
