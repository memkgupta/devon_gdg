import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { HeartHandshake, HandCoins, ExternalLink, Scale } from "lucide-react";

const Collaborate = () => {
  const hackathonTracks = [
    {
      name: "Be a Community Partner",
      icon: "HeartHandshake",
      link: "https://docs.google.com/forms/d/1EXWp07n5lzpK4aphBr2MAT2FL-0JRFGxixRVPsI1ibM/edit",
      desc: "Empower the next wave of innovation! Collaborate with us and grow your tech tribe.",
    },
    {
      name: "Be a Judge",
      icon: "Scale",
      link: "https://docs.google.com/forms/d/1cfR5io9Ki0UMtmvbSSB_112KGUY0qYVhRu9VmXy19Fg/edit",
      desc: "Shape the future—one pitch at a time. Share your expertise and inspire bright minds.",
    },

    {
      name: "Be a Sponsor",
      icon: "HandCoins",
      link: "https://docs.google.com/forms/d/1qgpYR7iw5lbvWCxR4mAy_SxXK7BfmQ_IgeDCijJsu9o/edit",
      desc: "Showcase your brand to top talent and changemakers. Fuel the hackathon with your support!",
    },
  ];

  const iconsMap = {
    HeartHandshake,
    HandCoins,
    Scale,
  };
  return (
    <div
      id="collaborate"
      className="relative mt-12 tracks-background tracks-bg md:bg-contain bg-cover px-24 py-16"
    >
      <p className="text-center text-7xl font-audiowide text-rose-700 glitch">
        Collaborate with Us
      </p>

      <p className="font-orbitron mt-5 tracking-wide text-rose-400 text-center px-12">
        We are looking for sponsors, judges, and community partners to help make
        this hackathon a massive success. Interested in being part of Devon 2.0?
        Let's collaborate!
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5 justify-items-center">
        {hackathonTracks.map((track) => {
          const Icon = iconsMap[track.icon as keyof typeof iconsMap];
          return (
            <CardSpotlight key={track.name} className="w-96">
              <div className="flex flex-col items-center gap-2 justify-center">
                <Icon className="z-10" />
                <a
                  href={track.link}
                  className="text-xl font-bold relative z-20 mt-2 flex items-center gap-1 hover:text-rose-600"
                >
                  {track.name}
                  <ExternalLink size="15px" />
                </a>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm text-center">
                {track.desc}
              </p>
            </CardSpotlight>
          );
        })}
      </div>
    </div>
  );
};

export default Collaborate;
