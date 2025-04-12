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
      name: "Blockchain",
      icon: "ShieldCheck",
      description: "Explore decentralized apps and smart contracts.",
    },

    {
      name: "Health Tech",
      icon: "HeartPulse",
      description: "Innovate for better healthcare and medical accessibility.",
    },
    {
      name: "EdTech",
      icon: "BookOpenCheck",
      description: "Revolutionize education with creative learning solutions.",
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
      className="relative mt-12 tracks-background tracks-bg md:bg-contain bg-cover px-24 py-16"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-800 opacity-10 blur-sm"></div> */}

      {/* Optional: Add one more layer for depth */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#ff0000]/10 to-transparent blur-[2px]"></div> */}

      <p className="text-center text-7xl font-audiowide text-rose-700 glitch">
        Tracks
      </p>

      <p className="font-orbitron mt-5 tracking-wide text-rose-400">
        Choose from our carefully curated tracks designed to inspire innovation
        and creativity in different domains of technology and problem-solving.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-5 justify-items-center">
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
