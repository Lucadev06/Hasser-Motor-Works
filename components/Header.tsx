"use client";
import React from 'react'
import Image from 'next/image'
import { Box, Button, Typography, useMediaQuery, Drawer, IconButton, Divider } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
    const router = useRouter();
    let isExtremeLargeScreen = useMediaQuery('(min-width: 1350px)');
    const isLargeScreen = useMediaQuery('(max-width: 1349px) and (min-width: 1110px)');
    const marginLargeValue = isExtremeLargeScreen ? "50%" : isLargeScreen ? "35%" : "33%";

    
    const isLargeMenu = useMediaQuery('(max-width: 999px) and (min-width: 850px)');
    const isSmallMenu = useMediaQuery('(max-width: 849px) and (min-width: 700px)');
    const isExtraSmallMenu = useMediaQuery('(max-width: 799px) and (min-width: 550px)');
    const isExtraExtraSmallMenu = useMediaQuery('(max-width: 549px) and (min-width: 450px)');
    const isExtraExtraExtraSmallMenu = useMediaQuery('(max-width: 449px) and (min-width: 320px)');
    let marginLargeValueMenu;
    if (isLargeMenu) {
        marginLargeValueMenu = "33%";
    } else if (isSmallMenu) {
        marginLargeValueMenu = "30%";
    } else if (isExtraSmallMenu) {
        marginLargeValueMenu = "24%";
    } else if (isExtraExtraSmallMenu) {
        marginLargeValueMenu = "14%";
    } else if (isExtraExtraExtraSmallMenu) {
        marginLargeValueMenu = "5%";
    }
    
    // Puntos de quiebre personalizados
    //const isLargeScreen = useMediaQuery('(min-width: 1200px)');
    const isSmallcreen = useMediaQuery('(max-width: 999px) and (min-width: 320px)');   
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) return null;
    return (
        
        <Box
            sx={{
            position: "relative",
            zIndex: 1, // Asegura que este contenido esté encima del fondo
            display: "flex",
            flexDirection: "column",
            alignItems: "normal",
            justifyContent: "left",
            height: "100%",
            color: "white", // Color del texto para contraste con el fondo
            marginLeft: "2rem"
            }}
        >
            <Image
                src="/images/logo-hasser-03.png"
                alt="logo"
                width={200}
                height={100}
                style={{
                    borderRadius: "1rem",
                    maxWidth: "3rem",
                    maxHeight: "4rem",
                }}
                className="logo"
            />

            <Typography
            variant="h4"
            fontFamily={{ fontFamily: "Arial, sans-serif", fontSize: "1.5rem" }}
            sx={{
                margin: "1%",
                marginLeft: "4rem",
                marginTop: "-3rem"
            }}
            >
                Hasser Motor Works
            </Typography>

            {isSmallcreen ? (
                <>
                    <Box
                        sx={{
                            marginLeft: "90%",
                            marginTop: "-2.5rem",
                            color: "black",
                        }}
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <IconButton>
                            <MenuIcon sx={{color: "white"}}/>
                        </IconButton>
                    </Box>

                    <Drawer
                        anchor="right"
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                        PaperProps={{
                            sx: {
                                backgroundColor: "black",
                                color: "black",
                                width: "40%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "right",
                                padding: "1rem",
                                marginTop: "0.5rem",
                            }}
                        >
                            <Image
                                src="/images/logo-hasser-03.png"
                                alt="logo"
                                width={200}
                                height={100}
                                priority
                                style={{
                                    borderRadius: "1rem",
                                    maxWidth: "3rem",
                                    maxHeight: "4rem",
                                    marginTop: "1rem"
                                }}
                                className="logo"
                            />
                            <IconButton
                                sx={{
                                   marginLeft: marginLargeValueMenu,
                                }}
                            >
                                <CloseIcon sx={{color: "white"}} onClick={() => setIsDrawerOpen(false)}/>
                            </IconButton>
                            </Box>
                            <Divider sx={{color: "white"}}/>
                            
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "left",
                                    justifyContent: "left",
                                    marginTop: "2rem",
                                }}
                                >
                                 <Button
                                    variant="text"
                                    sx={{
                                    color: "white",
                                    }}
                                    onClick={() => router.push('/')}
                                >
                                    Home
                                </Button>

                                <Button
                                    variant="text"
                                    sx={{
                                    color: "white",
                                    }}
                                    onClick={() => router.push('/inyecciones')}
                                >
                                    Inyecciones
                                </Button>

                                <Button
                                    variant="text"
                                    sx={{
                                    color: "white",
                                    }}
                                    onClick={() => router.push("./modificaciones")}
                                >
                                    Modificaciones
                                </Button>

                                <Button
                                    variant="text"
                                    sx={{
                                        color: "white",
                                    }}
                                    onClick={() => router.push("./restauraciones")}
                                >
                                    Restauraciones
                                </Button>

                                <Button
                                    variant="text"
                                    sx={{
                                    color: "white",
                                    }}
                                    onClick={() => router.push("./swaps")}
                                >
                                    Swaps
                                </Button>
                    
                    
                </Box>
                       
            </Drawer>
                </>
                
            ) : (
                <Box
                    sx={{
                        marginLeft: marginLargeValue,
                        marginTop: "-2.4rem",
                        color: "black",
                    }}
                >
                    <Button
                        variant="text"
                        sx={{
                        color: "white",
                        }}
                        onClick={() => router.push('/')}
                    >
                        Home
                    </Button>

                    <Button
                        variant="text"
                        sx={{
                        color: "white",
                        }}
                        onClick={() => router.push('/inyecciones')}
                    >
                        Inyecciones
                    </Button>

                    <Button
                        variant="text"
                        sx={{
                        color: "white",
                        }}
                        onClick={() => router.push("./modificaciones")}
                    >
                        Modificaciones
                    </Button>

                    <Button
                        variant="text"
                        sx={{
                            color: "white",
                        }}
                        onClick={() => router.push("./restauraciones")}
                    >
                        Restauraciones
                    </Button>

                    <Button
                        variant="text"
                        sx={{
                        color: "white",
                        }}
                        onClick={() => router.push("./swaps")}
                    >
                        Swaps
                    </Button>

                </Box>
            )}

        </Box>
    ) 
}
