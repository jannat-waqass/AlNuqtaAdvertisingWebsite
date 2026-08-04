/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { AppTab } from "../types";

interface AboutUsProps {
  onExploreProducts: () => void;
}

export default function AboutUs({ onExploreProducts }: AboutUsProps) {
  const facts = [
    { icon: "Calendar", value: "2014", label: "Established In" },
    { icon: "Truck", value: "UAE-Wide", label: "Delivery Coverage" },
    { icon: "Award", value: "Premium", label: "Quality Commitment" },
    { icon: "PhoneCall", value: "24/7", label: "Direct Support" }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Calendar": return <Icons.Calendar className="w-6 h-6 text-emerald-400" />;
      case "Truck": return <Icons.Truck className="w-6 h-6 text-emerald-400" />;
      case "Award": return <Icons.Award className="w-6 h-6 text-emerald-400" />;
      case "PhoneCall": return <Icons.PhoneCall className="w-6 h-6 text-emerald-400" />;
      default: return <Icons.CheckCircle className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="about-us-section" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#fcfdfc] to-[#f4f7f4] text-neutral-900 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-emerald-600 font-mono font-bold uppercase tracking-widest text-xs border-l-2 border-emerald-500 pl-3">
              Corporate Profile
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15] font-display">
              A Trusted Partner in UAE Branding Since <span className="text-emerald-600">2014</span>
            </h2>

            <p className="text-neutral-600 text-sm md:text-base leading-relaxed tracking-wide">
              Based in Sharjah, UAE, <span className="font-semibold text-neutral-950">Al Nuqta Advertising &amp; Gift Trading</span> is a trusted provider of innovative advertising, branding, printing, and promotional solutions. We help businesses strengthen their brand identity through high-quality products and creative marketing solutions tailored to their needs.
            </p>

            <p className="text-neutral-600 text-sm md:text-base leading-relaxed tracking-wide">
              Our services include offset and digital printing, large-format printing, signage, corporate uniforms, promotional gift items, exhibition displays, and customized branding solutions. With a strong commitment to quality, competitive pricing, and timely delivery, we serve businesses of all sizes across the UAE. At Al Nuqta Advertising &amp; Gift Trading, our goal is to build lasting relationships with our clients by delivering professional services that enhance brand visibility and leave a lasting impression.
            </p>

            {/* Quick CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onExploreProducts}
                className="bg-neutral-950 hover:bg-neutral-900 text-white font-bold py-3.5 px-6 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 shadow-md flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer font-sans"
              >
                Browse Catalog
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
              
              <a  href="https://wa.me/971561700824"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-xs tracking-widest uppercase transition-all duration-300 shadow-md flex items-center gap-2 hover:-translate-y-0.5 font-sans"
              >
                <Icons.MessageSquare className="w-4 h-4 fill-current" />
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200/60">
              <img
                src="/items.png"
                alt="Al Nuqta Advertising & Gift Trading workshop"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
          </div>

        </div>

        {/* Key Facts Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3 p-7 bg-white rounded-2xl border border-neutral-200/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)] hover:border-emerald-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center shadow-sm">
                {getIcon(fact.icon)}
              </div>
              <p className="text-xl md:text-2xl font-extrabold text-neutral-950 font-mono tracking-tight">
                {fact.value}
              </p>
              <p className="text-[10px] text-neutral-600 font-bold tracking-widest uppercase">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
        </div>
        
    </section>
  );
}