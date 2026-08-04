/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import * as Icons from "lucide-react";
import { AppTab, Category, Subcategory } from "../types";
import { CATEGORIES } from "../data";
// @ts-ignore

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  onFilterChange: (categoryId: string, subcategoryId?: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, onFilterChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategoryHover, setActiveCategoryHover] = useState<string | null>(CATEGORIES[0].id);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <Icons.HelpCircle className="w-4 h-4" />;
  };

  const handleCategoryClick = (catId: string) => {
    onFilterChange(catId);
    setActiveTab(AppTab.Products);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById("products-view-heading")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubcategoryClick = (catId: string, subId: string) => {
    onFilterChange(catId, subId);
    setActiveTab(AppTab.Products);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById("products-view-heading")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm font-sans text-neutral-800">
      {/* Top micro bar - Thinner & clean */}
      <div className="bg-neutral-50/80 text-neutral-600 py-1.5 px-4 md:px-6 text-[10px] md:text-[11px] font-mono border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer">
              <Icons.MapPin className="w-3 h-3 text-emerald-600" />
              Sharjah, UAE
            </span>
            <span className="text-neutral-300 hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer">
              <Icons.Mail className="w-3 h-3 text-emerald-600" />
              alnuqta.advertising@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/40 font-sans font-extrabold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider">
              Est. 2014
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Left Side: Brand Logo (Exact official image replica) */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none group py-1"
          onClick={() => {
            setActiveTab(AppTab.Home);
            setMobileMenuOpen(false);
          }}
        >
          <img
            src="/al_nuqta_logo.png"
            alt="Al Nuqta Logo"
            className="h-12 md:h-16 w-auto object-contain shrink-0 transform group-hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center: Desktop Menu Links */}
        <nav className="hidden md:flex items-center gap-12 text-[11px] lg:text-xs font-bold tracking-widest uppercase">
          <button
            onClick={() => setActiveTab(AppTab.Home)}
            className={`py-2 px-1 border-b-2 transition-all cursor-pointer font-sans ${
              activeTab === AppTab.Home
                ? "border-emerald-600 text-emerald-600 font-extrabold"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Home
          </button>

          {/* Our Products & Services Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setActiveTab(AppTab.Products);
              }}
              className={`py-2 px-1 flex items-center gap-1.5 border-b-2 transition-all cursor-pointer font-sans ${
                activeTab === AppTab.Products
                  ? "border-emerald-600 text-emerald-600 font-extrabold"
                  : "border-transparent text-neutral-500 hover:text-neutral-900"
              }`}
            >
              Our Products
              <Icons.ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Desktop Mega Dropdown */}
            {dropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[640px] bg-white border border-neutral-200/80 rounded-2xl shadow-xl p-0 grid grid-cols-12 overflow-hidden animate-fadeIn">
                {/* Left side: Categories list */}
                <div className="col-span-5 bg-neutral-50 border-r border-neutral-100 py-4 px-1.5">
                  <p className="text-[10px] text-emerald-600 font-mono tracking-widest uppercase px-3.5 pb-2 border-b border-neutral-200/30 mb-2 font-extrabold">
                    Categories
                  </p>
                  <div className="space-y-0.5">
                    {CATEGORIES.map((cat) => (
                      <div
                        key={cat.id}
                        onMouseEnter={() => setActiveCategoryHover(cat.id)}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between text-xs font-bold cursor-pointer transition-all ${
                          activeCategoryHover === cat.id
                            ? "bg-emerald-50 text-emerald-700 shadow-sm"
                            : "text-neutral-600 hover:bg-neutral-100/60 hover:text-neutral-900"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-emerald-600">{getIconComponent(cat.iconName)}</span>
                          <span className="font-semibold tracking-wide">{cat.name}</span>
                        </div>
                        <Icons.ChevronRight className={`w-3 h-3 transition-opacity ${activeCategoryHover === cat.id ? "opacity-100 text-emerald-600" : "opacity-30"}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side: Subcategories */}
                <div className="col-span-7 bg-white py-4 px-5 flex flex-col justify-between">
                  <div>
                    {CATEGORIES.map((cat) => {
                      if (cat.id !== activeCategoryHover) return null;
                      return (
                        <div key={cat.id} className="space-y-3">
                          <div className="border-b border-neutral-100 pb-2 flex items-center gap-2">
                            <span className="text-emerald-600">{getIconComponent(cat.iconName)}</span>
                            <h3 className="text-xs font-extrabold text-neutral-900 uppercase tracking-wider font-display">
                              {cat.name}
                            </h3>
                          </div>
                          <p className="text-[11px] text-neutral-400 leading-relaxed font-sans normal-case font-medium">
                            {cat.description}
                          </p>
                          <div className="grid grid-cols-1 gap-1.5 pt-1">
                            {cat.subcategories.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => handleSubcategoryClick(cat.id, sub.id)}
                                className="w-full text-left px-3 py-2 rounded-lg bg-neutral-50/50 hover:bg-emerald-50/60 hover:text-emerald-700 text-xs text-neutral-600 font-bold border border-neutral-200/30 hover:border-emerald-200/40 transition-all flex items-center justify-between group cursor-pointer font-sans normal-case"
                              >
                                <span>{sub.name}</span>
                                <Icons.ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all text-emerald-600" />
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-neutral-100 pt-3 mt-4 flex items-center justify-between text-[11px] text-neutral-400 font-mono normal-case">
                    <span>Select to filter list</span>
                    <button
                      onClick={() => {
                        if (activeCategoryHover) handleCategoryClick(activeCategoryHover);
                      }}
                      className="text-emerald-600 hover:text-emerald-500 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      View All
                      <Icons.ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setActiveTab(AppTab.Contact)}
            className={`py-2 px-1 border-b-2 transition-all cursor-pointer font-sans ${
              activeTab === AppTab.Contact
                ? "border-emerald-600 text-emerald-600 font-extrabold"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Side: Quick Action & Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/971561700824"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#0a0a0a] hover:bg-emerald-600 text-white text-[10px] font-extrabold py-2.5 px-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-emerald-900/10 tracking-widest uppercase font-sans cursor-pointer"
          >
            <Icons.MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
            WhatsApp Inquiry
          </a>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-700 hover:text-neutral-900 focus:outline-none p-2 rounded-xl hover:bg-neutral-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 p-4 space-y-4 animate-slideDown max-h-[85vh] overflow-y-auto shadow-inner">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setActiveTab(AppTab.Home);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2.5 px-4 rounded-xl text-xs font-bold flex items-center gap-2.5 ${
                activeTab === AppTab.Home ? "bg-emerald-50 text-emerald-700" : "text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              <Icons.Home className="w-4 h-4 text-emerald-600" />
              Home
            </button>

            <button
              onClick={() => {
                setActiveTab(AppTab.Contact);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2.5 px-4 rounded-xl text-xs font-bold flex items-center gap-2.5 ${
                activeTab === AppTab.Contact ? "bg-emerald-50 text-emerald-700" : "text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              <Icons.Mail className="w-4 h-4 text-emerald-600" />
              Contact Us
            </button>
          </div>

          <div className="border-t border-neutral-100 pt-3">
            <p className="text-[10px] text-emerald-600 font-mono tracking-widest uppercase mb-2 px-1 font-extrabold">
              Our Products &amp; Services
            </p>
            <div className="space-y-3">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-neutral-50/60 rounded-2xl p-3 border border-neutral-100">
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="w-full text-left text-xs font-extrabold text-neutral-800 flex items-center gap-2 mb-2"
                  >
                    <span className="text-emerald-600">{getIconComponent(cat.iconName)}</span>
                    <span>{cat.name}</span>
                  </button>
                  <div className="grid grid-cols-1 gap-1.5 pl-3 border-l border-emerald-500/30">
                    {cat.subcategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubcategoryClick(cat.id, sub.id)}
                        className="w-full text-left py-1.5 px-2 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg text-[11px] text-neutral-500 font-medium transition-all"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-100 pt-3">
            <a
              href="https://wa.me/971561700824"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-xs font-bold shadow-md tracking-wider uppercase"
            >
              <Icons.MessageSquare className="w-4 h-4 fill-current" />
              Contact Owner
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
