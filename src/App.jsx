import React, { useEffect } from "react";
import { DivWrapper } from "./sections/DivWrapper";
import Hero from "./sections/hero";
import { FrameWrapper } from "./sections/FrameWrapper";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper";
import MotionFadeIn from "./components/MotionFadeIn";
import { ZeroPersonal } from "./sections/ZeroPersonal";

// useEffect((
//   Window.scrollTo(0)
// ), [])

const App = () => {
  return (
    <div>
      <MotionFadeIn delay={0.1}>
        <Hero />
      </MotionFadeIn>
      <MotionFadeIn delay={0.2}>
        <OverlapGroupWrapper />
      </MotionFadeIn>
      <MotionFadeIn delay={0.3}>
        <ZeroPersonal />
      </MotionFadeIn>
      <MotionFadeIn delay={0.4}>
        <FrameWrapper />
      </MotionFadeIn>
      <MotionFadeIn delay={0.5}>
        <DivWrapper />
      </MotionFadeIn>
    </div>
  );
};

export default App;
{
  /* <OverlapWrapper /> */
}
