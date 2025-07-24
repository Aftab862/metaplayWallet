// import React from 'react'
// import subtract from '../assets/subtract.svg';
// import subtract1 from '../assets/subtract-1.png';
// import mobile1 from '../assets/7@2x.png';
// import mobile2 from '../assets/15-plus-5.png';
// import mobileFrame from '../assets/mobileframe.png';
// import wallet from '../assets/wallet.png';
// import appStore from '../assets/appstore.svg';
// import playStore from '../assets/playstore.svg';



// const Hero = () => {
//     return (
//         <div className=" w-full    overflow-hidden">
//             <div className="relative w-full max-w-screen-xl mx-auto h-full top-[-254px] left-[-237px]">
//                 <div className="absolute h-[1050px] top-0 left-0 [-webkit-text-stroke:1px_#000000] opacity-10 [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[700px] text-center tracking-[0] leading-[normal]">
//                     meta
//                 </div>


//                 <img
//                     className="absolute w-[660px] h-[727px] top-[440px] left-[878px]"
//                     alt="Subtract"
//                     src={subtract}
//                 />

//                 <img
//                     className="absolute w-[300px] h-[199px] top-[918px] left-[378px] object-cover"
//                     alt="Subtract"
//                     src={subtract1}
//                 />

//                 <img
//                     className="absolute w-[197px] h-[216px] top-[908px] left-[385px] object-cover"
//                     alt="Element"
//                     src={mobile1}
//                 />

//                 <div className="absolute w-[355px] h-[698px] top-[539px] left-[810px]">
//                     <div className="relative h-[698px]">
//                         {/* <ElementPlus className="!h-[654px] !rounded-[32px] !absolute bg-[url(https://c.animaapp.com/8dbKVwgr/img/15-plus-5.png)] !left-[27px] !w-[302px] !top-[22px]" /> */}
//                         <img src={mobile2} alt=""
//                             className="!left-[27px] !w-[302px] !top-[22px] !h-[654px] !rounded-[32px] !absolute"
//                         />
//                         <img
//                             className="absolute w-[355px] h-[698px] top-0 left-0 object-cover"
//                             alt="Iphone plus green"
//                             src={mobileFrame}
//                         />
//                     </div>
//                 </div>

//                 <div className="absolute top-[445px] left-[386px] [font-family:'Poppins',Helvetica] font-medium text-black text-[84px] tracking-[-7.00px] leading-[96px]">
//                     Meta
//                     <br />
//                     Play Wallet
//                 </div>

//                 <div className="absolute top-[751px] left-[1178px] [font-family:'Poppins',Helvetica] font-medium text-black text-[40px] tracking-[-2.00px] leading-[48px]">
//                     Mobile
//                     <br />
//                     Application
//                 </div>

//                 <div className="absolute top-[679px] left-[378px] [font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[-1.00px] leading-[normal]">
//                     Fast  Easy  Secure
//                 </div>

//                 <div className="inline-flex cursor-pointer flex-col items-start justify-center gap-4 absolute top-[982px] left-[1478px]">
//                     <div className="relative w-[81px] h-6 ml-[-28.50px] mr-[-28.50px] rotate-[-90.00deg] [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
//                         Scroll Down
//                     </div>

//                     {/* <Property1LightOutlineProperty2ArrowDown className="!relative !w-6 !h-6" /> */}
//                 </div>

//                 <div className="inline-flex flex-col h-[110px] items-start justify-center gap-4 absolute top-[925px] left-[611px] rotate-[90.00deg]">
//                     {/* <GeneralLight1 className="!relative !w-6 !h-6 !rotate-[-90.00deg]" /> */}
//                     <div className="relative flex-1 w-[70px] ml-[-23.00px] mr-[-23.00px] rotate-[-90.00deg] [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
//                         See Video
//                     </div>
//                 </div>

//                 <div className="absolute top-[903px] left-[1178px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
//                     Download App
//                 </div>

//                 <img
//                     className="absolute w-[133px] h-14 top-[471px] left-[596px]"
//                     alt="Group"
//                     src={wallet}
//                 />

//                 <img
//                     className="h-[51px] top-[1002px] absolute w-[154px] left-[1178px]"
//                     alt="Googleplay appstore"
//                     src={appStore}
//                 />

//                 <img
//                     className="h-[50px] top-[942px] absolute w-[154px] left-[1178px]"
//                     alt="Googleplay appstore"
//                     src={playStore}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Hero;


// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import subtract from '../assets/subtract.svg';
// import subtract1 from '../assets/subtract-1.png';
// import mobile1 from '../assets/7@2x.png';
// import mobile2 from '../assets/15-plus-5.png';
// import mobileFrame from '../assets/mobileframe.png';
// import wallet from '../assets/wallet.png';
// import appStore from '../assets/appstore.svg';
// import playStore from '../assets/playstore.svg';

