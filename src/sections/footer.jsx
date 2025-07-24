import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <Box className="w-full px-6 py-18">
            {/* Top Row */}
            <Box className="max-w-7xl mx-auto relative  flex-col md:flex items-center justify-center py-11">
                {/* Center Links */}
                <Stack direction="row" justifyContent="center" spacing={4}>
                    {["Blog", "About", "Contact", "Community"].map((text) => (
                        <Typography
                            key={text}
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        >
                            {text}
                        </Typography>
                    ))}
                </Stack>

                {/* Social Icons (absolute right) */}
                <Stack
                    direction="row"
                    spacing={2}
                    className="absolute right-0 mt-5 md:mt-0"
                >
                    <Facebook style={{ cursor: "pointer" }} />
                    <Twitter style={{ cursor: "pointer" }} />
                    <Instagram style={{ cursor: "pointer" }} />
                    <Linkedin style={{ cursor: "pointer" }} />
                </Stack>
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 4, bgcolor: "#ffffff33" }} />

            {/* Bottom Row */}
            <Box className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
                {/* Left */}
                <Typography sx={{ fontFamily: "Poppins" }}>
                    © 2023 PT. Metaplay Wallet. All rights reserved
                </Typography>

                {/* Right Links */}
                <Stack direction="row" spacing={3}>
                    <Typography sx={{ cursor: "pointer", fontFamily: "Poppins" }}>
                        Privacy Policy
                    </Typography>
                    <Typography sx={{ cursor: "pointer", fontFamily: "Poppins" }}>
                        Terms & Conditions
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default Footer;
