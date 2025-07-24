import React from "react";
import { DivWrapper } from "./sections/DivWrapper";
import { Frame } from "./sections/Frame";
import { FrameWrapper } from "./sections/FrameWrapper";
import { OverlapGroupWrapper } from "./sections/OverlapGroupWrapper";
import { OverlapWrapper } from "./sections/OverlapWrapper";
import BlurBg from "./assets/bg-blur.png";
import Footer from "./sections/footer";

const App = () => {
  return (
    <div>

      <Frame />
      {/* <OverlapWrapper /> */}
      <OverlapGroupWrapper />
      <FrameWrapper />
      <DivWrapper />
      <Footer />

    </div>
  );
};



export default App;