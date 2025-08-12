import React, { FC } from "react";
import { LuClock } from "react-icons/lu";
import { MdCalendarToday } from "react-icons/md";

interface EventCardProps {
  title: string;
  startTime: string;
  endTime: string;
  day: string;
  year: string;
  text: string;
}

const EventCard: FC<EventCardProps> = ({
  title,
  startTime,
  endTime,
  day,
  year,
  text,
}) => {
  return (
    <div className="rounded p-4 md:p-8 flex flex-col gap-6 md:gap-8 border border-white/70  bg-white/15 backdrop-blur-sm text-white/80 items-center w-full max-w-[29rem]">
      <h3 className="tracking-widest uppercase text-base lg:text-lg text-center">
        {title}
      </h3>

      <div className="w-full h-px bg-white/70" />

      <div className="flex gap-10 items-center justify-center tracking-wide">
        <div className="flex flex-col items-center gap-2 text-xs md:text-sm">
          <LuClock className="text-xl" />
          <p>{startTime}</p>
          <p>{endTime}</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs md:text-sm">
          <MdCalendarToday className="text-xl" />
          <p>{day}</p>
          <p>{year}</p>
        </div>
      </div>

      <p className="tracking-wide text-xs md:text-sm text-center">{text}</p>
    </div>
  );
};

export default EventCard;
