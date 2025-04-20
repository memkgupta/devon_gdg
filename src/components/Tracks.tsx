import React from "react";
import { TracksCard } from "./TracksCard";
import { CheckIcon } from "lucide-react";
import { CardSpotlight } from "./ui/card-spotlight";

const Tracks = () => {
  const hackathonTracks = [
    {
      name: "AI/ML",
      icon: "Brain",
      description:
        "Leverage machine learning and AI to solve real-world problems.",
    },
    {
      name: "Web3.0",
      icon: "Wallet",
      description:
        "Build decentralized apps and services using Web3 technologies.",
    },
    {
      name: "Healthcare",
      icon: "HeartPulse",
      description: "Innovate for better healthcare and medical accessibility.",
    },
    {
      name: "IoT",
      icon: "Router",
      description:
        "Connect devices, collect data, and automate systems with IoT solutions.",
    },
    {
      name: "Women Safety",
      icon: "ShieldCheck",
      description:
        "Build tech-driven tools ensuring safety and empowerment for women worldwide.!",
    },
    {
      name: "Open Innovation",
      icon: "Sparkles",
      description: "Think outside the box – build anything impactful!",
    },
  ];

  return (
    <div
      id="tracks"
      className="relative  tracks-bg bg-cover px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-8 sm:pb-12 md:pb-16 -mt-1"
    >
      <div
        className="absolute inset-0 bg-cover bg-top md:bg-center blur-sm"
        style={{ backgroundImage: "url('/timeline-back.png')" }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-800 opacity-10 blur-sm"></div> */}

      {/* Optional: Add one more layer for depth */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#ff0000]/10 to-transparent blur-[2px]"></div> */}

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-audiowide text-rose-700 glitch">
        Tracks
      </h2>

      <p className="relative font-orbitron mt-3 md:mt-5 text-sm sm:text-base md:text-lg tracking-wide text-rose-300  text-center max-w-3xl mx-auto px-2 sm:px-4 md:px-8">
        Choose from our carefully curated tracks designed to inspire innovation
        and creativity in different domains of technology and problem-solving.
      </p>

      <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 text-justify justify-items-center">
        {hackathonTracks.map((track) => {
          return (
            <TracksCard
              key={track.name}
              name={track.name}
              icon={track.icon}
              description={track.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;
