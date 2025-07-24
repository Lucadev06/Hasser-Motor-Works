import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import ReactImageGallery from '@/components/ImagesGallery'

export default function page() {

    // todas las pages podrian estar ento de una carpeta page, dentro de app

    // esta constante podria estar en una carpeta common, dentro de un archivo ej getImages.js y traerlas de ahi.
    const inyeccionesImages = [
        { src: "/images/restauracion-05.jpeg", text: "Puesta en valor Motor M103" },
        { src: "/images/restauracion-04.jpeg", text: "Restauración completa interior W201" },
        { src: "/images/restauracion-06.jpeg", text: "Restauración parlantes W163" }, 
        { src: "/images/restauracion-08.jpeg", text: "Restauración pintura de tapas" },
    ];
    
    return (
        <>
            <Box sx={{backgroundColor: "black"}}><Header/></Box>
        
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5%",
                }}
            >
                <Typography variant='h4'>RESTAURACIONES</Typography>
            </Box>
                
            <ReactImageGallery images={inyeccionesImages} />
            <Footer/>
        </>
   
    )
}
