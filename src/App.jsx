import React, { useEffect } from "react";
import { DivWrapper } from "./sections/DivWrapper";
import Hero from "./sections/hero";
import { FrameWrapper } from "./sections/FrameWrapper";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper";
import MotionFadeIn from "./components/MotionFadeIn";
import ZeroPersonal from "./sections/ZeroPersonal";
import Marquee from "./sections/Marque";


const App = () => {
  return (
    <div>
      {/* <MotionFadeIn delay={0}> */}
      <Hero />
      {/* </MotionFadeIn> */}

      {/* <MotionFadeIn delay={0}> */}
      <ZeroPersonal />
      {/* </MotionFadeIn> */}
      {/* <MotionFadeIn delay={0}> */}
      <Marquee />
      {/* </MotionFadeIn> */}
      {/* <MotionFadeIn delay={0}> */}
      <DivWrapper />
      {/* </MotionFadeIn> */}
    </div>
  );
};

export default App;
{/* <FrameWrapper /> */ }

//  <MotionFadeIn delay={0}>
//       <OverlapGroupWrapper />
//     </MotionFadeIn>
{
  /* <OverlapWrapper /> */
}
