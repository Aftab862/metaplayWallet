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
import { AppleIcon, ChromeIcon, FacebookIcon, GithubIcon, InstagramIcon, Linkedin, TwitterIcon, YoutubeIcon } from 'lucide-react';
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
    // {
    //     title: "Build",
    //     links: ["Developer Docs", "Wallet Core", "Submit dApp", "Get assets listed"],
    // },
    {
        title: "Support",
        links: ["FAQ", "Contact Us"],
    },
    {
        title: "About",
        links: [
            "About Us",
            // "Careers",
            // "Press Kit",
            "Terms of Service",
            "Privacy Notice",
            "Cookie Preferences",
            "Cookie Notice",
            // "Blog",
        ],
    },
];

const socialIcons = [
    <Linkedin />,
    <FacebookIcon />,
    <GithubIcon />,
    <InstagramIcon />,
    <TwitterIcon />,
    // <RedditIcon />,
    // <TelegramIcon />,
    <YoutubeIcon />,
];


// Real image URLs
const iosIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg";
const androidIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg";
const chromeIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg";
const apkIcon = "https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.5ee64b2e.png&w=256&q=75";




const Footer = () => {
    return (
        <Box className="w-full flex justify-center ">
            {/* <Box className="flex flex-col bg-[#577DF4] w-full max-w-7xl rounded-2xl shadow-[0px_4px_184px_#a9abb533] "></Box> */}
            <Box
                className="w-full max-w-7xl"
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
                                sx={{ width: 250, height: "auto", mb: 1, borderRadius: "0" }}
                            />

                        </Box>
                    </Grid>



                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Grid container spacing={4}>
                            {footerLinks.map((col) => (
                                <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={col.title}>
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


                        </Grid>

                    </Grid>

                </Grid>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 3 }} />

                    <Grid item size={{ xs: 12, md: 4 }}>
                        <Box display="flex" flexDirection="column"  >
                            <Box mt={4} textAlign="start">
                                <Typography variant="subtitle2" fontWeight="bold" >
                                    Download Trust Wallet
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    The most trusted & secure crypto wallet.
                                </Typography>
                            </Box>

                            <Grid container spacing={1} mt={1}>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        endIcon={<img src={iosIcon} alt="iOS" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none" }}
                                    >
                                        Download for iOS
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        endIcon={<img src={chromeIcon} alt="Chrome" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none" }}
                                    >
                                        Download Extension
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        endIcon={<img src={androidIcon} alt="APK" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none" }}
                                    >
                                        Download  APK
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        endIcon={<img src={apkIcon} alt="Android" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none" }}
                                    >
                                        Download for  Android
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 5 }}>
                        <Typography mt={4} fontWeight="bold" variant='h6'>Stay Connected:</Typography>
                        <Box
                            display="flex"
                            // alignItems="center"
                            flexWrap="wrap"
                            gap={2}
                            height="100%"
                            mt={{ xs: 2, md: 2 }}
                        >
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
                                        width: "35px",
                                        height: "35px"
                                    }}
                                >
                                    {icon}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>



            </Box >
        </Box >
    );
};

export default Footer;
