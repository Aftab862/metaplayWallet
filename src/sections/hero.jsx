import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import wallet from '../assets/wallet.png';
import Group from '../assets/home/Group.png';
import { ArrowUp } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                px: { xs: 2, sm: 3, md: 6, lg: 10 },
                py: { xs: 6, md: 10 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'linear-gradient(to right, #fff, #f8f6ff)',
            }}
        >
            {/* Content max width for huge screens */}
            <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto' }}>
                <Grid
                    container
                    spacing={{ xs: 4, sm: 6, md: 8 }}
                    alignItems="center"
                    justifyContent="space-evenly"
                >
                    {/* LEFT: Text/CTA */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Box>
                                <Stack
                                    spacing={2}
                                    alignItems={{ xs: 'center', md: 'flex-start' }}
                                    textAlign={{ xs: 'center', md: 'left' }}
                                >
                                    <Box display="flex" flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                                        <Typography
                                            sx={{
                                                fontSize: 'clamp(45px, 6vw, 84px)',
                                                fontWeight: 600,
                                                lineHeight: 1,
                                            }}
                                        >
                                            Meta&nbsp;
                                        </Typography>
                                        <Box
                                            component="img"
                                            src={wallet}
                                            loading="lazy"
                                            alt="Wallet Icon"
                                            sx={{
                                                width: { xs: 80, sm: 110, md: 140, lg: 150 },
                                                mx: 1,
                                                p: { xs: 0.5, md: 1 },
                                            }}
                                        />
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: 'clamp(45px, 6vw, 84px)',
                                            fontWeight: 600,
                                            lineHeight: 1,
                                        }}
                                    >
                                        Play Wallet
                                    </Typography>

                                    <Typography sx={{ fontSize: { xs: 14, sm: 16, md: 18 }, color: '#000' }}>
                                        Fast&nbsp;•&nbsp;Easy&nbsp;•&nbsp;Secure
                                    </Typography>
                                </Stack>

                            </Box>
                        </motion.div>
                    </Grid>

                    {/* RIGHT: Phone/Visual */}
                    <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: { xs: 'min(90vw, 360px)', sm: 'min(80vw, 440px)', md: 520, lg: 560 },
                                    mx: { xs: 'auto', md: '0' },
                                }}
                            >
                                <Box
                                    component="img"
                                    loading="lazy"
                                    src={Group}
                                    alt="App preview in phone frame"
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>

            {/* Scroll Down Label (hidden on mobile) */}
            <Box
                component="a"
                href="#footer"
                className="hidden md:block"
                sx={{
                    zIndex: 1,
                    position: 'absolute',
                    right: { sm: '1.5rem', md: '12%' },
                    bottom: { sm: '15%', md: '25%' },
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    fontSize: 14,
                    color: '#000',
                    textDecoration: 'none',
                }}
            >
                <Typography component="span">Scroll Down</Typography>
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', right: 2, top: '-35%' }}
                >
                    <ArrowUp size={18} />
                </motion.div>
            </Box>

            {/* Big Background Text (desktop only) */}
            <Typography
                className="hidden md:flex"
                sx={{
                    position: 'absolute',
                    top: { md: '-6%', lg: '-10%' },
                    left: 0,
                    right: 0,
                    WebkitTextStroke: '1px #000000',
                    opacity: 0.08,
                    fontWeight: 600,
                    color: 'transparent',
                    fontSize: { md: '35vw', lg: '32vw', xl: '28vw' },
                    textAlign: 'center',
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            >
                meta
            </Typography>
        </Box>
    );
};

export default Hero;
