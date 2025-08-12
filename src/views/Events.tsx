"use client";
import EventCard from "@/app/components/EventCard";
import FadeIn from "@/app/components/FadeIn";
import { Button } from "@/app/components/ui/MovingBorder";
import { beauRivage, italianno, lavishlyYours } from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Events = () => {
  const eventOptions = [
    {
      title: "Main Ceremony",
      startTime: "4:00 PM",
      endTime: "6:00 PM",
      day: "Saturday 25",
      year: "October, 2025",
      text: "Come witness the magic as we exchange vows, promise each other the world, and maybe share a few happy tears together.",
    },
    {
      title: "Wedding Party",
      startTime: "7:00 PM",
      endTime: "12:00 AM",
      day: "Saturday 25",
      year: "October, 2025",
      text: "Once the vows are sealed, it's time to let loose, bring your dancing shoes, your biggest smiles, and an appetite for food, laughter, and late-night memories.",
    },
  ];
  return (
    <div className="flex flex-col w-full relative ">
      <img
        src="/assets/weddingLocation.jpg"
        alt="wedding location"
        className="absolute w-full h-full opacity-60"
      />{" "}
      <div className="absolute w-full h-full opacity-60 bg-black" />
      <div className="flex flex-col p-4 md:p-8 lg:p-12 gap-4 items-center h-full w-full z-20">
        <h5 className="uppercase text-xs lg:text-sm text-white/60 text-center tracking-widest font-bold">
          OUR SPECIAL EVENTS
        </h5>

        <h3
          className={`${lavishlyYours.className} font-semibold text-5xl lg:text-7xl text-custom-gold mt-4`}
        >
          Wedding Events
        </h3>

        <div className="my-10 md:mt-24 flex items-center justify-center gap-6 md:gap-12 flex-col md:flex-row w-full md:mb-16">
          {eventOptions.map((item, index) => (
            <FadeIn
              direction={index === 0 ? "right" : "left"}
              delay={0.1}
              key={index}
            >
              <EventCard
                text={item.text}
                title={item.title}
                startTime={item.startTime}
                endTime={item.endTime}
                day={item.day}
                year={item.year}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.1}>
          <Link
            href="https://larinimagery.pixieset.com/princessproposal/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              borderRadius="9999px"
              className="bg-custom-green2 border-custom-green2 text-white tracking-wider  transition-all duration-500 hover:shadow-xl flex items-center gap-1 text-base "
            >
              View Gallery{" "}
              <IoIosArrowRoundForward className="text-white text-2xl" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default Events;
