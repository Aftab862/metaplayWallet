import { Autocomplete, Avatar, Box, Button, Input, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Download } from "lucide-react";
import FAQSection from './Faq';
import cryptoImages from "../assets/crypto.png"
import metaPlay from "../assets/MetaplayWallet.svg"
import vrcn from "../assets/vrcn.png"



const coinOptions = [
    {
        id: 1,
        label: 'VRCN',
        icon: vrcn,
        percentage: 0,
    },
    {
        id: 2,
        label: 'MetaPlay',
        icon: metaPlay,
        percentage: 3,
    },
];

const Stacking = () => {
    const [value, setValue] = React.useState(coinOptions[0]);
    return (
        <div>
            <Box className="w-full flex flex-col items-center justify-center p-3 ">
                <Box sx={{
                    // background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64734820868138%,#f1f3f7)"
                }}
                    mb={10}
                    className="flex flex-col w-full max-w-7xl rounded-3xl
                    p-3 md:p-3 relative  bg-opacity-30 backdrop-blur-xl "
                // shadow-[0px_4px_184px_#a9abb522]
                >
                    <Box className="flex flex-col-reverse md:flex-row items-center gap-12 px-5">
                        <Stack className='p-16 break-words text-start'>
                            <Typography
                                variant="h2"
                                className="  text-[#171717] text-start"
                                sx={{
                                    fontFamily: "SF Pro Rounded, -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontWeight: 700,
                                    fontSize: { xs: "28px", md: "44px", lg: "56px" },
                                    lineHeight: { xs: "36px", md: "44px", lg: "56px" },
                                    mb: 3,
                                }}
                            >
                                Stake your crypto
                                <br />
                                & earn rewards in
                                <br />
                                just a few steps
                            </Typography>
                            <Typography
                                variant="h2"
                                className="text-start  text-[#171717] "
                                sx={{
                                    fontFamily: "SF Pro Rounded, -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontWeight: 300,
                                    fontSize: { xs: "16px", md: "18px", lg: "20px" },
                                    lineHeight: { xs: "36px", md: "54px", lg: "36px" },
                                    mb: 3,
                                }}
                            >
                                By staking your crypto, you’re not just growing your portfolio, but also helping secure blockchain networks for everyone.
                            </Typography>
                            <Button
                                variant="contained"
                                className="w-[35%]"
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "30px",
                                    px: 3,
                                    py: 1.5,
                                    backgroundColor: "#1976d2",
                                    color: "#fff",
                                    textTransform: "none",
                                    fontSize: "18px",
                                    zIndex: 1,

                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: "-75%",
                                        width: "50%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)",
                                        transform: "skewX(-20deg)",
                                        zIndex: 2,
                                        animation: "shine 2s ease-in-out infinite",
                                    },

                                    "@keyframes shine": {
                                        "0%": { left: "-75%" },
                                        "100%": { left: "125%" },
                                    },

                                    "&:hover": {
                                        backgroundColor: "#1565c0",
                                    },
                                }}
                            >
                                <Box className="flex justify-center items-center gap-2">
                                    <Download size={20} />
                                    <span>Download</span>
                                </Box>
                            </Button>


                        </Stack>
                        <Box
                            component="img"
                            src='https://framerusercontent.com/images/WB7cWZkCOhrZwymgwc1ZSbxVHw.png'
                            // src="https://framerusercontent.com/images/ojR9drUQuF1ZfjCgBAEzJnQE.png?scale-down-to=1024"
                            alt="Download Devices"
                            sx={{
                                maxWidth: "100%",
                                width: { xs: "240px", md: "300px", lg: "550px" },
                                // objectFit: "contain",
                            }}
                        />
                    </Box>
                </Box>


                <Box sx={{
                    background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64734820868138%,#f1f3f7)"
                }}
                    mb={10}
                    className="flex flex-col w-full max-w-7xl rounded-3xl
                    p-3 md:p-3 relative  bg-opacity-30 backdrop-blur-xl "
                // shadow-[0px_4px_184px_#a9abb522]
                >
                    <Box className="p-10 flex flex-col justify-center items-center">
                        <Typography
                            textAlign="center" variant='h5' mb={2}>
                            Earning Estimator
                        </Typography>
                        <Typography textAlign="center" variant='body1' mb={2}>
                            Potential earnings from current APR*s
                        </Typography>
                        <Autocomplete
                            disablePortal
                            className='relative mb-5 bg-white rounded w-90'
                            value={value}
                            freeSolo
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            options={coinOptions}
                            getOptionLabel={(option) => option.label}

                            renderInput={(params) => (
                                <TextField {...params} label="" variant="outlined" />
                            )}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    {...props}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        // justifyContent: 'space-between',
                                        px: 2,
                                        py: 1,
                                        borderBottom: '1px solid #f0f0f0',
                                        transition: 'all 0.2s ease-in-out',
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                        },
                                    }}
                                >
                                    {/* Left Side: Icon + Label */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Avatar
                                            src={option.icon}
                                            alt={option.label}
                                            sx={{ width: 28, height: 28 }}
                                        />
                                        <Typography fontWeight={500} fontSize={14}>
                                            {option.label}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}

                            isOptionEqualToValue={(option, value) => option.label === value.label}
                            renderTags={() => null}
                            renderValue={(option) => (
                                <Box sx={{ position: "reltive", display: 'flex', alignItems: 'center', gap: 1, justifyContent: "space-between" }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: "space-between", }}>
                                        <Avatar src={option?.icon} alt={option?.label} sx={{ width: 35, height: 35 }} />
                                        <Typography variant="body1">{option?.label}</Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        position="absolute"
                                        right={35}
                                        color='primary'
                                    >
                                        {option?.percentage}%
                                    </Typography>
                                </Box>
                            )}
                        />
                        <TextField

                            placeholder="Enter value"
                            variant="outlined"
                            className='w-90 bg-white  border-0  rounded'
                            type='number'
                            mb={2}

                        />







                        <Box className='flex justify-between mt-5  w-90'>
                            <Typography
                                variant='body1' mb={2}>
                                Daily Earnings
                            </Typography>
                            <Typography variant='body1' color='primary' mb={2}>
                                + 0.002617 AXL
                            </Typography>
                        </Box>
                        <Box className='flex justify-between   w-90'>
                            <Typography
                                variant='body1' mb={2}>
                                Monthly Earnings
                            </Typography>
                            <Typography variant='body1' color='primary' mb={2}>
                                + 0.002617 AXL
                            </Typography>
                        </Box>
                        <Box className='flex justify-between   w-90'>
                            <Typography
                                variant='body1' mb={2}>
                                Yearly Earnings
                            </Typography>
                            <Typography variant='body1' color='primary' mb={2}>
                                + 0.002617 AXL
                            </Typography>
                        </Box>

                        <Button
                            mt={4}
                            loading={false}
                            onClick={function () { }}
                            size="lg"
                            variant="solid"
                            sx={{
                                textTransform: "none",
                                background: "#1976d2",
                                color: "white",
                                padding: "10px 40px ",
                                borderRadius: "30px"

                            }}
                        >
                            Earn Now
                        </Button>










                    </Box>
                </Box>



                <Box
                    component="img"
                    src={cryptoImages}
                    width={1000}
                    className='mt-10'
                />

                <FAQSection />

            </Box>

        </div >
    )
}

export default Stacking
