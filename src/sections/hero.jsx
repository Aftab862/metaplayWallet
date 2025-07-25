
import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import wallet from '../assets/wallet.png';
import subtract from '../assets/subtract.svg';
import subtract1 from '../assets/subtract-1.png';
import mobile2 from '../assets/15-plus-5.png';
import mobileFrame from '../assets/mobileframe.png';
import appStore from '../assets/appstore.svg';
import playStore from '../assets/playstore.svg';

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
                <Grid item xs={12} md={4}>
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
                </Grid>

                <Grid item xs={12} md={4} zIndex={1}>
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
                </Grid>

                <Grid item xs={12} md={4} zIndex={1}>
                    <Stack spacing={2} className=' items-center md:items-start'>
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
                </Grid>
            </Grid>

            <Typography
                sx={{
                    zIndex: 1,
                    position: 'absolute',
                    right: "12%",
                    bottom: "30%",
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    fontSize: '14px',
                    color: '#000',
                    display: { sm: "none", md: "block" },
                }}
            >
                Scroll Down
            </Typography>


            <Typography
                className='hidden md:flex'
                variant='h5'
                sx={{
                    position: 'absolute',
                    // height: '1050px',
                    top: "-10%",
                    // left: 0,
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



