"use client";
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import { smallScreenQuery } from './constans/mediaQueries';
import { useState, useEffect } from 'react';

export default function Header() {
  const isSmallScreen = useMediaQuery(smallScreenQuery);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "normal",
        justifyContent: "left",
        height: "4rem",
        color: "white",
        marginLeft: "2rem"
      }}
    >
  
      <Box
        sx={{
          width: "3rem",
          height: "4rem",
          borderRadius: "1rem",
          overflow: "hidden",
          transition: "transform 0.3s ease, filter 0.3s ease",
          "&:hover": {
            transform: "rotate(360deg)",
            filter: "saturate(3)",
          },
        }}
      >
        <Image
          src="/images/logo-hasser-03.png"
          alt="logo"
          width={200}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            marginTop: "0.3rem",
          }}
        />
      </Box>

      <Typography
        variant="h4"
        sx={{
          margin: "1%",
          marginLeft: "4rem",
          marginTop: "-3rem",
          fontFamily: "Arial, sans-serif",
          fontSize: "1.5rem",
        }}
      >
        Hasser Motor Works
      </Typography>

      {isSmallScreen ? <HeaderMobile /> : <HeaderDesktop />}
    </Box>
  );
}
