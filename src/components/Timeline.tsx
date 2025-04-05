import React from 'react'
import { Calendar, Code, Rocket, Trophy } from 'lucide-react';

const timeline = [
  {
    title: 'Registration Opens',
    icon: <Calendar className="w-6 h-6 text-pink-500" />,
    date: 'April 10, 2025',
    desc: 'Start forming your team and register early to reserve your slot!',
  },
  {
    title: 'Hackathon Begins',
    icon: <Code className="w-6 h-6 text-cyan-400" />,
    date: 'April 20, 2025',
    desc: 'Coding kicks off. Solve real-world challenges over 36 hours.',
  },
  {
    title: 'Project Submission',
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    date: 'April 22, 2025',
    desc: 'Deploy, demo, and submit your projects before the deadline.',
  },
  {
    title: 'Judging & Results',
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    date: 'April 25, 2025',
    desc: 'Winners will be announced after jury evaluation and feedback.',
  },
];
const Timeline = () => {
  return (
    <section className="relative bg-black text-white py-16 px-4 sm:px-8 timeline-bg">
    <div
    className="absolute inset-0 bg-cover bg-center blur-lg"
    style={{ backgroundImage: "url('/timeline-back.png')" }}
  >
    {/* Fake "opacity" by layering with a translucent dark overlay */}
    {/* <div className="absolute inset-0 bg-black/85"></div> */}
  </div>
      <h2 className="relative inset-0  text-7xl text-rose-700 font-audiowide glitch text-center mb-12 tracking-widest neon-text">Timeline</h2>
      <div className=" inset-0 mt-12 max-w-4xl mx-auto relative border-l border-pink-800/20 pl-6 space-y-10">

      
{timeline.map((item, idx) => (
      <div key={idx} className="min-w-[300px] bg-white/5 hover:bg-white/30 transition-all ease-in-out duration-300 delay-75 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6">
        <div className="text-pink-400 mb-2">{item.icon}</div>
        <h3 className="text-xl font-bold text-white mb-1 glitch">{item.title}</h3>
        <p className="text-sm text-pink-200">{item.date}</p>
        <p className="text-gray-300 mt-3">{item.desc}</p>
      </div>
    ))}
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-pink-500/40 to-transparent animate-pulse blur-sm"></div>
      </div>
    </section>
  )
}

export default Timeline