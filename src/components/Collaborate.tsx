import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { HeartHandshake, HandCoins, ExternalLink, Scale } from "lucide-react";
import Image from "next/image";
const Collaborate = () => {
  const collabLinks = [
    {
      name: "Community Partner",
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
      desc: "Showcase your brand to top talent and changemakers. Fuel the hackathon with your support!",
    },
  ];

  const collaborators = [
    {
      name: "Hack2skill",
      link: "https://hack2skill.com/",
      logo: "/h2s.png",
      desc: "An industry-leading technology platform dedicated to innovation management and Product evangelism.",
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
      className="relative pt-12 tracks-background tracks-bg md:bg-contain bg-cover px-4 sm:px-10 md:px-20 "
    >
      <div className="max-w-screen-xl mx-auto">
        <p className="text-center text-[clamp(2rem,7vw,5rem)] font-audiowide text-rose-700 glitch">
          Our Collaborators
        </p>
        <p className="font-orbitron mt-5 text-base sm:text-lg tracking-wide text-rose-400 text-center max-w-3xl mx-auto px-4 sm:px-8">
          Partners and communities joining us to empower innovation and fuel
          bold ideas.
        </p>
        <div
          className={`mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 ${
            collaborators.length === 1 || collaborators.length === 2
              ? `lg:grid-cols-${collaborators.length}`
              : "lg:grid-cols-3"
          } gap-3 sm:gap-4 lg:gap-5 text-justify justify-items-center`}
        >
          {collaborators.map((collab) => {
            return (
              <CardSpotlight
                key={collab.name}
                className="w-full h-[300px] max-w-xs flex flex-col justify-center items-center"
              >
                <div className="flex flex-col items-center gap-2 justify-center text-center">
                  <Image
                    src={collab.logo}
                    alt="Hack2skill Logo"
                    width={200}
                    height={200}
                    className="object-contain z-20"
                  />
                  <a
                    href={collab.link}
                    className="text-lg sm:text-xl font-bold relative z-20 mt-2 flex items-center gap-1 hover:text-rose-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {collab.name}
                    <ExternalLink size="15px" />
                  </a>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm sm:text-base text-center">
                  {collab.desc}
                </p>
              </CardSpotlight>
            );
          })}
        </div>

        <p className="font-orbitron mt-12 text-base sm:text-lg tracking-wide text-rose-400 text-center max-w-3xl mx-auto px-4 sm:px-8">
          We are looking for sponsors, judges, and community partners to help
          make this hackathon a massive success. Interested in being part of
          Devon 2.0? Let's collaborate!
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {collabLinks.map((collabLink) => {
            const Icon = iconsMap[collabLink.icon as keyof typeof iconsMap];
            return (
              <CardSpotlight key={collabLink.name} className="w-full max-w-xs">
                <div className="flex flex-col items-center gap-2 justify-center text-center">
                  <Icon className="z-10 w-8 h-8 sm:w-10 sm:h-10" />
                  <a
                    href={collabLink.link}
                    className="text-lg sm:text-xl font-bold relative z-20 mt-2 flex items-center gap-1 hover:text-rose-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {collabLink.name}
                    <ExternalLink size="15px" />
                  </a>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm sm:text-base text-center">
                  {collabLink.desc}
                </p>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
