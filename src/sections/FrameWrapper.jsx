import React from "react";

export const FrameWrapper = () => {
    return (
        <div className="absolute w-[1441px] h-[970px] top-[3256px] left-0 overflow-hidden">
            <div className="relative w-[1808px] h-[1052px] top-[-301px] left-[-185px]">
                <div className="absolute h-[1050px] top-0 left-0 [-webkit-text-stroke:1px_#000000] opacity-10 [font-family:'Poppins',Helvetica] font-semibold text-transparent text-[700px] text-center tracking-[0] leading-[normal]">
                    Meta
                </div>

                <img
                    className="absolute w-[658px] h-[430px] top-[622px] left-[185px] object-cover"
                    alt="Rectangle"
                    src="https://c.animaapp.com/8dbKVwgr/img/rectangle-9998.svg"
                />

                <img
                    className="absolute w-60 h-[430px] top-[622px] left-[1385px] object-cover"
                    alt="Rectangle"
                    src="https://c.animaapp.com/8dbKVwgr/img/rectangle-9999.svg"
                />

                <p className="absolute w-[835px] top-[357px] left-[325px] [font-family:'Poppins',Helvetica] font-medium text-black text-[64px] tracking-[-4.00px] leading-[72px]">
                    Join the Digital Wallet Revolution Today
                </p>

                <div className="flex flex-col w-[360px] items-start gap-14 absolute top-[677px] left-[925px]">
                    <p className="relative self-stretch mt-[-1.00px] font-medium text-2xl leading-8 [font-family:'Poppins',Helvetica] text-black tracking-[0]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>

                    <div className="relative w-40 h-12 bg-[#203b81] rounded-lg">
                        <div className="absolute h-[18px] top-3.5 left-[34px] [font-family:'Poppins',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[18px] whitespace-nowrap">
                            Get Started
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
