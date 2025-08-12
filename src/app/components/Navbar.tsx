"use client";
import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Invitation",
      id: "invitation",
    },
    {
      name: "Events",
      id: "events",
    },
    {
      name: "RSVP",
      id: "rsvp",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 lg:px-8">
      <img
        src="/assets/logo.png"
        alt="logo"
        className="object-contain h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
      />

      <div className="hidden md:flex items-center gap-4 tracking-wide text-white/80 uppercase">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.id}
            smooth
            duration={1500}
            className="hover:font-semibold cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* <FaBars className="text-white/80 cursor-pointer md:hidden text-3xl" /> */}
    </div>
  );
};

export default Navbar;
