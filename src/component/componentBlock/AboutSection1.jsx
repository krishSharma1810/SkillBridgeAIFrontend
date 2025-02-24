"use client";
import React from "react";
import Spotlight from "../ui/spotlight-new";

function SpotlightNewDemo() {
  return (
    (<div
      className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Empowering Learning with AI
        </h1>
        <p
          className="mt-8 font-normal text-xl text-neutral-300 max-w-2xl text-center mx-auto">
          At SkillBridge AI, we bridge the gap between questions and knowledge using cutting-edge artificial intelligence. Our platform transforms the way users interact with information, making learning faster, smarter, and more accessible.
        </p>
      </div>
    </div>)
  );
}

export default SpotlightNewDemo 