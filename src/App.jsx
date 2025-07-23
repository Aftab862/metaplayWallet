import React from "react";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import BlurBg from "./assets/bg-blur.png";

const App = () => {
  return (
    <div
    // className="bg-[#ecf1fe] flex flex-row justify-center w-full"
    // data-model-id="1:2047"
    >
      {/* <div className="bg-[#ecf1fe] overflow-hidden w-[1440px] h-[4988px]"> */}
      {/* <div className="relative w-[1441px] h-[4988px]">
          <img
            className="absolute w-[1440px] h-[3027px] top-[257px] left-0"
            alt="Bg blur"
            src={BlurBg}
          /> */}

      <Frame />
      {/* <OverlapWrapper /> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

{/* 
<OverlapGroupWrapper />
<FrameWrapper />
<DivWrapper /> */}

export default App;