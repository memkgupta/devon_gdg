import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import Tracks from "@/components/Tracks";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
    <Navbar/>
    <Hero/>
    <Tracks/>
    <Timeline/>
    <About/>
    </div>
  );
}
