import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';

import wallet from '../assets/wallet.png';
import subtract from '../assets/subtract.svg';
import subtract1 from '../assets/subtract-1.png';
import mobile2 from '../assets/15-plus-5.png';
import mobileFrame from '../assets/mobileframe.png';
import appStore from '../assets/appstore.svg';
import playStore from '../assets/playstore.svg';
import { ArrowDownNarrowWide, ArrowDownToLine, ArrowUp, MoveDown } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
    return (
        <Box
            className="relative"
            sx={{
                width: '100%',
                minHeight: '100vh',
                px: { xs: 2, md: 8 },
                py: { xs: 6, md: 10 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'linear-gradient(to right, #fff, #f8f6ff)',
            }}
        >
            <Grid container spacing={8} alignItems="center" justifyContent="center">

                {/* Left Text Section */}
                <Grid item xs={12} md={4}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Box>
                            <Stack spacing={2}>
                                <Box display="flex" alignItems="center" flexWrap="wrap">
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '42px', md: '64px' },
                                            fontWeight: '600',
                                            lineHeight: 1,
                                        }}
                                    >
                                        Meta&nbsp;
                                    </Typography>
                                    <Box
                                        component="img"
                                        src={wallet}
                                        alt="Wallet Icon"
                                        sx={{
                                            width: '150px',
                                            mx: 1,
                                            p: 1,
                                        }}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '42px', md: '64px' },
                                        fontWeight: '600',
                                        lineHeight: 1,
                                    }}
                                >
                                    Play Wallet
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: '#000' }}>
                                    Fast Easy Secure
                                </Typography>
                            </Stack>

                            <Box
                                sx={{
                                    mt: 8,
                                    width: '220px',
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={subtract1}
                                    alt="See Video"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '24px',
                                    }}
                                />
                                <Typography
                                    sx={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '12px',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#000',
                                    }}
                                >
                                    See Video
                                </Typography>
                            </Box>
                        </Box>
                    </motion.div>
                </Grid>

                {/* Middle Phone Section */}
                <Grid item xs={12} md={4} zIndex={1}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Box sx={{ position: 'relative', width: '355px', mx: 'auto' }}>
                            <Box
                                component="img"
                                src={mobile2}
                                alt="App Screen"
                                sx={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '25px',
                                    width: '302px',
                                    height: '654px',
                                    borderRadius: '32px',
                                }}
                            />
                            <Box
                                component="img"
                                src={mobileFrame}
                                alt="Phone Frame"
                                sx={{
                                    width: '355px',
                                    height: '698px',
                                    zIndex: 1,
                                }}
                            />
                        </Box>
                    </motion.div>
                </Grid>

                {/* Right Download Section */}
                <Grid item xs={12} md={4} zIndex={1}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Stack spacing={2} className="items-center md:items-start">
                            <Typography
                                sx={{
                                    fontSize: { xs: '32px', md: '40px' },
                                    fontWeight: 600,
                                    color: '#000',
                                }}
                            >
                                Mobile<br />Application
                            </Typography>

                            <Typography sx={{ fontSize: '16px', color: '#000' }}>
                                Download App
                            </Typography>

                            <Stack direction="column" spacing={2}>
                                <Box component="img" src={playStore} alt="Play Store" sx={{ width: '154px' }} />
                                <Box component="img" src={appStore} alt="App Store" sx={{ width: '154px' }} />
                            </Stack>
                        </Stack>
                    </motion.div>
                </Grid>
            </Grid>

            {/* Scroll Down Label */}
            <Typography
                sx={{
                    zIndex: 1,
                    position: 'absolute',
                    right: "12%",
                    bottom: "35%",
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    fontSize: '14px',
                    color: '#000',
                    display: { sm: "none", md: "block" },
                }}
            >
                Scroll Down
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        right: "0",
                        top: "-35%",

                    }}
                >
                    <ArrowUp />
                </motion.div>

            </Typography>

            {/* Big Background Text */}
            <Typography
                className="hidden md:flex"
                variant="h5"
                sx={{
                    position: 'absolute',
                    top: "-10%",
                    WebkitTextStroke: '1px #000000',
                    opacity: 0.1,
                    fontFamily: 'Poppins, Helvetica',
                    fontWeight: 600,
                    color: 'transparent',
                    fontSize: '40vw',
                    textAlign: 'center',
                    lineHeight: 'normal',
                }}
            >
                meta
            </Typography>

            {/* Decorative Image */}
            <Box
                component="img"
                src={subtract}
                alt="Wallet Icon"
                sx={{
                    position: "absolute",
                    display: { sm: "none", md: "block" },
                    width: '450px',
                    mx: 1,
                    right: "10%",
                    bottom: "25%",
                    p: 1,
                    zIndex: 0
                }}
            />
        </Box>
    );
};

export default Hero;
