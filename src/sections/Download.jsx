import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import {
    Globe,
    Chrome,
    Compass,
    Flame,
    Shield,
    Rocket,
} from "lucide-react";

const browsers = [
    { name: "Chrome", icon: "https://framerusercontent.com/images/Pf1EZTXzWCe0w0tmswGkGtoSw.svg" },
    { name: "Edge", icon: "https://framerusercontent.com/images/x91ziV5jYh8ZIVnHY57NdsZFfs.svg" },
    { name: "Safari", icon: "https://framerusercontent.com/images/RJPRLFUXOhdkiGk6IRZ2QUCN4.svg" },
    { name: "Brave", icon: "https://framerusercontent.com/images/OuvIXHo4EADe0rsFyUhyDPCwo.svg" },
    { name: "Firefox", icon: "https://framerusercontent.com/images/9Zo7RiErLwZv8ZsQr64bM8cK8s.svg" },
    { name: "Arc", icon: "https://framerusercontent.com/images/nFhDQ3PlcARouqwLahKLRoWY.svg" },
];

const Download = () => {
    return (

        <Box className="w-full flex justify-center px-4 py-20 ">
            <Box boxShadow={3} className="flex flex-col w-full max-w-7xl rounded-3xl shadow-[0px_4px_184px_#a9abb522] p-8 md:p-16 relative bg-[#7369ff] bg-opacity-30 backdrop-blur-xl">
                {/* Top Title */}
                <Typography
                    variant="h2"
                    className="text-center font-bold text-white"
                    sx={{
                        fontFamily: "SF Pro Rounded, -apple-system, BlinkMacSystemFont, sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: "28px", md: "44px", lg: "56px" },
                        lineHeight: { xs: "36px", md: "54px", lg: "66px" },
                        mb: 8,
                    }}
                >
                    Choose Your Browser
                </Typography>

                {/* Content Section */}
                <Box className="flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
                        {browsers.map((browser) => (
                            <div
                                key={browser.name}
                                className="p-6 rounded-2xl bg-white bg-opacity-60 shadow-lg backdrop-blur-md flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
                            >
                                <img src={browser.icon} alt="" />
                                <h3 className="mt-4 font-semibold text-gray-800">{browser.name}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Right Side Image */}
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
    );
};

export default Download;
