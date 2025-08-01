import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const browsers = [
    { name: "Chrome", icon: "https://framerusercontent.com/images/Pf1EZTXzWCe0w0tmswGkGtoSw.svg" },
    { name: "Edge", icon: "https://framerusercontent.com/images/x91ziV5jYh8ZIVnHY57NdsZFfs.svg" },
    { name: "Safari", icon: "https://framerusercontent.com/images/RJPRLFUXOhdkiGk6IRZ2QUCN4.svg" },
    { name: "Brave", icon: "https://framerusercontent.com/images/OuvIXHo4EADe0rsFyUhyDPCwo.svg" },
    { name: "Firefox", icon: "https://framerusercontent.com/images/9Zo7RiErLwZv8ZsQr64bM8cK8s.svg" },
    { name: "Arc", icon: "https://framerusercontent.com/images/nFhDQ3PlcARouqwLahKLRoWY.svg" },
];


const WebDownload = () => {
    return (
        <div>
            <Box className="w-full flex items-center justify-center px-4 py-4 md:py-16">
                <Box
                    sx={{
                        background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64734820868138%,#f1f3f7)"
                    }}
                    className="flex flex-col w-full max-w-7xl rounded-3xl shadow-[0px_4px_184px_#a9abb522] p-8 md:p-16 relative bg-opacity-30 backdrop-blur-xl">
                    <Box className="flex flex-col md:flex-row items-center gap-12">

                        <Stack className='flex-1'>
                            <Typography
                                variant="h2"
                                className="text-center font-bold text-[#171717]"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "28px", md: "44px", lg: "56px" },
                                    lineHeight: { xs: "36px", md: "54px", lg: "66px" },
                                    mb: 8,
                                }}
                            >
                                Download for
                                <br />
                                Desktop
                            </Typography>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
                                {browsers.map((browser) => (
                                    <div
                                        key={browser.name}
                                        className="p-6 rounded-2xl bg-white bg-opacity-60 shadow-lg backdrop-blur-md flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
                                    >
                                        <img src={browser.icon} alt=""
                                            className="w-[50px] md:w-[70px]  h-[50px] md:h-[70px]"
                                        />
                                        <h3 className="mt-4 font-semibold text-gray-800">{browser.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </Stack>

                        <Box
                            component="img"
                            src="https://framerusercontent.com/images/VMlyJdWdfaRDDAbGARnULWDMEVc.png?scale-down-to=1024"
                            alt="Download Devices"
                            sx={{
                                maxWidth: "100%",
                                width: { xs: "240px", md: "300px", lg: "400px" },
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default WebDownload
