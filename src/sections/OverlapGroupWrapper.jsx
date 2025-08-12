import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import groupMobile from "../assets/groupMobile.png";
import Security from "../assets/home/Security.png";
import Community from "../assets/home/Community.png"
import Safety from "../assets/home/Safety.png"
import Chain from "../assets/home/Chain.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export const OverlapGroupWrapper = () => {
  const items = [
    {
      title: "Security",
      description: (
        <>
          Lorem Ipsum is simply dummy text <br />
          Lorem Ipsum is simply dummy text{" "}
        </>
      ),
      image: Security,
    },
    {
      title: "Safety",
      description: (
        <>
          Lorem Ipsum is simply dummy text <br />
          Lorem Ipsum is simply dummy text{" "}
        </>
      ),
      image: Safety,
    },
    {
      title: "Community",
      description: (
        <>
          Lorem Ipsum is simply dummy text <br />
          Lorem Ipsum is simply dummy text{" "}
        </>
      ),
      image: Community,
    },

    {
      title: "Multi Chain",
      description: (
        <>
          Lorem Ipsum is simply dummy text <br />
          Lorem Ipsum is simply dummy text{" "}
        </>
      ),
      image: Chain,
    },
  ];

  return (
    <Box className="w-full flex justify-center px-4 py-10">
      <Box className="flex flex-col bg-[#cedeff] w-full max-w-7xl rounded-2xl shadow-[0px_4px_184px_#a9abb533] p-6 md:p-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Box className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Left Text */}
            <Stack spacing={3} className="flex-1  md:text-left p-10">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "32px", md: "48px", lg: "64px" },
                  lineHeight: { xs: "40px", md: "56px", lg: "72px" },
                }}
              >
                Why Choose
                <br />
                Metaplay Wallet?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  lineHeight: "40px",
                  maxWidth: "600px",
                  margin: "0 auto",
                  color: "#000",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Typography>
            </Stack>

            {/* Right Image */}
            <Box
              component="img"
              src={groupMobile}
              loading="lazy"
              alt="Group Mobile"
              sx={{
                maxWidth: "100%",
                width: { xs: "250px", md: "300px", lg: "450px" },
                objectFit: "contain",
              }}
            />
          </Box>
        </motion.div>

        {/* Cards Section */}
        <Grid container mt={6} spacing={1} justifyContent="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
              >
                <Box
                  sx={{
                    padding: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <Box
                    component="img"
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: "contain",
                      marginBottom: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: "24px" }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
