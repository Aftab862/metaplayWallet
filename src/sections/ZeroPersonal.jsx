import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import ImageZero from '../assets/home/zero.png'
import ImageCommunity from '../assets/home/Community.png'
import ImageUserFriendly from '../assets/home/UserFriendly.png'

import GenericButton from "../components/GenericButton";


const ZeroPersonal = () => {
  return (
    <Box
      className="w-full flex items-center justify-center px-5 py-4 md:py-16"


    >

      <Box
        // className="flex flex-col justify-center w-full max-w-8xl rounded-3xl items-center"
        className="flex flex-col w-full max-w-7xl rounded-3xl shadow-[0px_4px_184px_#a9abb522] p-6 sm:p-10 md:p-16 px-6 sm:px-10 md:px-28  relative bg-opacity-30 backdrop-blur-xl"

        sx={{
          background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.6%,#f1f3f7)",

          // py: { xs: 4, md: 6 },
          // px: { xs: 2, md: 6 },
        }}
      >
        {/* Main Title */}
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 2 }}
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
          }}
        >
          We secure your wallet, but don't control or have access to your private
          keys or secret phrase – only you do.
        </Typography>

        {/* Top Section */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 6 }}        >
          <CardContent>
            <Box

              container
              spacing={3}
              display="flex"
              alignItems="flex-start"
              justifyContent="space-between"
              p={3}
            >
              {/* Text Left */}
              <Box p={5}
                sx={{ width: { sm: "50%", md: "60%" } }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  True ownership of your crypto assets
                </Typography>
                <Typography sx={{ mb: 2, color: "#444" }}>
                  We secure your wallet, but don’t control or have access to your
                  private keys or secret phrase – only you do.
                </Typography>


                <GenericButton
                  title="Get Started"
                  PX={3}
                  PY={1}
                  btnHandler={() => { }}

                />


              </Box>

              {/* Image Right */}
              <Box p={5}

                sx={{ display: "flex", justifyContent: "center", textAlign: "center", width: { sm: "50%", md: "40%" } }}


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

        {/* Bottom Features */}
        <Grid
          container
          spacing={3}

          sx={{
            width: "100%",
            maxWidth: "1200px", // keeps layout from shrinking
            margin: "0 auto",   // centers content
          }}
        >
          {/* Feature 1 */}

          <Grid item size={{ xs: 12, sm: 6, md: 4 }} >
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
                User friendly
              </Typography>
              <Box
                component="img"
                src={ImageUserFriendly}

                alt="No Tracking"
                sx={{ width: 150, my: 2 }}
              />
              <Typography fontSize="0.9rem" color="text.secondary">
                Use our Encrypted Cloud Backup for increased wallet security.
              </Typography>
            </Card>
          </Grid>


          <Grid item size={{ xs: 12, sm: 6, md: 4 }} >
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
                Zero personal tracking
              </Typography>
              <Box
                component="img"
                src={ImageZero}
                alt="No Tracking"
                sx={{ width: 150, my: 2 }}
              />
              <Typography fontSize="0.9rem" color="text.secondary">
                We don’t track any personal information, including your IP address or balances.
              </Typography>
            </Card>
          </Grid>


          <Grid item size={{ xs: 12, sm: 6, md: 4 }} >
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
                Community
              </Typography>
              <Box
                component="img"
                src={ImageCommunity}

                alt="No Tracking"
                sx={{ width: 150, my: 2 }}
              />
              <Typography fontSize="0.9rem" color="text.secondary">
                Stay safe with alerts for risky address and dApp connections.
              </Typography>
            </Card>
          </Grid>

        </Grid>


      </Box>
    </Box>
  );
};

export default ZeroPersonal;
