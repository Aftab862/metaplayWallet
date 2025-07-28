import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import join0 from "../assets/join0.png";
import join1 from "../assets/join1.png";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const FrameWrapper = () => {
    return (
        <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            sx={{
                px: 2,
                py: 6,
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                textAlign: "center",
            }}
        >
            {/* Heading */}
            <motion.div variants={fadeInUp}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        mb: 6,
                        fontSize: { xs: "28px", md: "40px" },
                        lineHeight: { xs: "40px", md: "56px" },
                    }}
                >
                    Join the Digital Wallet Revolution Today
                </Typography>
            </motion.div>

            {/* Flex Container */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 4,
                }}
            >
                {/* Left Image */}
                <motion.div variants={fadeInUp} style={{ flex: 1 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Box
                            component="img"
                            src={join0}
                            alt="Left"
                            sx={{
                                width: { xs: "80%", md: "100%" },
                                maxWidth: "320px",
                                mx: "auto",
                            }}
                        />
                    </Box>
                </motion.div>

                {/* Center Content */}
                <motion.div variants={fadeInUp} style={{ flex: 1 }}>
                    <Box
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                            px: { xs: 2, md: 4 },
                        }}
                    >
                        <Typography variant="body1" sx={{ color: "gray", mb: 3 }}>
                            This is the center section content. You can place anything here
                            like images, cards, or text. It's fully responsive and adapts
                            beautifully on all devices.
                        </Typography>
                        <Button variant="contained" color="primary">
                            Get Started
                        </Button>
                    </Box>
                </motion.div>

                {/* Right Image */}
                <motion.div variants={fadeInUp} style={{ flex: 1 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Box
                            component="img"
                            src={join1}
                            alt="Right"
                            sx={{
                                width: { xs: "80%", md: "100%" },
                                maxWidth: "320px",
                                mx: "auto",
                            }}
                        />
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};
