"use client";
import CountdownTimer from "@/app/components/CountdownTimer";
import { beauRivage } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import "animate.css";
import FadeIn from "@/app/components/FadeIn";
import Hero from "./Hero";
import Invitation from "./Invitation";
import Events from "./Events";
import Rsvp from "./Rsvp";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden">
      <Hero />
      <Invitation />
      <Events />
      <Rsvp />
    </div>
  );
};

export default HomePage;
