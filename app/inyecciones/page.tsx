import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import ReactImageGallery from '@/components/ImagesGallery'

export default function page() {
    const inyeccionesImages = [
        { src:"/images/inyeccion-07.jpeg", text: "Inyección electrónica Alfa Romeo Montreal" },
        { src:"/images/inyeccion-09.jpeg", text: "Inyección electrónica Mercedes Benz W124" },
        { src: "/images/inyeccion-03.jpeg", text: "Inyección programable Mercedes Benz M103"},
        { src:"/images/inyeccion-14.jpeg", text: "Cableado a medida" },   
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
                <Typography variant='h4'>INYECCIONES</Typography>
            </Box>
                
            <ReactImageGallery images={inyeccionesImages} />
            <Footer/>
        </>
   
    )
}
