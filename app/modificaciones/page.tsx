import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import ReactImageGallery from '@/components/ReactImageGallery'

export default function page() {
    const modificacionesImages = [
        { src: "/images/modificacion-04.jpeg", text: "Conductos de admisión M112" },
        { src: "/images/modificacion-11.jpeg", text: "Modificación completa interior W124" },
        { src: "/images/modificacion-12.jpeg", text: "REPRO W211" },
        { src: "/images/modificacion-10.jpeg", text: "Compresora AMG SLK32" },
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
                <Typography variant='h4'>MODIFICACIONES</Typography>
            </Box>
                
            <ReactImageGallery images={modificacionesImages} />
            <Footer/>
        </>
   
    )
}
