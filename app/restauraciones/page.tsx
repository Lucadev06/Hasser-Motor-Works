import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'

export default function page() {
  return (
    <>
        <Box sx={{backgroundColor: "black"}}><Header/></Box>
      
        <Box
            sx={{
                marginTop: "5%",
                marginLeft: "5%"
            }}
        >
            <Typography variant='h3'>RESTAURACIONES</Typography>
        </Box>
    </>
   
  )
}
