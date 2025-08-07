"use client";
import { Box, Drawer, IconButton, Divider, Button } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useResponsiveValue } from '@/components/hooks/useResponsiveValue';
import { mediaQueryRulesMenu } from '@/components/headers/constans/mediaQueries';

export default function HeaderMobile() {
    const router = useRouter();
    const marginLargeValueMenu = useResponsiveValue(mediaQueryRulesMenu);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <Box
                sx={{
                    marginLeft: "90%",
                    marginTop: "-2.5rem",
                    height: "3.5rem",
                }}
                onClick={() => setIsDrawerOpen(true)}
            >
                <IconButton>
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>
            </Box>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: "black",
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
                            }}
                        />
                    </Box>

                    <IconButton sx={{ marginLeft: marginLargeValueMenu }}>
                        <CloseIcon sx={{ color: "white" }} onClick={() => setIsDrawerOpen(false)} />
                    </IconButton>
                </Box>

                <Divider sx={{ color: "white" }} />
                <Box sx={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
                    {["/", "/inyecciones", "/modificaciones", "/restauraciones", "/swaps"].map((path, idx) => (
                        <Button
                            key={idx}
                            variant="text"
                            sx={{ color: "white" }}
                            onClick={() => router.push(path)}
                        >
                            {["Home", "Inyecciones", "Modificaciones", "Restauraciones", "Swaps"][idx]}
                        </Button>
                    ))}
                </Box>
            </Drawer>
        </>
    );
}
