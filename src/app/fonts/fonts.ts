import { Work_Sans } from "next/font/google";
import { Beau_Rivage } from "next/font/google";
import { Lavishly_Yours } from "next/font/google";
import { Italianno } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const beauRivage = Beau_Rivage({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const lavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const italianno = Italianno({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
