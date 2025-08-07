"use client";
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useResponsiveValue } from '@/components/hooks/useResponsiveValue';
import { mediaQueryRulesMain } from '@/components/headers/constans/mediaQueries';

export default function HeaderDesktop() {
    const router = useRouter();
    const marginLargeValue = useResponsiveValue(mediaQueryRulesMain);

    return (
        <Box
            sx={{
                marginLeft: marginLargeValue,
                marginTop: "-2.4rem",
            }}
        >
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
    );
}
