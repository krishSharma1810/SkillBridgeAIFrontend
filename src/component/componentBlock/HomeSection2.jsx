"use client";
import React from "react";
import WobbleCard from "../ui/wobble-card";

function WobbleCardDemo() {
  return (
    (
      <div className="h-screen bg-black/[0.96]">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pt-[8%]">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className="">
            <div className="max-w-xs">
              <h2
                className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                🚀 SkillBridge AI: Transform the Way You Learn
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                With AI-powered insights and over 100,000+ learners, SkillBridge AI is the go-to platform for smarter, faster knowledge acquisition.
              </p>
            </div>
            <img
              src="/HeroSection2Image1.jpg"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[15%] grayscale filter -bottom-20 object-contain rounded-2xl" />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2
              className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              💡 No Barriers, No Limits, Just Learning.
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Upload PDFs or images, ask anything, and let AI guide you with precise answers and insights.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2
                className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                ⚡ Join the Future of AI-Powered Learning Today!
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Experience state-of-the-art AI that helps you learn, analyze, and grow with ease. Get started with SkillBridge AI now!
              </p>
            </div>
            <img
              src="/HeroSection2Image2.jpg"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[0%] -bottom-60 object-contain rounded-2xl" />
          </WobbleCard>
        </div>
      </div>)
  );
}


export default WobbleCardDemo