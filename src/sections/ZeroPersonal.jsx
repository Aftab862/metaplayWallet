import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import ImageZero from "../assets/home/zero.png";
import ImageCommunity from "../assets/home/Community.png";
import ImageUserFriendly from "../assets/home/UserFriendly.png";
import GenericButton from "../components/GenericButton";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ZeroPersonal = () => {
  return (
    <Box className="w-full flex items-center justify-center px-5 py-4 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      // style={{ width: "100%" }}
      >
        <Box
          className="flex flex-col w-full max-w-7xl rounded-3xl shadow-[0px_4px_184px_#a9abb522] p-6 sm:p-10 md:p-16 px-6 sm:px-10 md:px-28 relative bg-opacity-30 backdrop-blur-xl"
          sx={{
            background: { sm: "transparent", md: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.6%,#f1f3f7)" },
          }}
        >
          {/* Main Title */}
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
              lineHeight: 1.2,
            }}
          >
            Zero personal tracking
          </Typography>
          <Typography
            align="center"
            sx={{
              mx: "auto",
              mb: 5,
              fontSize: { xs: "0.9rem", md: "1.2rem" },
              color: "#333",
              maxWidth: "700px",
            }}
          >
            We secure your wallet, but don't control or have access to your
            private keys or secret phrase – only you do.
          </Typography>

          {/* Top Section */}
          <motion.div variants={fadeInUp}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 6 }}>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  alignItems="center"
                  justifyContent="space-between"
                  p={3}
                  gap={3}
                >
                  {/* Text Left */}
                  <Box
                    p={3}
                    sx={{
                      width: { xs: "100%", sm: "50%", md: "60%" },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ fontSize: { xs: "1.2rem", md: "1.75rem" } }}
                    >
                      True ownership of your crypto assets
                    </Typography>
                    <Typography sx={{ mb: 2, color: "#444" }}>
                      We secure your wallet, but don’t control or have access
                      to your private keys or secret phrase – only you do.
                    </Typography>

                    <GenericButton
                      title="Get Started"
                      PX={3}
                      PY={1}
                      btnHandler={() => { }}
                    />
                  </Box>

                  {/* Image Right */}
                  <Box
                    p={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: { xs: "100%", sm: "50%", md: "40%" },
                    }}
                  >
                    <Box
                      component="img"
                      src="https://trustwallet.com/_next/static/media/raw.0acff7b3.svg"
                      alt="Crypto Security"
                      sx={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: 250,
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom Features */}
          <Grid
            container
            spacing={3}
            sx={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: "User friendly",
                img: ImageUserFriendly,
                text: "Use our Encrypted Cloud Backup for increased wallet security.",
              },
              {
                title: "Zero personal tracking",
                img: ImageZero,
                text: "We don’t track personal data, including your IP or balances.",
              },
              {
                title: "Community",
                img: ImageCommunity,
                text: "Stay safe with alerts for risky address and dApp connections.",
              },
            ].map((feature, index) => (
              <Grid item key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  variants={fadeInUp}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      p: 5,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Box
                      component="img"
                      src={feature.img}
                      alt={feature.title}
                      sx={{ width: 150, my: 2 }}
                    />
                    <Typography fontSize="0.9rem" color="text.secondary">
                      {feature.text}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ZeroPersonal;
