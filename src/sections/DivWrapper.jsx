
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import groupMobile from "../assets/crop.png";
import appStore from '../assets/appstore.svg';
import playStore from '../assets/playstore.svg';

export const DivWrapper = () => {


    return (
        <Box className="w-full flex justify-center px-4 py-10">
            <Box className="flex flex-col bg-[#577DF4] w-full max-w-7xl rounded-2xl shadow-[0px_4px_184px_#a9abb533] ">
                {/* Header Section */}
                <Box className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    {/* Left Text */}
                    <Stack spacing={3} className="flex-1 text-center md:text-left px-4 py-8 md:p-16">

                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: { xs: "16px", md: "24px" },
                                lineHeight: "32px",
                                maxWidth: "400px",
                                margin: "0 auto",
                                color: "#fff",
                            }}
                        >
                            Want your fast, easy, & secure? industry.
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                color: "white",
                                fontSize: { xs: "32px", md: "48px", lg: "54px" },
                                lineHeight: { xs: "40px", md: "56px", lg: "62px" },
                            }}
                        >

                            Download the
                            <br />
                            Metaplay Wallet
                            <br />
                            App today!
                        </Typography>
                        <Stack
                            sx={{
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: { xs: "center", md: "center" },
                                justifyContent: { xs: "center", md: "flex-start" },
                                gap: "20px"
                            }}
                        // spacing={2}
                        >

                            <Box component="img" src={playStore} alt="Play Store" sx={{ width: '174px' }} />
                            <Box component="img" src={appStore} alt="App Store" sx={{ width: '174px' }} />
                        </Stack>

                    </Stack>

                    {/* Right Image */}
                    <Box className="flex-1">
                        <Box

                            component="img"
                            src={groupMobile}
                            alt="Group Mobile"
                            sx={{
                                maxWidth: "100%",
                                width: { xs: "250px", md: "300px", lg: "450px" },
                                objectFit: "contain",
                                marginTop: { sm: 0, md: "80px" }
                            }}
                        />
                    </Box>
                </Box>


            </Box>

        </Box>
    );
};
