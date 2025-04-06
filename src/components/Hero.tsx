"use client";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  LinkIcon,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { SocialIcon } from "./SocialIcon";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to April 26 of the current year
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`April 26, ${currentYear} 00:00:00`);

    // If the date has already passed this year, set it for next year
    if (targetDate < new Date()) {
      targetDate.setFullYear(currentYear + 1);
    }

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time units to always have two digits with proper typing
  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 grid-background"></div>
        <div className="grid-lines"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 ">
        <p className="text-9xl md:text-8xl font-bold mb-6 animate-pulse">
          <span className="text-transparent glitch bg-clip-text bg-gradient-to-r from-rose-300 to-pink-900">
            DEVON 2.0
          </span>
        </p>
        <p className="text-xl font-orbitron md:text-2xl tracking-widest mb-8 text-pink-300">
          Decode the Future | Build the Impossible
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black/40 border border-pink-800 flex items-center justify-center rounded-md backdrop-blur-sm">
              <span className="text-2xl font-orbitron text-pink-300">
                {formatTime(timeLeft.days)}
              </span>
            </div>
            <span className="text-xs mt-1 text-pink-400 font-orbitron">
              DAYS
            </span>
          </div>
          <div className="text-2xl text-pink-300 flex items-center">:</div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black/40 border border-pink-800 flex items-center justify-center rounded-md backdrop-blur-sm">
              <span className="text-2xl font-orbitron text-pink-300">
                {formatTime(timeLeft.hours)}
              </span>
            </div>
            <span className="text-xs mt-1 text-pink-400 font-orbitron">
              HOURS
            </span>
          </div>
          <div className="text-2xl text-pink-300 flex items-center">:</div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black/40 border border-pink-800 flex items-center justify-center rounded-md backdrop-blur-sm">
              <span className="text-2xl font-orbitron text-pink-300">
                {formatTime(timeLeft.minutes)}
              </span>
            </div>
            <span className="text-xs mt-1 text-pink-400 font-orbitron">
              MINUTES
            </span>
          </div>
          <div className="text-2xl text-pink-300 flex items-center">:</div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black/40 border border-pink-800 flex items-center justify-center rounded-md backdrop-blur-sm">
              <span className="text-2xl font-orbitron text-pink-300">
                {formatTime(timeLeft.seconds)}
              </span>
            </div>
            <span className="text-xs mt-1 text-pink-400 font-orbitron">
              SECONDS
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center gap-6 text-white">
        <SocialIcon
          href="https://gdg.community.dev/gdg-on-campus-gl-bajaj-institute-of-technology-and-management-greater-noida-india/"
          icon={<LinkIcon />}
        />
        <SocialIcon
          href="https://www.linkedin.com/company/dscglbajaj/posts/?feedView=all"
          icon={<LinkedinIcon />}
        />
        <SocialIcon href="https://twitter.com" icon={<TwitterIcon />} />
        <SocialIcon
          href="https://www.instagram.com/gdg_glbajaj/"
          icon={<InstagramIcon />}
        />
      </div>
    </div>
  );
};

export default Hero;
