/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react";
import * as Icons from "lucide-react";
import { Category, Product, Subcategory } from "../types";
import { CATEGORIES, PRODUCTS } from "../data";
import ProductCard from "./ProductCard";

interface ProductListProps {
  selectedCategoryId: string | null;
  selectedSubcategoryId: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onFilterChange: (categoryId: string | null, subcategoryId?: string | null) => void;
}

export default function ProductList({
  selectedCategoryId,
  selectedSubcategoryId,
  searchQuery,
  setSearchQuery,
  onFilterChange
}: ProductListProps) {
  
  // Filter products based on selections
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategoryId && product.category !== selectedCategoryId) {
        return false;
      }
      // Subcategory filter
      if (selectedSubcategoryId && product.subcategory !== selectedSubcategoryId) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesSubcategory = product.subcategory.toLowerCase().includes(query);
        const matchesFeatures = product.features?.some(f => f.toLowerCase().includes(query)) || false;
        
        return matchesName || matchesDesc || matchesCategory || matchesSubcategory || matchesFeatures;
      }
      return true;
    });
  }, [selectedCategoryId, selectedSubcategoryId, searchQuery]);

  const activeCategory = useMemo(() => {
    return CATEGORIES.find(c => c.id === selectedCategoryId) || null;
  }, [selectedCategoryId]);

  const activeSubcategory = useMemo(() => {
    if (!activeCategory || !selectedSubcategoryId) return null;
    return activeCategory.subcategories.find(s => s.id === selectedSubcategoryId) || null;
  }, [activeCategory, selectedSubcategoryId]);

  const handleClearFilters = () => {
    onFilterChange(null, null);
    setSearchQuery("");
  };

  return (
    <section id="products-view-heading" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f4f7f4] to-[#fcfdfc] text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar Block */}
        <div className="bg-white p-4 rounded-2xl border border-neutral-200/60 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.03)] max-w-3xl mx-auto mb-14 flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <Icons.Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products (e.g. business cards, shirts, stamps)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 text-neutral-900 placeholder-neutral-400 pl-11 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/10 text-sm font-medium transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600 cursor-pointer"
              >
                <Icons.X className="w-4 h-4" />
              </button>
            )}
          </div>
          {(selectedCategoryId || selectedSubcategoryId || searchQuery) && (
            <button
              onClick={handleClearFilters}
              className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold py-3 px-5 rounded-xl border border-neutral-200 flex items-center justify-center gap-2 transition-all cursor-pointer font-mono"
            >
              <Icons.RotateCcw className="w-4 h-4" />
              Reset Filters
            </button>
          )}
        </div>

        {/* Layout Grid: Sidebar Filters + Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sidebar (Desktop Filter Accordion) */}
          <div className="space-y-6 hidden lg:block">
            <div className="bg-white rounded-2xl border border-neutral-200/60 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100">
                <h3 className="font-extrabold text-neutral-950 text-[11px] uppercase tracking-widest font-display">
                  Filter Categories
                </h3>
                <Icons.SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              </div>

              {/* Reset Category Link */}
              <button
                onClick={() => onFilterChange(null)}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategoryId === null
                    ? "bg-emerald-900 text-white shadow-sm font-bold border border-emerald-800/10"
                    : "text-neutral-600 hover:bg-neutral-50 border border-transparent"
                }`}
              >
                All Categories ({PRODUCTS.length})
              </button>

              {/* Dynamic Accordion list */}
              <div className="space-y-2 pt-1">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategoryId === cat.id;
                  const count = PRODUCTS.filter(p => p.category === cat.id).length;

                  return (
                    <div key={cat.id} className="space-y-1">
                      <button
                        onClick={() => onFilterChange(cat.id)}
                        className={`w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "bg-emerald-900 text-white shadow border border-emerald-800/25"
                            : "text-neutral-600 hover:bg-neutral-50 border border-transparent"
                        }`}
                      >
                        <span className="truncate">{cat.name} ({count})</span>
                        <Icons.ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected ? "rotate-90" : ""}`} />
                      </button>

                      {/* Side-subcategories list inside sidebar */}
                      {isSelected && (
                        <div className="pl-3.5 py-1.5 space-y-1.5 border-l-2 border-emerald-600 animate-fadeIn ml-2 mt-1">
                          {cat.subcategories.map((sub) => {
                            const subCount = PRODUCTS.filter(p => p.subcategory === sub.id).length;
                            const isSubSelected = selectedSubcategoryId === sub.id;

                            return (
                              <button
                                key={sub.id}
                                onClick={() => onFilterChange(cat.id, sub.id)}
                                className={`w-full text-left py-1.5 px-2.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                                  isSubSelected
                                    ? "bg-emerald-50 text-emerald-900 font-bold"
                                    : "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"
                                }`}
                              >
                                {sub.name} ({subCount})
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Categories Quick Scroll Row */}
          <div className="lg:hidden w-full overflow-x-auto pb-4 -mx-4 px-4 flex gap-2 scrollbar-none">
            <button
              onClick={() => onFilterChange(null)}
              className={`shrink-0 py-2.5 px-5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                selectedCategoryId === null
                  ? "bg-emerald-900 text-white border-emerald-800 shadow"
                  : "bg-white text-neutral-600 border-neutral-200"
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onFilterChange(cat.id)}
                className={`shrink-0 py-2.5 px-5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  selectedCategoryId === cat.id
                    ? "bg-emerald-900 text-white border-emerald-800 shadow"
                    : "bg-white text-neutral-600 border-neutral-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile subcategory badges row */}
          {selectedCategoryId && activeCategory && (
            <div className="lg:hidden w-full overflow-x-auto pb-4 flex gap-1.5 scrollbar-none">
              <button
                onClick={() => onFilterChange(selectedCategoryId, null)}
                className={`shrink-0 py-2 px-4 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                  selectedSubcategoryId === null
                    ? "bg-emerald-50 text-emerald-900 border-emerald-100"
                    : "bg-white text-neutral-500 border-neutral-200"
                }`}
              >
                All {activeCategory.name}
              </button>
              {activeCategory.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onFilterChange(selectedCategoryId, sub.id)}
                  className={`shrink-0 py-2 px-4 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                    selectedSubcategoryId === sub.id
                      ? "bg-emerald-50 text-emerald-900 border-emerald-100"
                      : "bg-white text-neutral-500 border-neutral-200"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          )}

          {/* Products Content Area */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Filter Result Label */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div className="space-y-1">
                <h3 className="font-extrabold text-neutral-950 text-lg flex items-center gap-2.5 font-display">
                  <Icons.Layers className="w-5 h-5 text-emerald-600" />
                  {activeCategory ? activeCategory.name : "All Advertising Products"}
                  {activeSubcategory && (
                    <span className="text-[10px] text-neutral-500 bg-neutral-200/60 border border-neutral-300/20 font-mono py-0.5 px-2.5 rounded-full font-bold uppercase">
                      {activeSubcategory.name}
                    </span>
                  )}
                </h3>
              </div>
            </div>  

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="h-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              /* Empty state / Search fallback */
              <div className="bg-white border border-neutral-200/60 rounded-3xl p-12 text-center space-y-6 shadow-sm">
                <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mx-auto border border-neutral-100">
                  <Icons.SearchX className="w-8 h-8 text-neutral-400" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-neutral-950 text-xl font-display">
                    No Matching Products Found
                  </h4>
                  <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
                    We might still provide this solution! Al Nuqta Advertising supplies thousands of customizable corporate branding solutions tailored to client specifications.
                  </p>
                </div>
                <div className="flex justify-center gap-3.5 flex-wrap pt-2">
                  <button
                    onClick={handleClearFilters}
                    className="py-3 px-6 bg-neutral-950 hover:bg-neutral-900 text-white text-xs font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer font-sans tracking-wider uppercase"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
