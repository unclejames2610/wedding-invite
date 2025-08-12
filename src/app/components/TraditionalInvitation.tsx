"use client";
import React from "react";
import { italianno, sourceSerif4 } from "../fonts/fonts";

/**
 * Idoma Traditional Wedding Invitation (Red/Black + Gold accents)
 * ------------------------------------------------------------------
 * - Replaces floral ornaments with Idoma-inspired woven stripe bands
 * - Uses gold (#EBC776) for highlights
 * - Fully responsive; print-friendly container ratio (A5-ish)
 *
 * Customize the text via props.
 */

type InvitationProps = {
  couple?: { bride: string; groom: string };
  title?: string; // e.g., "Traditional Wedding Invitation"
  date?: string; // e.g., "Saturday • Sept. 27, 2025"
  time?: string; // e.g., "10:00 AM"
  venue?: string; // multi-line allowed with <br/>
  parentsLeft?: string;
  parentsRight?: string;
  monogramSrc?: string; // optional logo
};

const GOLD = "#EBC776"; // from your logo swatch

export default function TraditionalInvitation({
  couple = { bride: "Princess Amuta", groom: "Raphael Ochil" },
  title = "Traditional Wedding Invitation",
  date = "Saturday • Oct. 25, 2025",
  time = "10:00 AM",
  venue = "Westfield Country Club,\n7778 152 Street,\nSurrey, BC, Canada",
  parentsLeft = "Mr. Evans Ben Ochil and\nVera Adu Poku",
  parentsRight = "Brig. Gen John and\nMrs Priscilla Amuta",
  monogramSrc,
}: InvitationProps) {
  return (
    <div
      className={`w-full bg-transparent min-h-screen flex md:items-center md:justify-center p-0 md:py-8 md:px-4 ${sourceSerif4.className} `}
    >
      {/* Card */}
      <article
        className="relative w-full h-screen sm:h-full max-w-[820px] aspect-[3/4]  bg-gradient-to-b from-black via-custom-green to-black text-white shadow-2xl rounded-xl overflow-hidden print:shadow-none"
        // style={{
        //   // faint textured overlay via repeating stripes
        //   backgroundImage:
        //     "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), radial-gradient(1200px 600px at 50% 0%, rgba(186,26,33,0.25), rgba(0,0,0,0) 60%)",
        // }}
      >
        <div className="absolute opacity-20 inset-0 z-0 pointer-events-none">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* tileable rings + floral lines */}
              <pattern
                id="wedTile"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <g
                  fill="none"
                  stroke="#EBC776"
                  strokeWidth="1.2"
                  opacity="0.08"
                >
                  <circle cx="70" cy="70" r="28" />
                  <circle cx="92" cy="70" r="28" />
                  <path d="M150 35c-18 6-28 24-20 40 8 16 28 18 42 5" />
                  <path d="M30 150c10-8 26-8 36 2 10 10 10 26 2 36" />
                  <path d="M140 150 c8-6 18-6 26 0" />
                  <path d="M145 156 c6-4 12-4 18 0" />
                  <path d="M50 40 c6-4 14-4 20 0" />
                </g>
              </pattern>
              {/* very soft grain */}
              <filter id="grain">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="2"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                  <feFuncA type="table" tableValues="0 0.35" />
                </feComponentTransfer>
              </filter>
            </defs>

            {/* repeat pattern */}
            <rect
              width="100%"
              height="100%"
              fill="url(#wedTile)"
              style={{ mixBlendMode: "soft-light" }}
            />

            {/* subtle vignette for depth */}
            <rect width="100%" height="100%" fill="url(#grad)" opacity="0.1" />
            <defs>
              <radialGradient id="grad" cx="50%" cy="40%" r="80%">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="80%" stopColor="rgba(0,0,0,0.35)" />
              </radialGradient>
            </defs>

            {/* ultra-subtle film grain */}
            <rect
              width="100%"
              height="100%"
              filter="url(#grain)"
              style={{ mixBlendMode: "overlay" }}
              opacity="0.03"
            />
          </svg>
        </div>
        {/* Top Idoma stripe band */}
        <StripeBand position="top" />

        {/* Bottom Idoma stripe band */}
        <StripeBand position="bottom" />

        {/* Corner bead motifs */}
        <CornerBeads side="tl" />
        <CornerBeads side="br" />

        {/* Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-between py-8 px-6 md:px-10">
          {/* Header */}
          <header className="flex flex-col items-center gap-3 pt-2">
            {monogramSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={monogramSrc}
                alt="Monogram"
                className="h-14 w-14 object-contain"
              />
            ) : (
              <div
                className="h-14 w-14 rounded-full flex items-center justify-center"
                style={{ border: `1.5px solid ${GOLD}`, color: GOLD }}
              >
                <span className="text-xl font-semibold">R • P</span>
              </div>
            )}
            <div
              className="uppercase text-center tracking-[0.35em] text-[10px] md:text-xs text-white/80"
              style={{ letterSpacing: "0.35em" }}
            >
              {title}
            </div>
          </header>

          {/* Parents */}
          <section className="text-center text-xs md:text-sm leading-relaxed whitespace-pre-line text-white/90 font-medium">
            {parentsLeft}
            {"\n"}
            <span className="opacity-70">&</span>
            {"\n"}
            {parentsRight}
            <div className="my-3" />

            <span className="tracking-widest text-[10px] md:text-xs uppercase text-white/80">
              invite you to the traditional wedding of
            </span>
          </section>

          {/* Names */}
          <section className={`text-center  ${italianno.className}`}>
            <h1
              className="text-5xl md:text-7xl 2xl:text-8xl "
              style={{ color: GOLD }}
            >
              {couple.groom}
            </h1>
            <div
              className="py-1 text-lg md:text-5xl 2xl:text-6xl"
              style={{ color: GOLD }}
            >
              &
            </div>
            <h2
              className="text-5xl md:text-7xl 2xl:text-8xl"
              style={{ color: GOLD }}
            >
              {couple.bride}
            </h2>
          </section>

          {/* Date */}
          <section className="text-center">
            <div className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-white/80">
              Saturday
            </div>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="px-3 py-1 border-y border-custom-gold  text-xs md:text-sm uppercase">
                Oct.
              </span>
              <span className="text-3xl md:text-4xl" style={{ color: GOLD }}>
                25
              </span>
              <span className="px-3 py-1 border-y border-custom-gold  text-xs md:text-sm">
                2025
              </span>
            </div>
          </section>

          <div className="bg-custom-gold w-1.5 h-1.5 md:w-3 md:h-3 rounded-full flex-shrink-0 -my-10" />

          {/* Venue */}
          <section className="text-center whitespace-pre-line text-xs md:text-sm text-white/90">
            {venue}
            <div className="mt-3 tracking-widest uppercase text-[10px] md:text-xs">
              At {time}
            </div>
          </section>

          <footer className="h-4" />
        </div>
      </article>
    </div>
  );
}

