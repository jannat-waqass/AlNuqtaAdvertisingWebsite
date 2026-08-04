/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { AppTab } from "../types";
import { SOCIAL_MEDIAS, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, WHATSAPP_LINK, COMPANY_MAP_LINK } from "../data";
// @ts-ignore

interface FooterProps {
  setActiveTab: (tab: AppTab) => void;
  onFilterChange: (categoryId: string | null) => void;
}

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-emerald-400">
    <path d="M16.6 5.82c-1-.98-1.6-2.32-1.6-3.82h-3.4v14.2c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.3 0 .58.05.85.13V9.98c-.28-.04-.56-.06-.85-.06-3.5 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3 6.3-2.8 6.3-6.3V9.05c1.3 1 2.9 1.6 4.6 1.6V7.2c-1 0-1.9-.4-2.9-1.38z"/>
  </svg>
);

export default function Footer({ setActiveTab, onFilterChange }: FooterProps) {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Instagram": return <Icons.Instagram className="w-5 h-5 text-emerald-400" />;
      case "Facebook": return <Icons.Facebook className="w-5 h-5 text-emerald-400" />;
      case "TikTok": return <TikTokIcon />;
      default: return <Icons.Share2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <footer className="bg-[#060806] text-white border-t border-neutral-900/40 pt-16 pb-10 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-15 h-15 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-neutral-800/60 shadow-lg">
            <img src="/icon.png" alt="Al Nuqta Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        <div>
          <h3 className="font-extrabold text-sm tracking-widest text-white uppercase font-display">Al Nuqta</h3>
          <p className="text-[9px] text-emerald-400 font-mono tracking-widest uppercase font-bold">Advertising &amp; Gift Trading</p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Follow Us — Instagram, Facebook, TikTok ONLY */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-[10px] uppercase tracking-widest text-emerald-400 border-b border-neutral-800/40 pb-2 font-mono">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {SOCIAL_MEDIAS.map((media, idx) => (
                
                <a key={idx}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#0d0f0d] hover:bg-[#121612] border border-neutral-900 hover:border-emerald-900/20 transition-all"
                  aria-label={media.name}
                >
                  {getSocialIcon(media.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact — email, phone, WhatsApp */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-[10px] uppercase tracking-widest text-emerald-400 border-b border-neutral-800/40 pb-2 font-mono">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-neutral-300">
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Icons.Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {COMPANY_EMAIL}
              </a>
              <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Icons.PhoneCall className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {COMPANY_PHONE}
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Icons.MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Location — address + map link */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-[10px] uppercase tracking-widest text-emerald-400 border-b border-neutral-800/40 pb-2 font-mono">
              Location
            </h4>
            
            <a
            href={COMPANY_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-xs text-neutral-300 hover:text-emerald-400 transition-colors"
            >
              <Icons.MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              {COMPANY_ADDRESS}
            </a>
          </div>

        </div>

        <div className="border-t border-neutral-900/60 pt-6 text-center text-[10px] text-neutral-600 font-mono">
          © 2026 Al Nuqta Advertising &amp; Gift Trading. All rights reserved.
        </div>

      </div>
    </footer>
  );
}