// const Hero = () => {
//     return (
//         <Box sx={{ position: 'absolute', width: '100%', overflow: 'hidden' }}>
//             <Box
//                 sx={{
//                     position: 'relative',
//                     width: '100%',
//                     maxWidth: '1912px',
//                     height: '1237px',
//                     top: '-254px',
//                     left: '-237px',
//                     mx: 'auto',
//                 }}
//             >
//                 <Typography
//                     sx={{
//                         position: 'absolute',
//                         height: '1050px',
//                         top: 0,
//                         left: 0,
//                         WebkitTextStroke: '1px #000000',
//                         opacity: 0.1,
//                         fontFamily: 'Poppins, Helvetica',
//                         fontWeight: 600,
//                         color: 'transparent',
//                         fontSize: '700px',
//                         textAlign: 'center',
//                         lineHeight: 'normal',
//                     }}
//                 >
//                     meta
//                 </Typography>

//                 <Box
//                     component="img"
//                     src={subtract}
//                     alt="Subtract"
//                     sx={{ position: 'absolute', width: '660px', height: '727px', top: '440px', left: '878px' }}
//                 />

//                 <Box
//                     component="img"
//                     src={subtract1}
//                     alt="Subtract1"
//                     sx={{ position: 'absolute', width: '300px', height: '199px', top: '918px', left: '378px', objectFit: 'cover' }}
//                 />

//                 <Box
//                     component="img"
//                     src={mobile1}
//                     alt="Mobile1"
//                     sx={{ position: 'absolute', width: '197px', height: '216px', top: '908px', left: '385px', objectFit: 'cover' }}
//                 />

//                 <Box sx={{ position: 'absolute', width: '355px', height: '698px', top: '539px', left: '810px' }}>
//                     <Box sx={{ position: 'relative', height: '698px' }}>
//                         <Box
//                             component="img"
//                             src={mobile2}
//                             alt=""
//                             sx={{
//                                 position: 'absolute',
//                                 width: '302px',
//                                 height: '654px',
//                                 top: '22px',
//                                 left: '27px',
//                                 borderRadius: '32px',
//                             }}
//                         />
//                         <Box
//                             component="img"
//                             src={mobileFrame}
//                             alt="Iphone plus green"
//                             sx={{ position: 'absolute', width: '355px', height: '698px', top: 0, left: 0, objectFit: 'cover' }}
//                         />
//                     </Box>
//                 </Box>

//                 <Typography
//                     sx={{
//                         position: 'absolute',
//                         top: '445px',
//                         left: '386px',
//                         fontFamily: 'Poppins, Helvetica',
//                         fontWeight: 500,
//                         fontSize: '84px',
//                         letterSpacing: '-7px',
//                         lineHeight: '96px',
//                         color: 'black',
//                     }}
//                 >
//                     Meta<br />Play Wallet
//                 </Typography>

//                 <Typography
//                     sx={{
//                         position: 'absolute',
//                         top: '751px',
//                         left: '1178px',
//                         fontFamily: 'Poppins, Helvetica',
//                         fontWeight: 500,
//                         fontSize: '40px',
//                         letterSpacing: '-2px',
//                         lineHeight: '48px',
//                         color: 'black',
//                     }}
//                 >
//                     Mobile<br />Application
//                 </Typography>

//                 <Typography
//                     sx={{
//                         position: 'absolute',
//                         top: '679px',
//                         left: '378px',
//                         fontFamily: 'Poppins, Helvetica',
//                         fontWeight: 400,
//                         fontSize: '24px',
//                         letterSpacing: '-1px',
//                         color: 'black',
//                     }}
//                 >
//                     Fast Easy Secure
//                 </Typography>

//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: '982px',
//                         left: '1478px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'flex-start',
//                         justifyContent: 'center',
//                         gap: '16px',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     <Typography
//                         sx={{
//                             width: '81px',
//                             height: '24px',
//                             transform: 'rotate(-90deg)',
//                             fontFamily: 'Poppins, Helvetica',
//                             fontWeight: 400,
//                             fontSize: '14px',
//                             color: 'black',
//                         }}
//                     >
//                         Scroll Down
//                     </Typography>
//                 </Box>

//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: '925px',
//                         left: '611px',
//                         height: '110px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         gap: '16px',
//                         transform: 'rotate(90deg)',
//                     }}
//                 >
//                     <Typography
//                         sx={{
//                             width: '70px',
//                             transform: 'rotate(-90deg)',
//                             fontFamily: 'Poppins, Helvetica',
//                             fontWeight: 400,
//                             fontSize: '14px',
//                             color: 'black',
//                         }}
//                     >
//                         See Video
//                     </Typography>
//                 </Box>

//                 <Typography
//                     sx={{
//                         position: 'absolute',
//                         top: '903px',
//                         left: '1178px',
//                         fontFamily: 'Poppins, Helvetica',
//                         fontWeight: 400,
//                         fontSize: '16px',
//                         color: 'black',
//                     }}
//                 >
//                     Download App
//                 </Typography>

