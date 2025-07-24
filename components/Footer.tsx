import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button, Box, Typography, ThemeProvider, Tooltip } from "@mui/material";

export default function Footer() {
  return (
    /* esta bien pero si armas clases de ccs queda mas prolijo*/
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
      gap: "1rem",
      backgroundColor: "#f5f5f5",
      borderRadius: "1rem",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Sombra sutil para destacar
      marginTop: "1rem", // Espacio entre el contenido y el footer
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Button>
        <Tooltip title="Hablanos y cotiza tu sueño">
          <a href="https://wa.me/5491150445267" target="_blank">
            <WhatsAppIcon/>
          </a>
        </Tooltip>

       
      </Button>
      
      <Button>
        <a href="https://www.instagram.com/hasser_performance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <InstagramIcon/>
        </a>
      </Button>

      <Button>
        <a href="https://www.facebook.com/profile.php?id=100091657059091&ref=xav_ig_profile_web" target="_blank">
          <FacebookIcon/>
        </a>
      </Button>
    </Box>
    {/*aca el año podria ser una variable q tome el año actual y lo muestre Para no tener q estar cambiando el año y haga solo*/}
    <Typography variant="body1" sx={{ color: "#333" }}>
      2025 © Todos los derechos reservados
    </Typography>
  </Box>
  )
}
