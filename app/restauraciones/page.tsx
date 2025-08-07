import React from 'react'
import Header from '@/components/headers/Header'
import { Box, Typography } from '@mui/material'
import Footer from '@/components/Footer'
import ReactImageGallery from '@/components/ImagesGallery'
import { restauracionesImages } from '../utils/imagesData'

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
                <Typography variant='h4'>RESTAURACIONES</Typography>
            </Box>
                
            <ReactImageGallery images={restauracionesImages} />
            <Footer/>
        </>
   
    )
}
