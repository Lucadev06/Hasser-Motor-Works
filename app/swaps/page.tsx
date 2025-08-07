import React from 'react'
import Header from '@/components/headers/Header'
import Footer from '@/components/Footer'    
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import ImageGallery from "@/components/ImagesGallery";
import { swapsImages } from "../utils/imagesData"


export default function Page() {

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
