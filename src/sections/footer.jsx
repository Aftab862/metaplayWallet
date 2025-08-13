import logo from '../assets/MetaplayWallet.svg'

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
import { useNavigate } from 'react-router-dom';
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
        links: [
            { id: 1, name: "Mobile App", url: "/mobile-download" },
            { id: 2, name: "Browser Extension", url: "/web-download" },
        ],
    },
    {
        title: "Features",
        links: [
            // { id: 3, name: "Buy Crypto", url: "#" },
            // { id: 4, name: "Swaps", url: "#" },
            { id: 5, name: "Staking", url: "/staking" },
            { id: 6, name: "NFTs", url: "#" },
            { id: 7, name: "Security", url: "#" },
            { id: 8, name: "SWIFT: Smart Contract Wallet", url: "#" },
        ],
    },
    // {
    //     title: "Build",
    //     links: ["Developer Docs", "Wallet Core", "Submit dApp", "Get assets listed"],
    // },
    {
        title: "Support",
        links: [
            { id: 9, name: "FAQ", url: "/support" },
            { id: 10, name: "Contact Us", url: "/support" },
        ],
    },
    {
        title: "About",
        links: [
            { id: 11, name: "About Us", url: "#" },
            { id: 12, name: "Terms of Use", url: "/terms-of-use" },
            { id: 13, name: "Privacy Policy", url: "/privacy-policy" },
            // { id: 14, name: "Cookie Preferences", url: "#" },
            { id: 15, name: "Cookie Notice", url: "/cookie-notice" },
        ],
    },
];


const socialIcons = [
    // { icon: <Linkedin />, link: "https://linkedin.com" },
    // { icon: <FacebookIcon />, link: "https://facebook.com" },
    // { icon: <GithubIcon />, link: "https://github.com" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/metaplayw/" },
    { icon: <TwitterIcon />, link: "https://x.com/MetaplayW" },
    // { icon: <YoutubeIcon />, link: "https://youtube.com" },
];

// Real image URLs
const iosIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg";
const androidIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg";
const chromeIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg";
const apkIcon = "https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.5ee64b2e.png&w=256&q=75";




const Footer = () => {
    const navigate = useNavigate();

    return (
        <Box className="w-full flex justify-center " id="footer">
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
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={() => navigate("/")}>
                            <Avatar
                                src={logo}
                                alt="MetaPlay Wallet"
                                sx={{ width: { xs: 130, md: 200 }, height: "auto", mb: 1, borderRadius: "0" }}
                            />

                        </Box>
                    </Grid>



                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Grid container spacing={4}>
                            {footerLinks.map((col) => (
                                <Grid item size={{ xs: 6, sm: 6, md: 3 }} key={col.title}>
                                    <Typography fontWeight="bold" gutterBottom>
                                        {col.title}
                                    </Typography>
                                    {col.links.map((link) => (
                                        <Typography
                                            key={link.id}
                                            variant="body2"
                                            color="text.secondary"
                                            className='cursor-pointer'
                                            sx={{ mb: 0.5 }}
                                            onClick={() => navigate(link?.url)}
                                        >
                                            {link?.name}
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
                            <Box mt={4} className="text-center md:text-start">
                                <Typography variant="subtitle2" fontWeight="bold" >
                                    Download Trust Wallet
                                </Typography>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    The most trusted & secure crypto wallet.
                                </Typography>
                            </Box>

                            <Grid container spacing={1} mt={1} justifyContent={{ xs: "center", md: "start" }}>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"

                                        className='w-[200px] md:w-[auto]'
                                        endIcon={<img src={iosIcon} alt="iOS" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none", justifyContent: "space-between", }}

                                        component="a"
                                        href="/mobile-download"
                                    >
                                        Download for iOS
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        className='w-[200px] md:w-[auto]'


                                        endIcon={<img src={chromeIcon} alt="Chrome" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none", justifyContent: "space-between", }}
                                        component="a"
                                        href="/web-download"
                                    >
                                        Download Extension
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        className='w-[200px] md:w-[auto]'

                                        endIcon={<img src={androidIcon} alt="APK" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none", justifyContent: "space-between", }}

                                        component="a"
                                        href="/mobile-download"

                                    >
                                        Download  APK
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        variant="outlined"
                                        className='w-[200px] md:w-[auto]'

                                        endIcon={<img src={apkIcon} alt="Android" width={20} height={20} />}
                                        sx={{ borderRadius: "24px", textTransform: "none", justifyContent: "space-between", }}

                                        component="a"
                                        href="/mobile-download"
                                    >
                                        Download for  Android
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        size={{ xs: 12, md: 4 }}
                        gap={2}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", // Center horizontally
                            justifyContent: "flex-end", // Push to bottom
                        }}
                    >
                        <Typography
                            fontWeight="bold"
                            textAlign="center"
                            variant="h6"

                        >
                            Stay Connected:
                        </Typography>

                        <Box
                            display="flex"
                            flexWrap="wrap"
                            gap={2}
                            justifyContent="center"

                        >
                            {socialIcons.map((item, idx) => (
                                <Box
                                    key={idx}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        bgcolor: "#1976d2",
                                        color: "#fff",
                                        p: 1,
                                        borderRadius: "6px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "35px",
                                        height: "35px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            bgcolor: "#1976d2",
                                            transform: "scale(1.1)",
                                        },
                                    }}
                                >
                                    {item.icon}
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
