"use client";
import React, { useState } from "react";
import {
  Terminal,
  Code2,
  Cpu,
  Brain,
  Timer,
  Trophy,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-rose-500/20 font-orbitron">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-rose-700" />
            <a href="#hero" className="text-xl text-rose-700 font-bold">
              DEVON 2.0
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="nav-link text-rose-600 hover:text-rose-700 transition-colors"
            >
              About
            </a>
            <a
              href="#tracks"
              className="nav-link text-rose-600 hover:text-rose-700 transition-colors"
            >
              Tracks
            </a>
            <a
              href="#schedule"
              className="nav-link text-rose-600 hover:text-rose-700 transition-colors"
            >
              Timeline
            </a>
            <a
              href="#prizes"
              className="nav-link text-rose-600 hover:text-rose-700 transition-colors"
            >
              Prizes
            </a>
            <a
              href="#collaborate"
              className="nav-link text-rose-600 hover:text-rose-700 transition-colors"
            >
              Collaborate
            </a>
            <a
              href="#faq"
              className="nav-link text-rose-600 hover:text-rose-700 transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-rose-500/20 border border-rose-500 text-rose-400 rounded hover:bg-rose-500/30 transition-all">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-rose-500/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-rose-900" />
            ) : (
              <Menu className="w-6 h-6 text-rose-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            <a
              href="#"
              className="mobile-nav-link block text-rose-600 hover:text-rose-700 transition-colors py-2"
            >
              About
            </a>
            <a
              href="#"
              className="mobile-nav-link block text-rose-600 hover:text-rose-700 transition-colors py-2"
            >
              Schedule
            </a>
            <a
              href="#"
              className="mobile-nav-link block text-rose-600 hover:text-rose-700 transition-colors py-2"
            >
              Tracks
            </a>
            <a
              href="#"
              className="mobile-nav-link block text-rose-600 hover:text-rose-700 transition-colors py-2"
            >
              Sponsors
            </a>
            <a
              href="#"
              className="mobile-nav-link block text-rose-600 hover:text-rose-700 transition-colors py-2"
            >
              FAQ
            </a>
            <button className="w-full px-4 py-2 bg-rose-500/20 border border-rose-500 text-rose-400 rounded hover:bg-rose-500/30 transition-all">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
