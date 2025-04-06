"use client";

import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <div className="relative w-full h-[150px] overflow-hidden">
      {/* Background Layers
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 grid-background z-10" />
      <div className="absolute inset-0 grid-lines z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-30" /> */}

      {/* Footer Content */}
      <nav className="w-full flex justify-between bg-black items-center p-4 h-full z-40 relative">
        <div className="flex items-center space-x-4">
          <Image
            src="/glb-logo.png"
            alt="College Logo"
            width={200}
            height={200}
          />
          <div className="text-lg">
            <div className="font-semibold text-white">
              G.L. Bajaj Institute of Technology & Management
            </div>
            <div className="text-white text-xs">
              Knowledge Park III, Greater Noida, Uttar Pradesh
            </div>
          </div>
        </div>
        <div
          className={`${orbitron.className} text-4xl text-rose-500 font-bold`}
        >
          DEVON 2.0
        </div>
      </nav>
    </div>
  );
}
