"use client";
import React from "react";

type HeartImageProps = {
  src: string;
  alt?: string;
  className?: string; // positioning/size (Tailwind)
  borderColor?: string; // e.g. "#fff" or "rgba(235,199,118,.95)"
  borderWidth?: number; // px
};

export default function HeartImage({
  src,
  alt = "",
  className = "",
  borderColor = "#ffffff",
  borderWidth = 4,
}: HeartImageProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      aria-label={alt}
      role="img"
    >
      {/* Smooth heart path inset a bit so border isn't clipped */}
      <defs>
        <clipPath id="heartClip">
          <path
            d="
              M50 18
              C36 5, 8 5, 8 36
              C8 57, 28 78, 50 96
              C72 78, 92 57, 92 36
              C92 5, 64 5, 50 18
              Z
            "
          />
        </clipPath>
      </defs>

      {/* Image clipped to heart */}
      <image
        href={src}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMin slice" // or xMidYMax, xMinYMid, xMaxYMid
        clipPath="url(#heartClip)"
      />

      {/* Optional smooth border */}
      {borderWidth > 0 && (
        <path
          d="
            M50 18
            C36 5, 8 5, 8 36
            C8 57, 28 78, 50 96
            C72 78, 92 57, 92 36
            C92 5, 64 5, 50 18
            Z
          "
          fill="none"
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
      )}
    </svg>
  );
}
