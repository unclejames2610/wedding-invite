"use client";
import CountdownTimer from "@/app/components/CountdownTimer";
import { beauRivage } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import "animate.css";
import FadeIn from "@/app/components/FadeIn";

const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="absolute z-10 left-4 top-4 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
      />
      <div className="absolute w-full h-full opacity-60">
        <video
          crossOrigin="anonymous"
          autoPlay
          muted
          src="https://res.cloudinary.com/diijwxdjv/video/upload/v1754920008/Untitled_compressed2_mkj4ue.mp4"
          loop
          className="object-cover w-full h-full"
        ></video>
      </div>

      <div className="bg-custom-green2 w-full absolute h-full opacity-70" />

      <div className="flex flex-col items-center w-full justify-center gap-4 z-10 ">
        <FadeIn direction="down" delay={0.05}>
          <h2
            className={`${beauRivage.className} text-4xl md:text-6xl 2xl:text-8xl text-custom-gold z-10`}
          >
            Raphael & Princess
          </h2>
        </FadeIn>

        <FadeIn direction="down" delay={0.1}>
          <h5 className="tracking-wider uppercase text-white font-medium text-base md:text-lg">
            WE ARE GETTING MARRIED
          </h5>{" "}
        </FadeIn>

        {isClient && (
          <FadeIn direction="up" delay={0.05}>
            <CountdownTimer
              target={new Date("2025-10-25T10:00:00")}
              className="py-6 px-4 m-0 mx-auto"
            />
          </FadeIn>
        )}
        <FadeIn direction="up" delay={0.1}>
          <button className=" uppercase tracking-wider rounded-full px-6 py-4 text-xs md:text-base font-medium bg-white text-red-300 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1  hover:bg-gradient-to-br from-red-300 to-red-950 hover:text-white">
            SAVE THE DATE
          </button>
        </FadeIn>
      </div>
    </div>
  );
};

export default HomePage;
