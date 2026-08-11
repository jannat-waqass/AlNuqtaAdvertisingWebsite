/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AppTab } from "./types";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.Home);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFilterChange = (categoryId: string | null, subcategoryId?: string | null) => {
    setSelectedCategoryId(categoryId);
    setSelectedSubcategoryId(subcategoryId || null);
    // If a filter is explicitly selected, switch tab to Products to display matches immediately
    if (categoryId) {
      setActiveTab(AppTab.Products);
    }
  };

  const handleExploreProducts = () => {
    setSelectedCategoryId(null);
    setSelectedSubcategoryId(null);
    setSearchQuery("");
    setActiveTab(AppTab.Products);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col font-sans selection:bg-emerald-600 selection:text-white antialiased">
      {/* Top sticky Navbar containing Branding, Calligraphy logo, and Tabs */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onFilterChange={handleFilterChange}
      />

      {/* Main View Container */}
      <main className="flex-grow">
        {activeTab === AppTab.Home && (
          <div className="animate-fadeIn">
            {/* Carousel slider under navigation */}
            <Carousel />

            {/* About Us section below carousel */}
            <AboutUs onExploreProducts={handleExploreProducts} />

            {/* Quick Contact Highlight banner on homepage */}
            <div className="bg-neutral-900 border-y border-emerald-950 py-12 px-4 text-center">
              <div className="max-w-4xl mx-auto space-y-4">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest font-extrabold">
                  Instant Support 
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  Have a specific branding query or timeline constraint?
                </h3>
                <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto">
                  Chat directly with our Sales Manager for immediate quotes, custom sizes and best prices.
                </p>
                <div className="pt-2 flex justify-center gap-3 flex-wrap">
                  <a
                    href="https://wa.me/971561700824"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-6 rounded-lg text-xs md:text-sm flex items-center gap-2 transition-transform hover:scale-105"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === AppTab.Products && (
          <div className="animate-fadeIn">
            {/* Products & Services Page */}
            <ProductList
              selectedCategoryId={selectedCategoryId}
              selectedSubcategoryId={selectedSubcategoryId}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onFilterChange={handleFilterChange}
            />
          </div>
        )}

        {activeTab === AppTab.Contact && (
          <div className="animate-fadeIn">
            {/* Contact Us Page */}
            <ContactUs />
          </div>
        )}
      </main>

      {/* Persistent global Footer containing Location and Social Medias */}
      <Footer
        setActiveTab={setActiveTab}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
