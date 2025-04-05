import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'
import { SocialIcon } from './SocialIcon'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated Grid Background */}
    <div className="absolute inset-0 bg-black">
      <div className="absolute inset-0 grid-background"></div>
      <div className="grid-lines"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
    </div>

    {/* 3D Cube */}
    {/* <div className="absolute w-[150px] h-[150px] cube perspective-[1000px]">
      <div className="cube-face front bg-cyan-500/20 border border-cyan-500"></div>
      <div className="cube-face back bg-cyan-500/20 border border-cyan-500"></div>
      <div className="cube-face right bg-cyan-500/20 border border-cyan-500"></div>
      <div className="cube-face left bg-cyan-500/20 border border-cyan-500"></div>
      <div className="cube-face top bg-cyan-500/20 border border-cyan-500"></div>
      <div className="cube-face bottom bg-cyan-500/20 border border-cyan-500"></div>
    </div> */}

    {/* Hero Content */}
    <div className="relative z-10 text-center px-4 ">
      <p className="text-9xl  md:text-8xl font-bold mb-6 animate-pulse">
        <span className="text-transparent glitch bg-clip-text bg-gradient-to-r from-rose-300 to-pink-900">
          DEVON 2.0
        </span>
      </p>
      <p className="text-xl font-orbitron md:text-2xl tracking-widest mb-8 text-pink-300">
        Decode the Future | Build the Impossible
      </p>
    
      {/* <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="px-8 py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transform hover:scale-105 transition-all">
          Register Now
        </button>
        <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-bold rounded hover:bg-cyan-500/10 transform hover:scale-105 transition-all">
          Learn More
        </button>
      </div> */}
    </div>
    <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center gap-6 text-white">
    <SocialIcon href="https://github.com" icon={<GithubIcon />} />
    <SocialIcon href="https://linkedin.com" icon={<LinkedinIcon/>} />
    <SocialIcon href="https://twitter.com" icon={<TwitterIcon />} />
    <SocialIcon href="https://instagram.com" icon={<InstagramIcon/>} />
  </div>
    {/* Scroll Indicator */}
 

  {/* Features Section */}

  {/* Stats Section */}

</div>
  )
}

export default Hero