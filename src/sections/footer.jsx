import logo from '../assets/logo.png'

import React from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Avatar,
    Stack,
    Divider,
} from "@mui/material";
// import {
//     Apple,
//     Android,
//     Github,
//     Instagram,
//     Facebook,
//     Telegram,
//     Reddit,
//     Youtube,
//     Chrome,
//     Twitter,
//     Globe
// } from "lucide-react";
const footerLinks = [
    {
        title: "Wallet",
        links: ["Mobile App", "Browser Extension"],
    },
    {
        title: "Features",
        links: [
            "Buy Crypto",
            "Swaps",
            "Staking",
            "NFTs",
            "Security",
            "SWIFT: Smart Contract Wallet",
        ],
    },
    {
        title: "Build",
        links: ["Developer Docs", "Wallet Core", "Submit dApp", "Get assets listed"],
    },
    {
        title: "Support",
        links: ["FAQ", "Contact Us"],
    },
    {
        title: "About",
        links: [
            "About Us",
            "Careers",
            "Press Kit",
            "Terms of Service",
            "Privacy Notice",
            "Cookie Preferences",
            "Cookie Notice",
            "Blog",
        ],
    },
];

// const socialIcons = [
//     <FacebookIcon />,
//     <GitHubIcon />,
//     <InstagramIcon />,
//     <TwitterIcon />,
//     <RedditIcon />,
//     <TelegramIcon />,
//     <YouTubeIcon />,
// ];

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#f5f5f7",
                borderRadius: "24px",
                my: 6,
                mx: { xs: 2, md: 6 },
                px: { xs: 3, md: 6 },
                py: 6,
            }}
        >
            <Grid container spacing={4} sx={{
                display: "flex", justifyContent: "center", alignItems: "center"
            }}>


                <Grid item size={{ xs: 12, md: 3 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Avatar
                            src={logo}
                            alt="MetaPlay Wallet"
                            sx={{ width: 80, height: 80, mb: 1, borderRadius: "0" }}
                        />
                        <Typography fontWeight="bold" fontSize="24px" color="#0a0a0a" mb={1}>
                            MetaPlay Wallet
                        </Typography>
                    </Box>
                </Grid>
                {/* <Grid item size={{ xs: 12, md: 3 }}>
                    <Box display="flex" flexDirection="column" alignItems="center">


                        <Box mt={4}>
                            <Typography variant="subtitle2" fontWeight="bold">
                                Download Trust Wallet
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={2}>
                                The most trusted & secure crypto wallet.
                            </Typography>


                        </Box>
                    </Box>
                </Grid> */}

                {/* Footer Columns */}
                <Grid item size={{ xs: 12, md: 9 }}>
                    <Grid container spacing={4}>
                        {footerLinks.map((col) => (
                            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={col.title}>
                                <Typography fontWeight="bold" gutterBottom>
                                    {col.title}
                                </Typography>
                                {col.links.map((link) => (
                                    <Typography
                                        key={link}
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 0.5 }}
                                    >
                                        {link}
                                    </Typography>
                                ))}
                            </Grid>
                        ))}

                        {/* Cert Badges
                        <Grid item xs={12} sm={4} md={2}>
                            <Box>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1201/1201642.png"
                                    alt="ISO"
                                    width={60}
                                    style={{ marginBottom: "8px" }}
                                />
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1201/1201642.png"
                                    alt="ISO"
                                    width={60}
                                />
                            </Box>
                        </Grid> */}
                    </Grid>


                </Grid>
            </Grid>

            {/* <Box display="flex" alignItems="center" gap={2}>
                <Typography fontWeight="bold">Stay Connected:</Typography>
                {socialIcons.map((icon, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            bgcolor: "#000",
                            color: "#fff",
                            p: 1,
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {icon}
                    </Box>
                ))}
            </Box> */}
            {/* <Stack spacing={1}>
                <Button
                    variant="outlined"
                    // startIcon={<AppleIcon />}
                    fullWidth
                    sx={{ borderRadius: "24px", textTransform: "none" }}
                >
                    Download for iOS
                </Button>
                <Button
                    variant="outlined"
                    // startIcon={<ChromeIcon />}
                    fullWidth
                    sx={{ borderRadius: "24px", textTransform: "none" }}
                >
                    Download Extension
                </Button>
                <Button
                    variant="outlined"
                    // startIcon={<AndroidIcon />}
                    fullWidth
                    sx={{ borderRadius: "24px", textTransform: "none" }}
                >
                    Download APK
                </Button>
                <Button
                    variant="outlined"
                    // startIcon={<GoogleIcon />}
                    fullWidth
                    sx={{ borderRadius: "24px", textTransform: "none" }}
                >
                    Download for Android
                </Button>
            </Stack> */}

        </Box >
    );
};

export default Footer;
