"use client";
import CountdownTimer from "@/app/components/CountdownTimer";
import { beauRivage } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import "animate.css";
import FadeIn from "@/app/components/FadeIn";
import Navbar from "@/app/components/Navbar";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const url = process.env.NEXT_PUBLIC_HERO_VIDEO;
  return (
    <div
      className="w-full min-h-screen relative flex items-center justify-center"
      id="home"
    >
      {/* <img
        src="/assets/logo.png"
        alt="logo"
        className="absolute z-10 left-4 top-4 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
      /> */}

      <div className="absolute z-10 w-full left-0  top-0">
        <Navbar />
      </div>
      <div className="absolute w-full h-full opacity-60">
        <video
          crossOrigin="anonymous"
          autoPlay
          muted
          src={url}
          loop
          className="object-cover w-full h-full"
        ></video>
      </div>

      <div className="bg-custom-green2 w-full absolute h-full opacity-70" />

      <div className="flex flex-col items-center w-full justify-center gap-4 z-10 p-4">
        <FadeIn direction="down" delay={0.05}>
          <h2
            className={`${beauRivage.className} text-4xl sm:text-5xl md:text-6xl 2xl:text-8xl text-custom-gold z-10 text-center`}
          >
            Raphael & Princess
          </h2>
        </FadeIn>

        <FadeIn direction="down" delay={0.1}>
          <h5 className="tracking-wider uppercase text-white font-medium text-base md:text-lg text-center">
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

export default Hero;
