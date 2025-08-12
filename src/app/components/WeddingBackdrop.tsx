// app/components/WeddingBackdrop.tsx
"use client";
import React from "react";

export default function WeddingBackdrop({
  className = "",
}: {
  className?: string;
}) {
  const gold = "#EBC776";

  return (
    <div className={`pointer-events-none ${className}`}>
      {/* Tileable floral pattern */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wedTile"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke={gold} strokeWidth="1.5" opacity="0.25">
              {/* Large flower with 6 petals */}
              <g transform="translate(120,120)">
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i}
                    d="M0 0 C 20 -40, 60 -40, 60 0 C 60 40, 20 40, 0 0 Z"
                    transform={`rotate(${i * 60})`}
                  />
                ))}
              </g>

              {/* Smaller flower in top-left of tile */}
              <g transform="translate(60,60) scale(0.6)">
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i}
                    d="M0 0 C 20 -40, 60 -40, 60 0 C 60 40, 20 40, 0 0 Z"
                    transform={`rotate(${i * 60})`}
                  />
                ))}
              </g>

              {/* Smaller flower in bottom-right of tile */}
              <g transform="translate(180,180) scale(0.6)">
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i}
                    d="M0 0 C 20 -40, 60 -40, 60 0 C 60 40, 20 40, 0 0 Z"
                    transform={`rotate(${i * 60})`}
                  />
                ))}
              </g>
            </g>
          </pattern>

          {/* gentle vignette */}
          <radialGradient id="pageVignette" cx="50%" cy="40%" r="85%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="85%" stopColor="rgba(0,0,0,0.25)" />
          </radialGradient>

          {/* tiny grain */}
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

        {/* pattern over page bg */}
        <rect width="100%" height="100%" fill="url(#wedTile)" />
        {/* vignette */}
        <rect width="100%" height="100%" fill="url(#pageVignette)" />
        {/* grain */}
        <rect width="100%" height="100%" filter="url(#grain)" opacity="0.06" />
      </svg>
    </div>
  );
}
