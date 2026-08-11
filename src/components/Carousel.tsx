/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { SLIDES } from "../data";

export default function Carousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="relative w-full h-[340px] md:h-[500px] lg:h-[560px] bg-[#050605] overflow-hidden group shadow-2xl border-b border-neutral-900">
      {/* Slides Wrapper */}
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image Overlay - refined gradient for superior readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/0 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-[8000ms] ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Slide Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto text-left">
            <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-md text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-4 bg-emerald-950/50 text-emerald-400 border border-emerald-800/30 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {slide.tag}
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-4xl drop-shadow-lg font-display tracking-tight">
              {slide.title}
            </h2>
            
            <div className="mt-6 md:mt-10 flex flex-wrap gap-3.5">
              
                <a href="https://wa.me/971561700824"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icons.MessageSquare className="w-4 h-4 fill-current" />
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Arrow Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-emerald-700/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 backdrop-blur-sm cursor-pointer"
        aria-label="Previous Slide"
      >
        <Icons.ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-emerald-700/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 backdrop-blur-sm cursor-pointer"
        aria-label="Next Slide"
      >
        <Icons.ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators / Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
              idx === currentIdx ? "bg-emerald-500 w-8" : "bg-white/20 hover:bg-white/40 w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}