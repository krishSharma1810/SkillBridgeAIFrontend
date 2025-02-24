import React from "react";
import BackgroundLines from "../ui/background-lines";
import FlipWordText from "../componentBlock/HeroText"
import HeroButton1 from "../componentBlock/MovingBorderButton"
import HeroButton2 from "../ui/HeroButton2"

function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2
        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Your Smart Learning Assistant
      </h2>
      <div
        className="max-w-5xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        <FlipWordText />
      </div>
      <div className="flex gap-x-10 pt-10 items-center justify-center">
        <HeroButton1 name="Learn More" />
        <HeroButton2 />
      </div>
    </BackgroundLines>)
  );
}

export default BackgroundLinesDemo