import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Prizes } from "@/components/Prizes";
import Timeline from "@/components/Timeline";
import Tracks from "@/components/Tracks";
import Image from "next/image";
import Footer from "@/components/Footer";
import Collaborate from "@/components/Collaborate";
import FAQ from "@/components/FAQ";
import Sponsors from "@/components/Sponsors";
export default function Home() {
  return (
    <div className="bg-black flex flex-col gap-10">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Collaborate />
      <FAQ />
      <Footer />
    </div>
  );
}
