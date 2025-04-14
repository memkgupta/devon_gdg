import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { Trophy, Award, Star } from "lucide-react";

const prizeData = [
  {
    place: "3rd Prize",
    icon: <Star className="text-yellow-500" />,
    amount: "₹10,000",
    description: "Recognition for innovative solutions and creative thinking",
    color: "from-amber-500/20 to-yellow-600/30",
    borderColor: "border-yellow-700",
  },
  {
    place: "1st Prize",
    icon: <Trophy className="text-yellow-400" />,
    amount: "₹30,000",
    description: "The grand prize for outstanding achievement and excellence",
    color: "from-yellow-400/20 to-amber-700/30",
    borderColor: "border-yellow-500",
  },
  {
    place: "2nd Prize",
    icon: <Award className="text-yellow-300" />,
    amount: "₹20,000",
    description: "Awarded for exceptional performance and technical brilliance",
    color: "from-yellow-300/20 to-amber-600/30",
    borderColor: "border-yellow-600",
  },
];

export const Prizes = () => {
  return (
    <div
      id="prizes"
      className="relative   px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-8 sm:pb-12 md:pb-16 -mt-1"
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/timeline-back.png')" }}
      />
      {/* Make sure the heading section has a high z-index */}
      <div className="relative z-10">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-audiowide text-rose-700 glitch">
          Prizes
        </h2>

        <p className="font-orbitron mt-3 md:mt-5 text-sm sm:text-base md:text-lg tracking-wide text-rose-400 text-center max-w-3xl mx-auto px-2 sm:px-4">
          Recognizing excellence with exciting rewards for the top performers!
        </p>
      </div>

      {/* Card container with improved responsive layout */}
      <div className="relative z-0 mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 justify-items-center">
        {prizeData.map((prize, idx) => (
          <CardSpotlight key={idx} className="w-full max-w-xs">
            <div className="relative group w-full h-64 sm:h-72 overflow-hidden rounded-2xl">
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${prize.color} opacity-20`}
              ></div>
              <div
                className={`absolute bottom-0 w-full h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-black/30 backdrop-blur-sm ${prize.borderColor} border transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-rose-700/20`}
              >
                <div className="mb-2 p-3 rounded-full bg-black/30 backdrop-blur-md">
                  {React.cloneElement(prize.icon, { 
                    size: idx === 1 ? 48 : idx === 2 ? 44 : 40 
                  })}
                </div>
                <h3 className="mt-3 text-xl sm:text-2xl font-orbitron text-rose-300 glitch text-center">
                  {prize.place}
                </h3>
                <p className="mt-2 text-base sm:text-lg md:text-xl font-bold text-rose-500">
                  {prize.amount}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-rose-300/80 text-center hidden group-hover:block transition-opacity duration-300">
                  {prize.description}
                </p>
              </div>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};