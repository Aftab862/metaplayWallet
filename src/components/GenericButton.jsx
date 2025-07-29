import { Box, Button } from '@mui/material'
import { Download } from 'lucide-react'
import React from 'react'

const GenericButton = ({ title, btnHandler, PX, PY, iconType, className }) => {
    return (
        <Button
            onClick={btnHandler}
            variant="contained" // ✅ valid MUI variant
            className={className}
            sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "30px",
                px: PX,
                py: PY,
                backgroundColor: "#1976d2",
                color: "#fff",
                textTransform: "none",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-75%",
                    width: "50%",
                    height: "100%",
                    background:
                        "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)",
                    transform: "skewX(-20deg)",
                    zIndex: 2,
                    animation: "shine 2s ease-in-out infinite",
                },
                "@keyframes shine": {
                    "0%": { left: "-75%" },
                    "100%": { left: "125%" },
                },
                "&:hover": {
                    backgroundColor: "#1565c0",
                },
            }}
        >
            <Box className="flex justify-center items-center gap-2">
                {iconType === "download" && <Download size={20} />}
                {title}
            </Box>
        </Button>
    )
}

export default GenericButton
