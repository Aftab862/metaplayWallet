import React, { useState } from "react";
import { Button, Box, Paper, Typography, Avatar, ClickAwayListener } from "@mui/material";
import { Globe, Globe2, LanguagesIcon } from "lucide-react";


const languages = [
    { name: "English", img: "https://flagcdn.com/us.svg" },
    { name: "Spanish", img: "https://flagcdn.com/es.svg" },
    { name: "French", img: "https://flagcdn.com/fr.svg" },
    { name: "German", img: "https://flagcdn.com/de.svg" },
    { name: "Chinese", img: "https://flagcdn.com/cn.svg" },
    { name: "Arabic", img: "https://flagcdn.com/sa.svg" },
    { name: "Japanese", img: "https://flagcdn.com/jp.svg" },
];

export default function LanguageSelector() {
    const [open, setOpen] = useState(false);

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener onClickAway={() => handleClickAway}>
            <Box sx={{ position: "relative", display: "inline-block" }}>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '30px',
                        px: 3,
                        py: 1,
                        color: "#1976d2",
                        textTransform: 'none',
                        borderColor: "#1976d2",
                        '&:hover': {
                            backgroundColor: '#1976d2',
                            color: '#fff',
                        },
                    }}


                    color="primary" onClick={() => setOpen(!open)} startIcon={<Globe size={20} />} >
                    Languages
                </Button>

                <Paper
                    elevation={3}
                    sx={{
                        position: "absolute",
                        top: "50px",
                        left: 0,
                        minWidth: 200,
                        bgcolor: "#fff",
                        p: 2,
                        borderRadius: 2,
                        opacity: open ? 1 : 0,
                        transform: open ? "translateY(0)" : "translateY(-10px)",
                        visibility: open ? "visible" : "hidden",
                        transition: "all 0.3s ease",
                        zIndex: 10,
                    }}
                >
                    {languages.map((lang) => (
                        <Box
                            key={lang.name}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                py: 1,
                                px: 1,
                                borderRadius: 1,
                                cursor: "pointer",
                                "&:hover": {
                                    bgcolor: "rgba(0,0,0,0.04)",
                                },
                            }}
                            onClick={() => setOpen(false)}
                        >
                            <Avatar src={lang.img} alt={lang.name} sx={{ width: 24, height: 24 }} />
                            <Typography variant="body2">{lang.name}</Typography>
                        </Box>
                    ))}
                </Paper>
            </Box>
        </ClickAwayListener>
    );
}