//                 <Box
//                     component="img"
//                     src={wallet}
//                     alt="Wallet"
//                     sx={{ position: 'absolute', width: '133px', height: '56px', top: '471px', left: '596px' }}
//                 />

//                 <Box
//                     component="img"
//                     src={appStore}
//                     alt="App Store"
//                     sx={{ position: 'absolute', width: '154px', height: '51px', top: '1002px', left: '1178px' }}
//                 />

//                 <Box
//                     component="img"
//                     src={playStore}
//                     alt="Play Store"
//                     sx={{ position: 'absolute', width: '154px', height: '50px', top: '942px', left: '1178px' }}
//                 />
//             </Box>
//         </Box>
//     );
// };

// export default Hero;


import React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import wallet from '../assets/wallet.png';
import subtract from '../assets/subtract.svg';
import subtract1 from '../assets/subtract-1.png';
import mobile2 from '../assets/15-plus-5.png';
import mobileFrame from '../assets/mobileframe.png';

import appStore from '../assets/appstore.svg';
import playStore from '../assets/playstore.svg';
// import seeVideo from '../assets/see-video.png'; // your bottom-left image

const Hero = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                px: { xs: 2, md: 8 },
                py: { xs: 6, md: 10 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'linear-gradient(to right, #fff, #f8f6ff)',
            }}
        >
            <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} md={4}>
                    <Box>
                        <Stack spacing={2}>
                            <Box display="flex" alignItems="center" flexWrap="wrap">
                                <Typography
                                    sx={{
                                        fontSize: { xs: '42px', md: '64px' },
                                        fontWeight: '600',
                                        lineHeight: 1,
                                    }}
                                >
                                    Meta&nbsp;
                                </Typography>
                                <Box
                                    component="img"
                                    src={wallet}
                                    alt="Wallet Icon"
                                    sx={{
                                        width: '150px',
                                        mx: 1,
                                        p: 1,
                                    }}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: '42px', md: '64px' },
                                    fontWeight: '600',
                                    lineHeight: 1,
                                }}
                            >
                                Play Wallet
                            </Typography>

                            <Typography sx={{ fontSize: '18px', color: '#000' }}>
                                Fast Easy Secure
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                mt: 8,
                                width: '220px',
                                position: 'relative',
                            }}
                        >
                            <Box
                                component="img"
                                src={subtract1}
                                alt="See Video"
                                sx={{
                                    width: '100%',
                                    borderRadius: '24px',
                                }}
                            />
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: '8px',
                                    right: '12px',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#000',
                                }}
                            >
                                See Video
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} zIndex={1}>
                    <Box sx={{ position: 'relative', width: '355px', mx: 'auto' }}>
                        <Box
                            component="img"
                            src={mobile2}
                            alt="App Screen"
                            sx={{
                                position: 'absolute',
                                top: '20px',
                                left: '25px',
                                width: '302px',
                                height: '654px',
                                borderRadius: '32px',
                            }}
                        />
                        <Box
                            component="img"
                            src={mobileFrame}
                            alt="Phone Frame"
                            sx={{
                                width: '355px',
                                height: '698px',
                                zIndex: 1,
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} zIndex={1}>
                    <Stack spacing={2} className=' items-center md:items-start'>
                        <Typography
                            sx={{
                                fontSize: { xs: '32px', md: '40px' },
                                fontWeight: 600,
                                color: '#000',
                            }}
                        >
                            Mobile<br />Application
                        </Typography>

                        <Typography sx={{ fontSize: '16px', color: '#000' }}>
                            Download App
                        </Typography>

                        <Stack direction="column" spacing={2}>
                            <Box component="img" src={playStore} alt="Play Store" sx={{ width: '154px' }} />
                            <Box component="img" src={appStore} alt="App Store" sx={{ width: '154px' }} />
                        </Stack>

                    </Stack>
                </Grid>
            </Grid>

            <Typography
                sx={{
                    zIndex: 1,
                    position: 'absolute',
                    right: "12%",
                    bottom: "30%",
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    fontSize: '14px',
                    color: '#000',
                    display: { sm: "none", md: "block" },
                }}
            >
                Scroll Down
            </Typography>


            {/* <Typography
                sx={{
                    position: 'absolute',
                    // height: '1050px',
                    top: "-10%",
                    // left: 0,
                    WebkitTextStroke: '1px #000000',
                    opacity: 0.1,
                    fontFamily: 'Poppins, Helvetica',
                    fontWeight: 600,
                    color: 'transparent',
                    fontSize: '600px',
                    textAlign: 'center',
                    lineHeight: 'normal',
                }}
            >
                meta
            </Typography> */}

            <Box
                component="img"
                src={subtract}
                alt="Wallet Icon"
                sx={{
                    position: "absolute",
                    display: { sm: "none", md: "block" },
                    width: '450px',
                    mx: 1,
                    right: "10%",
                    bottom: "25%",
                    p: 1,
                    zIndex: 0
                }}
            />
        </Box>
    );
};

export default Hero;



