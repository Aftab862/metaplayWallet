import { Box, Button, Typography } from "@mui/material";
import React from "react";
import join0 from "../assets/join0.png";
import join1 from "../assets/join1.png";

export const FrameWrapper = () => {
    return (
        <Box
            sx={{
                px: 2,
                py: 6,
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            {/* Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 600,
                    mb: 6,
                    fontSize: { xs: '28px', md: '40px' },
                    lineHeight: { xs: '40px', md: '56px' },
                }}
            >
                Join the Digital Wallet Revolution Today
            </Typography>

            {/* Main 3 Section Layout */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 4,
                }}
            >
                {/* Left Section */}
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <Box
                        component="img"
                        src={join0}
                        alt="Left"
                        sx={{
                            width: { xs: '80%', md: '100%' },
                            maxWidth: '320px',
                            mx: 'auto',
                        }}
                    />
                </Box>

                {/* Center Section */}
                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: 'center', md: 'left' },
                        px: { xs: 2, md: 4 },
                    }}
                >
                    <Typography variant="body1" sx={{ color: 'gray', mb: 3 }}>
                        This is the center section content. You can place anything here like images, cards, or text. It's fully responsive and adapts beautifully on all devices.
                    </Typography>
                    <Button variant="contained" color="primary">
                        Get Started
                    </Button>
                </Box>

                {/* Right Section */}
                <Box sx={{ flex: 1, textAlign: 'center' }}>
                    <Box
                        component="img"
                        src={join1}
                        alt="Right"
                        sx={{
                            width: { xs: '80%', md: '100%' },
                            maxWidth: '320px',
                            mx: 'auto',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};


// <div className="absolute w-[1441px] h-[970px] top-[3256px] left-0 overflow-hidden">
//     <div className="relative w-[1808px] h-[1052px] top-[-301px] left-[-185px]">
//         <div className="absolute h-[1050px] top-0 left-0 [-webkit-text-stroke:1px_#000000] opacity-10 [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[700px] text-center tracking-[0] leading-[normal]">
//             Meta
//         </div>

//         <img
//             className="absolute w-[658px] h-[430px] top-[622px] left-[185px] object-cover"
//             alt="Rectangle"
//             src="https://c.animaapp.com/8dbKVwgr/img/rectangle-9998.svg"
//         />

//         <img
//             className="absolute w-60 h-[430px] top-[622px] left-[1385px] object-cover"
//             alt="Rectangle"
//             src="https://c.animaapp.com/8dbKVwgr/img/rectangle-9999.svg"
//         />



//         <div className="flex flex-col w-[360px] items-start gap-14 absolute top-[677px] left-[925px]">
//             <p className="relative self-stretch mt-[-1.00px] font-medium text-2xl leading-8 [font-family:'Poppins',Helvetica] text-black tracking-[0]">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry.
//                 <br />
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry.
//             </p>

//             <div className="relative w-40 h-12 bg-[#203b81] rounded-lg">
//                 <div className="absolute h-[18px] top-3.5 left-[34px] [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[18px] whitespace-nowrap">
//                     Get Started
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>