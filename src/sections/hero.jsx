import React from 'react'
import subtract from '../assets/subtract.svg';
import subtract1 from '../assets/subtract-1.png';
import mobile1 from '../assets/7@2x.png';
import mobile2 from '../assets/15-plus-5.png';
import mobileFrame from '../assets/mobileframe.png';
import wallet from '../assets/wallet.png';
import appStore from '../assets/appstore.svg';
import playStore from '../assets/playstore.svg';



const Hero = () => {
    return (
        <div className=" w-full h-[1023px]  overflow-hidden">
            <div className="relative w-full h-full top-[-254px] left-[-237px]">
                <div className="absolute h-[1050px] top-0 left-0 [-webkit-text-stroke:1px_#000000] opacity-10 [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[700px] text-center tracking-[0] leading-[normal]">
                    meta
                </div>


                <img
                    className="absolute w-[660px] h-[727px] top-[440px] left-[878px]"
                    alt="Subtract"
                    src={subtract}
                />

                <img
                    className="absolute w-[300px] h-[199px] top-[918px] left-[378px] object-cover"
                    alt="Subtract"
                    src={subtract1}
                />

                <img
                    className="absolute w-[197px] h-[216px] top-[908px] left-[385px] object-cover"
                    alt="Element"
                    src={mobile1}
                />

                <div className="absolute w-[355px] h-[698px] top-[539px] left-[810px]">
                    <div className="relative h-[698px]">
                        {/* <ElementPlus className="!h-[654px] !rounded-[32px] !absolute bg-[url(https://c.animaapp.com/8dbKVwgr/img/15-plus-5.png)] !left-[27px] !w-[302px] !top-[22px]" /> */}
                        <img src={mobile2} alt=""
                            className="!left-[27px] !w-[302px] !top-[22px] !h-[654px] !rounded-[32px] !absolute"
                        />
                        <img
                            className="absolute w-[355px] h-[698px] top-0 left-0 object-cover"
                            alt="Iphone plus green"
                            src={mobileFrame}
                        />
                    </div>
                </div>

                <div className="absolute top-[445px] left-[386px] [font-family:'Poppins',Helvetica] font-medium text-black text-[84px] tracking-[-7.00px] leading-[96px]">
                    Meta
                    <br />
                    Play Wallet
                </div>

                <div className="absolute top-[751px] left-[1178px] [font-family:'Poppins',Helvetica] font-medium text-black text-[40px] tracking-[-2.00px] leading-[48px]">
                    Mobile
                    <br />
                    Application
                </div>

                <div className="absolute top-[679px] left-[378px] [font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[-1.00px] leading-[normal]">
                    Fast  Easy  Secure
                </div>

                <div className="inline-flex cursor-pointer flex-col items-start justify-center gap-4 absolute top-[982px] left-[1478px]">
                    <div className="relative w-[81px] h-6 ml-[-28.50px] mr-[-28.50px] rotate-[-90.00deg] [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                        Scroll Down
                    </div>

                    {/* <Property1LightOutlineProperty2ArrowDown className="!relative !w-6 !h-6" /> */}
                </div>

                <div className="inline-flex flex-col h-[110px] items-start justify-center gap-4 absolute top-[925px] left-[611px] rotate-[90.00deg]">
                    {/* <GeneralLight1 className="!relative !w-6 !h-6 !rotate-[-90.00deg]" /> */}
                    <div className="relative flex-1 w-[70px] ml-[-23.00px] mr-[-23.00px] rotate-[-90.00deg] [font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                        See Video
                    </div>
                </div>

                <div className="absolute top-[903px] left-[1178px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                    Download App
                </div>

                <img
                    className="absolute w-[133px] h-14 top-[471px] left-[596px]"
                    alt="Group"
                    src={wallet}
                />

                <img
                    className="h-[51px] top-[1002px] absolute w-[154px] left-[1178px]"
                    alt="Googleplay appstore"
                    src={appStore}
                />

                <img
                    className="h-[50px] top-[942px] absolute w-[154px] left-[1178px]"
                    alt="Googleplay appstore"
                    src={playStore}
                />
            </div>
        </div>
    );
};

export default Hero;

