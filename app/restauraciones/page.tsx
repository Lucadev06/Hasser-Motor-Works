import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import ReactImageGallery from '@/components/ReactImageGallery'

export default function page() {
    const inyeccionesImages = [
      { src:"/images/restauracion-07.jpeg", text: "Restauracion 190E" },   
      { src: "/images/restauracion-05.jpeg", text: "Puesta en valor Motor m103" },
      { src:"/images/restauracion-04.jpeg", text: "Restauracion completa W201" },
      { src: "/images/restauracion-06.jpeg", text: "Restauracion parlantes W164"},
      { src:"/images/restauracion-01.jpeg", text: "Pintura completa 190E" },   
      { src:"/images/restauracion-08.jpeg", text: "Restauracion tapa de valvulas de ferrari y mercedes"},
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
