"use client";
import FadeIn from "@/app/components/FadeIn";
import HeartImage from "@/app/components/HeartImage";
import TraditionalInvitation from "@/app/components/TraditionalInvitation";
import WeddingBackdrop from "@/app/components/WeddingBackdrop";
import React from "react";
import "animate.css";

const Invitation = () => {
  return (
    <div className="flex flex-col w-full min-h-screen relative bg-white">
      {/* Page floral background */}
      <WeddingBackdrop className="absolute inset-0 z-0" />
      {/* Heart-shaped images */}
      <FadeIn direction="left" delay={0.05}>
        <HeartImage
          src="/assets/coupleImage1.jpg"
          alt="Couple Top"
          className="hidden md:block absolute top-6 right-6 lg:top-8 lg:right-8 2xl:top-12 2xl:right-12 w-48 h-48 lg:w-64 lg:h-64 2xl:w-[400px] 2xl:h-[400px] z-20 animate__animated animate__pulse  animate__infinite"
          borderColor="#EBC776"
          borderWidth={1}
        />
      </FadeIn>
      <FadeIn delay={0.05} direction="right">
        <HeartImage
          src="/assets/coupleImage3.jpg"
          alt="Couple Bottom"
          className="hidden md:block absolute bottom-6 left-6 lg:bottom-8 lg:left-8 2xl:bottom-12 2xl:left-12 w-48 h-48  lg:w-64 lg:h-64 2xl:w-[400px] 2xl:h-[400px] z-20 animate__animated animate__pulse  animate__infinite"
          borderColor="#EBC776"
          borderWidth={1}
        />
      </FadeIn>

      <div className="flex flex-col p-4 md:p-8 lg:p-12 gap-4 items-center h-full w-full ">
        <h5 className="uppercase text-xs lg:text-sm text-custom-green text-center tracking-widest font-bold">
          INVITATION
        </h5>

        <FadeIn direction="down" delay={0.1} fullWidth>
          <TraditionalInvitation
            monogramSrc="/assets/logo.png"
            couple={{ groom: "Raphael Ochil", bride: "Princess Amuta" }}
            parentsLeft={`Mr. Evans Ben Ochil and\nVera Adu Poku`}
            parentsRight={`Late Brig. Gen John and\nMrs Priscilla Amuta`}
            date="Saturday • Oct. 25, 2025"
            time="10:00 AM"
            venue={`Westfield Country Club,\n7778 152 Street,\nSurrey, BC, Canada`}
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Invitation;
