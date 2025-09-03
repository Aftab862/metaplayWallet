import { Autocomplete, Avatar, Box, Button, Input, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { Download } from "lucide-react";
import FAQSection from './Faq';
import cryptoImages from "../assets/crypto.png"
import Calculator from '../components/Caculator';
import GenericButton from '../components/GenericButton';
import { useNavigate } from 'react-router-dom';
import Staking from '../assets/staking.png'


const Stacking = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Box className="w-full flex flex-col items-center justify-center p-3 ">
                <Box sx={{
                    // background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64734820868138%,#f1f3f7)"
                }}

                    className="flex flex-col w-full max-w-7xl rounded-3xl
                    p-3 md:p-3 relative  bg-opacity-30 backdrop-blur-xl "
                // shadow-[0px_4px_184px_#a9abb522]
                >
                    <Box className="flex flex-col md:flex-row items-center gap-12 px-2 md:px-5">
                        <Stack className='p-2 md:p-16 break-words text-start'>
                            <Typography
                                variant="h2"
                                className="  text-[#171717] text-start"
                                sx={{
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
                                    fontWeight: 300,
                                    fontSize: { xs: "16px", md: "18px", lg: "20px" },
                                    lineHeight: { xs: "36px", md: "54px", lg: "36px" },
                                    mb: 3,
                                }}
                            >
                                By staking your crypto, you’re not just growing your portfolio, but also helping secure blockchain networks for everyone.
                            </Typography>
                            <GenericButton
                                title="Download"
                                PY={1.5}
                                PX={3}
                                iconType="download"
                                className="w-[50%] md:w-[35%]"
                                btnHandler={() => navigate("/download")}
                            />


                        </Stack>
                        <Box
                            component="img"
                            className='hidden md:flex'
                            src={Staking}
                            alt="Download Devices"
                            sx={{
                                maxWidth: "100%",
                                width: { xs: "240px", md: "300px", lg: "550px" },

                            }}
                        />
                    </Box>
                </Box>




                <Box
                    component="img"
                    src={cryptoImages}
                    // width={1300}
                    className='my-2 md:my-10'

                />

                <Calculator />


                <FAQSection />

            </Box>

        </div >
    )
}

export default Stacking
