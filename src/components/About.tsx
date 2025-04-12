"use client";
import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "motion/react";
import { Spotlight } from "./ui/spotlight-new";
const About = () => {
  return (
    <div className="bg-black pt-16" id="about">
      <p className="text-center glitch text-7xl font-audiowide text-rose-700">
        About
      </p>
      <section className="relative py-26 px-6 md:px-16 bg-black text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image or Graphic */}
          <div className="relative">
            <img
              src="/devon-logo.png"
              alt="About DEVON Hackathon"
              className="w-[90%] h-auto object-cover rounded-2xl shadow-lg"
            />
            {/* Optional: Glow or glitch effect */}
            <div className="absolute inset-0 bg-red-500 opacity-10 rounded-2xl blur-3xl z-[-1]" />
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-cyber">
              About DEVON 2.0
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Dev-ON 2.0 is a dynamic hybrid hackathon in Delhi NCR, bringing
              together aspiring developers to showcase their technical
              expertise, creativity, and problem-solving skills. Through a
              series of competitive eliminatory rounds, participants refine
              their ideas from coding to conceptualization and real-world
              pitching. The event fosters innovation by providing mentorship,
              exposure, and networking opportunities, empowering participants to
              transform ideas into impactful solutions
            </p>

            {/* Optional: Timeline or badges */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                12 Hours
              </span>
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                Cash Prizes
              </span>
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                In-Person
              </span>
              <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                Multiple Rounds
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
