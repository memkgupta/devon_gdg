"use client";

import Image from "next/image";
import { Orbitron } from "next/font/google";
import { IoMdMail } from "react-icons/io";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <div className="relative w-full min-h-[180px] overflow-hidden">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 grid-background z-10" />
      <div className="absolute inset-0 grid-lines z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-30" />

      {/* Footer Content */}
      <nav className="w-full flex flex-col md:flex-row md:justify-between md:items-center bg-transparent p-4 h-full z-40 relative gap-6 md:gap-0">
        {/* Logo */}
        <p className={`${orbitron.className} text-3xl sm:text-4xl text-rose-500 font-bold text-center md:text-left`}>
          DEVON 2.0
        </p>

        {/* College Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-center sm:text-left">
            <div className="font-semibold text-white text-sm sm:text-base">
              G.L. Bajaj Institute of Technology & Management
            </div>
            <div className="text-white text-xs sm:text-sm">
              Knowledge Park III, Greater Noida, Uttar Pradesh
            </div>
          </div>
          <div className="relative">
            <Image
              src="/glb-logo-badge.png"
              alt="College Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="absolute h-2 w-8 bg-white right-6 bottom-[15px] -z-1"></span>
          </div>
        </div>

        {/* Spacer for future content (can be removed if unused) */}
        <div className="hidden md:flex flex-col items-center justify-start gap-5">
          <p className="text-3xl text-white">x</p>
        </div>

        {/* GDG Info */}
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-right">
          <Image
            src="/gdg.png"
            alt="GDG Logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <div>
            <h2 className="font-bold text-white text-sm sm:text-base">
              Google Developers Group GLBITM
            </h2>
            <h3 className="text-white text-xs sm:text-sm">Dr. Payal Garg - Faculty Head</h3>
            <h3 className="text-white text-xs sm:text-sm">Mahak Sharma - GDG Lead</h3>
            <h3 className="flex items-center justify-center sm:justify-end gap-1 text-white text-xs sm:text-sm">
              <IoMdMail size="18px" />:{" "}
              <a
                href="mailto:gdsc@glbitm.ac.in"
                className="text-rose-500 font-normal underline underline-offset-2"
              >
                gdsc@glbitm.ac.in
              </a>
            </h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
