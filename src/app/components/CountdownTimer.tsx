"use client";
import React from "react";
import "animate.css";

/**
 * Minimal wedding countdown (no background, no CTA)
 * ------------------------------------------------------------
 * Usage:
 * <CountdownTimer target={new Date("2025-12-20T14:00:00")} />
 */

export type CountdownTimerProps = {
  target: Date | string;
  onComplete?: () => void;
  className?: string; // wrapper class (for layout/spacing)
  pillClassName?: string; // style the bubbles
};

function getTimeLeft(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(total / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  return { total, days, hours, minutes, seconds } as const;
}

export default function CountdownTimer({
  target,
  onComplete,
  className,
  pillClassName,
}: CountdownTimerProps) {
  const targetDate = React.useMemo(
    () => (target instanceof Date ? target : new Date(target)),
    [target]
  );

  const [time, setTime] = React.useState(() => getTimeLeft(targetDate));
  const firedRef = React.useRef(false);

  React.useEffect(() => {
    const id = setInterval(() => {
      const t = getTimeLeft(targetDate);
      setTime(t);
      if (t.total <= 0 && !firedRef.current) {
        firedRef.current = true;
        onComplete?.();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate, onComplete]);

  const Pill = ({ value, label }: { value: number; label: string }) => (
    <div
      className={
        "flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full shadow-xl select-none opacity-80 animate__animated animate__pulse  animate__infinite " +
        (pillClassName ?? "bg-gradient-to-br from-red-300 to-red-950")
      }
      aria-label={`${value} ${label}`}
      role="group"
    >
      <div className="text-white text-3xl md:text-4xl font-bold leading-none">
        {value}
      </div>
      <div className="text-white/90 text-[10px] md:text-xs tracking-[0.2em] mt-1 uppercase">
        {label}
      </div>
    </div>
  );

  return (
    <div
      className={
        "w-full flex items-center justify-center overflow-hidden " +
        (className ?? "")
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6  justify-center items-center">
        <Pill value={time.days} label="Days" />
        <Pill value={time.hours} label="Hours" />
        <Pill value={time.minutes} label="Minutes" />
        <Pill
          value={time.seconds}
          label={time.seconds === 1 ? "Second" : "Seconds"}
        />
      </div>
    </div>
  );
}
