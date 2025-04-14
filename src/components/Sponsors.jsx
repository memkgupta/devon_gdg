import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
const Sponsors = () => {
  const sponsors = [
    {
      name: "Hack2skill",
      link: "https://hack2skill.com/",
      logo: "/h2s.png",
      desc: "An industry-leading technology platform dedicated to innovation management and Product evangelism.",
    },
  ];

  return (
    <div
      id="sponsors"
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
        Our Sponsors
      </h2>

      <p className="font-orbitron mt-3 md:mt-5 text-sm sm:text-base md:text-lg tracking-wide text-rose-400 text-center max-w-3xl mx-auto px-2 sm:px-4 md:px-8">
        These are our Sponsors
      </p>

      <div
        className={`mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 ${
          sponsors.length === 1 || sponsors.length === 2
            ? `lg:grid-cols-${sponsors.length}`
            : "lg:grid-cols-3"
        } gap-3 sm:gap-4 lg:gap-5 text-justify justify-items-center`}
      >
        {sponsors.map((sponsor) => {
          return (
            <CardSpotlight
              key={sponsor.name}
              className="w-full h-[300px] max-w-xs flex flex-col justify-center items-center"
            >
              <div className="flex flex-col items-center gap-2 justify-center text-center">
                <Image
                  src={sponsor.logo}
                  alt="Hack2skill Logo"
                  width={200}
                  height={200}
                  className="object-contain z-20"
                />
                <a
                  href={sponsor.link}
                  className="text-lg sm:text-xl font-bold relative z-20 mt-2 flex items-center gap-1 hover:text-rose-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sponsor.name}
                  <ExternalLink size="15px" />
                </a>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm sm:text-base text-center">
                {sponsor.desc}
              </p>
            </CardSpotlight>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
