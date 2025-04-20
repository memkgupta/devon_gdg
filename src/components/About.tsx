"use client";
import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";
import { Spotlight } from "./ui/spotlight-new";

const About = () => {
  return (
    <div
      className="relative px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-8 sm:pb-12 md:pb-16 "
      id="about"
    >
      <div
        className="absolute bg-top inset-0 bg-cover md:bg-center blur-sm"
        style={{ backgroundImage: "url('/timeline-back.png')" }}
      />
      <div className="relative   z-10">
        <h1 className="text-center glitch text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-audiowide text-rose-700 mb-6 sm:mb-8 md:mb-10">
          About
        </h1>
        <div className="z-0 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Image container - stacks on mobile, side by side on larger screens */}
          <div className="relative mx-auto md:mx-0 w-full max-w-md order-2 md:order-1 mt-6 md:mt-0 bg-blend-color-burn">
            <img
              src="/logodevon2.0-2.png"
              alt="About DEVON Hackathon"
              className="w-full h-auto object-cover rounded-3xl shadow-lg"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-red-500 opacity-10 rounded-2xl blur-3xl z-[-1]" />
          </div>

          {/* Text Content - appears first on mobile, second on desktop */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 font-cyber text-rose-300">
              About DEVON 2.0
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Dev-ON 2.0 is a dynamic hybrid hackathon in Delhi NCR, bringing
              together aspiring developers to showcase their technical
              expertise, creativity, and problem-solving skills. Through a
              series of competitive eliminatory rounds, participants refine
              their ideas from coding to conceptualization and real-world
              pitching. The event fosters innovation by providing mentorship,
              exposure, and networking opportunities, empowering participants to
              transform ideas into impactful solutions.
            </p>

            {/* Badges with responsive spacing and sizing */}
            <div className="mt-4 sm:mt-5 md:mt-6 flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
              <span className="bg-red-600/20 text-red-400 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                12 Hours
              </span>
              <span className="bg-red-600/20 text-red-400 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Cash Prizes
              </span>
              <span className="bg-red-600/20 text-red-400 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                In-Person
              </span>
              <span className="bg-red-600/20 text-red-400 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                Multiple Rounds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
