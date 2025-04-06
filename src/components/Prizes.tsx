import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { Trophy, Award, Star } from "lucide-react";

const prizeData = [
  {
    place: "3rd Prize",
    icon: <Star size={40} className="text-yellow-500" />,
    amount: "₹10,000",
    baseHeight: "70%",
    hoverHeight: "group-hover:h-64",
  },
  {
    place: "1st Prize",
    icon: <Trophy size={50} className="text-yellow-400" />,
    amount: "₹30,000",
    baseHeight: "90%",
    hoverHeight: "group-hover:h-88",
  },
  {
    place: "2nd Prize",
    icon: <Award size={45} className="text-yellow-300" />,
    amount: "₹20,000",
    baseHeight: "80%",
    hoverHeight: "group-hover:h-72",
  },
];

export const Prizes = () => {
  return (
    <div
      id="prizes"
      className="relative mt-12 tracks-background tracks-bg md:bg-contain bg-cover px-24 py-16"
    >
      {/* Make sure the heading section has a high z-index */}
      <div className="relative z-10">
        <p className="text-center text-7xl font-audiowide text-rose-700 glitch">
          Prizes
        </p>

        <p className="font-orbitron mt-5 text-center tracking-wide text-rose-400">
          Recognizing excellence with exciting rewards for the top performers!
        </p>
      </div>

      {/* Card container should have a lower z-index */}
      <div className="relative z-0 mt-20 flex flex-col md:flex-row justify-center items-center gap-2">
        {prizeData.map((prize, idx) => (
          <CardSpotlight key={idx}>
            <div className="relative group w-60 h-[22rem] overflow-hidden">
              <div
                className="absolute bottom-0 w-full flex flex-col items-center justify-center cursor-pointer rounded-2xl bg-transparent bg-opacity-20 backdrop-blur-md border border-rose-800 transition-all duration-300 ease-in-out group-hover:-translate-y-4"
                style={{
                  height: prize.baseHeight,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                {prize.icon}
                <h3 className="mt-4 text-2xl font-orbitron text-rose-300 glitch">
                  {prize.place}
                </h3>
                <p className="mt-2 text-lg font-semibold text-rose-500">
                  {prize.amount}
                </p>
              </div>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};
