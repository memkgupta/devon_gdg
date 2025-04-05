"use client"
import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from "motion/react";
import { Spotlight } from './ui/spotlight-new';
const About = () => {
  return (
    <div className='bg-black'>
         
 
    <p className='text-center glitch text-7xl font-audiowide text-rose-700'>About</p>
    <section className="relative py-20 px-6 md:px-16 bg-black text-white">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Image or Graphic */}
    <div className="relative">
      <img 
        src="/about-illustration.svg" 
        alt="About DEVON Hackathon"
        className="w-full h-auto object-cover rounded-2xl shadow-lg"
      />
      {/* Optional: Glow or glitch effect */}
      <div className="absolute inset-0 bg-red-500 opacity-10 rounded-2xl blur-3xl z-[-1]" />
    </div>

    {/* Right: Text Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-cyber">About DEVON 2.0</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        DEVON 2.0 is not just a hackathon — it's a revolution. A 36-hour non-stop coding marathon
        where innovation meets impact. Whether you're a coding wizard or just starting out, this is 
        your stage to solve real-world problems, connect with brilliant minds, and build what matters.
      </p>

      {/* Optional: Timeline or badges */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">36 Hours</span>
        <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">Cash Prizes</span>
        <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">In-Person</span>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About