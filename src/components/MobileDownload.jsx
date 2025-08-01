import React from 'react'
import { Box, Stack, Typography } from '@mui/material'



const MobileDownload = () => {

    const mobile = [
        { name: "Andriod", icon: "https://framerusercontent.com/images/AA9C0on2lL61VGndTN3egni3YqY.svg" },
        { name: "iOS", icon: "https://framerusercontent.com/images/6guVArhs20n1oqrc2yN1Xlh8UA.svg" },
    ];


    return (
        <div>
            <Box className="w-full flex items-center justify-center px-4 py-20 ">
                <Box sx={{
                    background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64734820868138%,#f1f3f7)"
                }} className="flex flex-col w-full max-w-7xl rounded-3xl shadow-[0px_4px_184px_#a9abb522] p-8 md:p-16 relative  bg-opacity-30 backdrop-blur-xl">
                    <Box className="flex flex-col-reverse md:flex-row items-center gap-12">

                        <Box>

                            <Box
                                component="img"
                                src="https://framerusercontent.com/images/ojR9drUQuF1ZfjCgBAEzJnQE.png?scale-down-to=1024"
                                alt="Download Devices"
                                sx={{
                                    maxWidth: "100%",
                                    width: { xs: "240px", md: "300px", lg: "400px" },
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
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
                                Mobile
                            </Typography>
                            <div className="flex justify-center items-center  gap-6 flex-1">
                                {mobile.map((browser) => (
                                    <div
                                        key={browser.name}
                                        className="px-10 py-6 rounded-4xl text-center bg-white bg-opacity-60 shadow-lg backdrop-blur-md flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
                                    >
                                        <img src={browser.icon} alt="" className='w-[80px] h-[80px]' />
                                        <h3 className="mt-4 font-semibold text-gray-800">{browser.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </Stack>
                    </Box>
                </Box>
            </Box>

        </div>
    )
}

export default MobileDownload
