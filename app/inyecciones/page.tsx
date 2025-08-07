import React from 'react'
import Header from '@/components/headers/Header'
import { Box, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import ReactImageGallery from '@/components/ImagesGallery'
import { inyeccionesImages } from '../utils/imagesData'

export default function page() {

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