function StripeBand({ position }: { position: "top" | "bottom" }) {
  return (
    <div
      className={
        (position === "top" ? "top-0" : "bottom-0") +
        " absolute left-0 right-0 h-14 md:h-16 opacity-70"
      }
      aria-hidden
    >
      {/* Idoma inspired stripes: bold red/black with a thin gold keyline */}
      <div className="absolute inset-0" style={{ backgroundColor: "black" }} />
      <div
        className="absolute inset-[3px]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #C1121F 0 22px, #000 22px 44px)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ border: `2px solid ${GOLD}`, pointerEvents: "none" }}
      />
    </div>
  );
}

function CornerBeads({ side }: { side: "tl" | "br" }) {
  // Simple gold bead cluster drawn in SVG (evokes coral beads)
  const pos =
    side === "tl"
      ? "top-6 left-6 md:top-8 md:left-8"
      : "bottom-6 right-6 md:bottom-8 md:right-8";
  return (
    <svg
      className={`absolute ${pos} w-20 h-20 md:w-24 md:h-24 opacity-80`}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <g filter="url(#glow)" stroke="#EBC776" strokeWidth="2" fill="#EBC776">
        <circle cx="50" cy="50" r="6" />
        <circle cx="32" cy="62" r="4" />
        <circle cx="68" cy="62" r="4" />
        <circle cx="25" cy="42" r="3.5" />
        <circle cx="75" cy="42" r="3.5" />
        <circle cx="50" cy="28" r="3.5" />
      </g>
      <defs>
        <filter id="glow" x="0" y="0" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
