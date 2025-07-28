import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import groupMobile from "../assets/crop.png";
import appStore from "../assets/appstore.svg";
import playStore from "../assets/playstore.svg";

// Animation Variants
const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
        },
    },
};

const buttonVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4 + i * 0.2,
        },
    }),
};

export const DivWrapper = () => {
    return (
        <Box className="w-full flex justify-center px-4 py-10">
            <motion.div
                className="flex flex-col bg-[#577DF4] w-full max-w-7xl rounded-2xl shadow-[0px_4px_184px_#a9abb533]"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <Box className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <Stack
                        spacing={3}
                        className="flex-1 text-center md:text-left px-4 py-8 md:p-16"
                        component={motion.div}
                        variants={fadeUpVariant}
                    >
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
                                alignItems: "center",
                                justifyContent: { xs: "center", md: "flex-start" },
                                gap: "20px",
                            }}
                        >
                            {[playStore, appStore].map((store, i) => (
                                <motion.img
                                    key={i}
                                    src={store}
                                    alt={`store-${i}`}
                                    width={174}
                                    custom={i}
                                    variants={buttonVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                />
                            ))}
                        </Stack>
                    </Stack>

                    <Box className="flex-1 flex justify-center items-center">
                        <motion.img
                            src={groupMobile}
                            alt="Group Mobile"
                            variants={imageVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            style={{
                                maxWidth: "100%",
                                width: "100%",
                                maxHeight: "500px",
                                objectFit: "contain",
                                marginTop: "40px",
                            }}
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    );
};
