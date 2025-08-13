import React, { useEffect } from "react";
import { DivWrapper } from "./sections/DivWrapper";
import Hero from "./sections/hero";
import { FrameWrapper } from "./sections/FrameWrapper";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper";
import MotionFadeIn from "./components/MotionFadeIn";
import ZeroPersonal from "./sections/ZeroPersonal";
import Marquee from "./sections/Marque";

// useEffect((
//   Window.scrollTo(0)
// ), [])

const App = () => {
  return (
    <div>
      <MotionFadeIn delay={0.1}>
        <Hero />
      </MotionFadeIn>
      <MotionFadeIn delay={0.1}>
        <OverlapGroupWrapper />
      </MotionFadeIn>
      <MotionFadeIn delay={0.1}>
        {/* <FrameWrapper /> */}
        <Marquee />
      </MotionFadeIn>
      <MotionFadeIn delay={0.1}>
        <ZeroPersonal />
      </MotionFadeIn>
      <MotionFadeIn delay={0.1}>
        <DivWrapper />
      </MotionFadeIn>
    </div>
  );
};

export default App;
{
  /* <OverlapWrapper /> */
}
