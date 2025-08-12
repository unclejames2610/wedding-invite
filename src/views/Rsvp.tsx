// app/rsvp/page.tsx
"use client";
import LoaderSmall from "@/app/components/LoaderSmall";
import { lavishlyYours } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import dynamic from "next/dynamic";
import animationData from "@/data/confetti.json";

const Player = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export default function Rsvp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  async function onSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    console.log({ name, email });
    setName("");
    setEmail("");
    setSuccess(true);
    setErrorText("");
  }

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [success]);

  return (
    <main
      className="h-full bg-neutral-50 flex flex-col gap-8 items-center justify-center px-4 py-8 md:py-16 lg:py-32 relative"
      id="rsvp"
    >
      {success && (
        <div className="absolute left-16 top-8 h-40 w-40 z-10">
          <Player
            loop={success}
            autoplay={success}
            animationData={animationData}
            className="w-full h-full"
          />
        </div>
      )}
      {success && (
        <div className="absolute right-12 top-40 h-40 w-40 z-10">
          <Player
            loop={success}
            autoplay={success}
            animationData={animationData}
            className="w-full h-full"
          />
        </div>
      )}
      <section className="w-full max-w-5xl text-center flex flex-col gap-4">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-red-400 ${lavishlyYours.className}`}
        >
          Are You Attending?
        </h1>
        <p className="mt-3 text-neutral-600">
          Please fill out the form to let us know you're attending. Thanks!
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-8 bg-white rounded-2xl shadow-xl p-4 md:p-6"
        >
          {/* Inline row on desktop, stacked on mobile */}
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 rounded-xl border border-neutral-200 bg-white px-4 outline-none focus:ring-2 focus:ring-red-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-xl border border-neutral-200 bg-white px-4 outline-none focus:ring-2 focus:ring-red-300"
            />
            {errorText !== "" && (
              <p className="text-red-500 text-xs text-center md:text-sm font-medium">
                {errorText}
              </p>
            )}
            <button
              type="submit"
              className="h-12 min-w-32 flex items-center justify-center rounded-full  bg-gradient-to-br from-red-300 to-red-950 tracking-wider text-white font-semibold px-6 shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {loading ? (
                <ClipLoader color="#FFFFFF" size={18} />
              ) : (
                "I AM ATTENDING"
              )}
            </button>
          </div>
        </form>

        <footer className="mt-10 text-sm text-neutral-500">
          © {new Date().getFullYear()} Udeala Chukwuebuka. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
