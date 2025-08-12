"use client";
import CountdownTimer from "@/app/components/CountdownTimer";
import { beauRivage } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import "animate.css";
import FadeIn from "@/app/components/FadeIn";
import Hero from "./Hero";
import Invitation from "./Invitation";
import Events from "./Events";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <Invitation />
      <Events />
    </div>
  );
};

export default HomePage;
