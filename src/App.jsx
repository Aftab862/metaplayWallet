import './App.css'
import React from "react";
import { Suspense, lazy } from "react";

const Hero = lazy(() => import("./sections/hero"));
const ZeroPersonal = lazy(() => import("./sections/ZeroPersonal"));
const CryptoMarquee = lazy(() => import("./sections/Marque"));
const DivWrapper = lazy(() => import("./sections/DivWrapper"));


function App() {

  return (
    <>
      <Hero />
      <ZeroPersonal />
      <CryptoMarquee />
      <DivWrapper />
    </>
  )
}

export default App
