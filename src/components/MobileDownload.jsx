import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import MobileImg from '../assets/MobileDownload.png'


const MobileDownload = ({ handleClick }) => {
    const mobile = [
        {
            name: "Android",
            icon: "https://framerusercontent.com/images/AA9C0on2lL61VGndTN3egni3YqY.svg",
        },
        {
            name: "iOS",
            icon: "https://framerusercontent.com/images/6guVArhs20n1oqrc2yN1Xlh8UA.svg",
        },
    ];

    return (
        <Box className="w-full flex items-center justify-center px-4 py-4 md:py-16">
            <Box
                sx={{
                    background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.6%,#f1f3f7)",
                }}
                className="flex flex-col w-full max-w-7xl rounded-3xl shadow-[0px_4px_184px_#a9abb522] p-6 sm:p-10 md:p-16 relative bg-opacity-30 backdrop-blur-xl"
            >
                <Box

                    className="flex flex-col-reverse md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <Stack className="flex-1 items-center">
                        <Typography
                            variant="h2"
                            className="text-center font-bold text-[#171717]"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "56px" },
                                lineHeight: { xs: "36px", sm: "46px", md: "54px", lg: "66px" },
                                mb: { xs: 4, md: 8 },
                            }}
                        >
                            Download for
                            <br />
                            Mobile
                        </Typography>

                        <Stack
                            direction={{ xs: "row", sm: "row" }}
                            spacing={3}
                            justifyContent="center"
                            alignItems="center"
                            flexWrap="wrap"
                            width="100%"
                        >
                            {mobile.map((browser) => (
                                <Box
                                    onClick={() => handleClick()}
                                    key={browser.name}
                                    className="px-8 py-6 rounded-3xl text-center bg-white bg-opacity-60 shadow-lg backdrop-blur-md flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
                                >
                                    <img src={browser.icon} alt={browser.name} className="w-[50px] md:w-[70px]  h-[50px] md:h-[70px]" />
                                    <h3 className="mt-4 font-semibold text-gray-800">{browser.name}</h3>
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                    <Box>
                        <Box
                            component="img"
                            src={MobileImg}
                            alt="Download Devices"
                            sx={{
                                maxWidth: "100%",
                                width: { xs: "220px", sm: "260px", md: "320px", lg: "400px" },
                                objectFit: "contain",
                            }}
                        />
                    </Box>

                    {/* Text + Buttons */}
                </Box>
            </Box>
        </Box>
    );
};

export default MobileDownload;
