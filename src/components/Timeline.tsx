"use client";
import React, { useState } from "react";
import { Calendar, Code, Rocket, Trophy } from "lucide-react";

const timeline = [
  {
    title: "Registration Opens",
    icon: <Calendar className="w-6 h-6 text-pink-500" />,
    date: "April 10, 2025",
    desc: "Start forming your team and register early to reserve your slot!",
  },
  {
    title: "Coding Round",
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    date: "April 20, 2025",
    desc: "Coding kicks off. Solve real-world challenges over 36 hours.",
  },
  {
    title: "Idea Submission",
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    date: "April 22, 2025",
    desc: "Deploy, demo, and submit your projects before the deadline.",
  },
  {
    title: "Final Presentation",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    date: "April 25, 2025",
    desc: "Showcase your work to the judges and stand out!",
  },
];

const subtimeline = [
  {
    time: "08:30 AM - 09:00 AM",
    title: "Registration & Check-in",
    desc: "Participants arrive and complete the registration process.",
  },
  {
    time: "09:00 AM - 09:30 AM",
    title: "Inauguration Ceremony",
    desc: "Welcome speech and introduction to the event.",
  },
  {
    time: "09:30 AM - 10:00 AM",
    title: "Breakfast Break",
    desc: "Participants enjoy refreshments before starting the hackathon.",
  },
  {
    time: "10:00 AM - 12:30 PM",
    title: "Hacking Begins",
    desc: "Students move to labs and start working on their projects.",
  },
  {
    time: "12:30 PM - 01:30 PM",
    title: "Lunch Break",
    desc: "Networking and refreshments.",
  },
  {
    time: "01:30 PM - 03:00 PM",
    title: "Judgment Round",
    desc: "First level of shortlisting. Judges evaluate the ongoing projects.",
  },
  {
    time: "03:00 PM - 03:30 PM",
    title: "Short Break",
    desc: "Quick refreshment break before finalizing.",
  },
  {
    time: "03:30 PM - 04:00 PM",
    title: "Touchups to the Project",
    desc: "Final adjustments to the projects before submission.",
  },
  {
    time: "04:00 PM - 05:00 PM",
    title: "Closing Ceremony & Snacks",
    desc: "Winners announcements, closing remarks, and snacks for all participants.",
  },
];

const Timeline = () => {
  const isPresentationOpen = useState(false);
  return (
    <section
      id="schedule"
      className="relative   px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-8 sm:pb-12 md:pb-16 -mt-1"
    >
      <div
        className="absolute inset-0 bg-cover bg-top md:bg-center blur-sm "
        style={{ backgroundImage: "url('/timeline-back.png')" }}
      />
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-audiowide text-rose-700 glitch">
        Timeline
      </h2>

      <div className="relative z-10 mt-12 max-w-4xl mx-auto border-l border-pink-800/20 pl-6 space-y-10">
        {timeline.map((item, idx) => {
          const isPresentation = item.title === "Final Presentation";
          return (
            <div
              key={idx}
              className={`group relative transition-all duration-300 cursor-pointer`}
            >
              <div onClick={()=>{
                if(isPresentation){
                  
                }
              }} className="min-w-[300px] bg-white/5 hover:bg-white/20 transition-all ease-in-out backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6">
                <div className="text-pink-400 mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1 glitch">
                  {item.title}
                </h3>
                <p className="text-sm text-pink-200">{item.date}</p>
                <p className="text-gray-300 mt-3">{item.desc}</p>
              </div>

              {/* Subtimeline shown only on hover over Final Presentation */}
              {isPresentation &&isPresentationOpen && (
                <div className="max-h-0 overflow-hidden group-hover:max-h-[1200px] transition-all duration-700 ease-in-out">
                  <div className="mt-4 ml-4 pl-4 border-l-2 border-pink-500 space-y-4">
                    {subtimeline.map((sub, i) => (
                      <div
                        key={i}
                        className="bg-white/10 border border-white/10 rounded-lg p-4"
                      >
                        <p className="text-sm text-pink-300 font-bold">
                          {sub.time}
                        </p>
                        <h4 className="text-lg text-white">{sub.title}</h4>
                        <p className="text-sm text-gray-300">{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {/* Left timeline vertical bar */}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-pink-500/40 to-transparent animate-pulse blur-sm"></div>
      </div>
    </section>
  );
};

export default Timeline;
