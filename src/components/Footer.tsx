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
    <div className="relative w-full h-[150px] overflow-hidden">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 grid-background z-10" />
      <div className="absolute inset-0 grid-lines z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-30" />

      {/* Footer Content */}
      <nav className="w-full flex justify-between bg-transparent items-center p-4 h-full z-40 relative">
        <p className={`${orbitron.className} text-4xl text-rose-500 font-bold`}>
          DEVON 2.0
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="text-lg">
            <div className="font-semibold text-white">
              G.L. Bajaj Institute of Technology & Management
            </div>
            <div className="text-white text-xs">
              Knowledge Park III, Greater Noida, Uttar Pradesh
            </div>
          </div>
          <div className="relative">
            <Image
              src="/glb-logo-badge.png"
              alt="College Logo"
              width={100}
              height={100}
            />
            <span className="absolute h-2 w-9 bg-white right-8 bottom-[19px] -z-1"></span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-5">
          <p className="text-3xl">x</p>
        </div>
        <div className="flex gap-5 items-center">
          <span className="">
            <Image src="/gdg.png" alt="College Logo" width={100} height={100} />
          </span>
          <div className={`flex flex-col`}>
            <div>
              <h2 className="text-right font-bold">
                Google Developers Group GLBITM
              </h2>
              <h3 className="text-right">Dr. Payal Garg - Faculty Head</h3>
              <h3 className="text-right">Mahak Sharma - GDG Lead</h3>
              <h3 className="flex items-center justify-end gap-1">
                <IoMdMail size="18px" />:{" "}
                <a
                  href="mailto:gdsc@glbitm.ac.in"
                  className="text-rose-500 font-normal"
                >
                  gdsc@glbitm.ac.in
                </a>
              </h3>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
