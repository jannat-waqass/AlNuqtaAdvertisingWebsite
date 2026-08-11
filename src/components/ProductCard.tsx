/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { Product } from "../types";
import { getWhatsappLink, WHATSAPP_NAME } from "../data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = getWhatsappLink(product.name);

  return (
    <div className="bg-white border border-neutral-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.06)] hover:border-emerald-200/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
      
{/* Product Image Box */}
<div className="relative aspect-4/3 bg-neutral-50 overflow-hidden shrink-0 border-b border-neutral-100/80">
  {/* Subtle hover zoom effect */}
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
    referrerPolicy="no-referrer"
  />

  {/* Modern decorative gradient on image hover */}
  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  {/* Logo watermark on top corner */}
  <img
    src="/icon.png"
    alt="Al Nuqta"
    className="absolute top-3 right-3 w-8 h-8 object-contain"
    referrerPolicy="no-referrer"
  />
</div>

      {/* Product Information Box */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-3">
          <h3 className="font-bold text-neutral-900 text-lg group-hover:text-emerald-600 transition-colors leading-snug font-display tracking-tight">
            {product.name}
          </h3>
          <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Core Spec Bullet Points */}
          {product.features && product.features.length > 0 && (
            <div className="pt-2 space-y-2">
              <p className="text-[9px] text-emerald-600 font-mono tracking-widest uppercase font-bold">
                Key Specifications:
              </p>
              <ul className="grid grid-cols-1 gap-1.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-600 leading-relaxed">
                    <Icons.Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Button: WhatsApp Inquiry Box */}
        <div className="pt-4 border-t border-neutral-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-[#0a0a0a] hover:bg-emerald-600 text-white text-[10px] tracking-widest uppercase font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-emerald-900/10 cursor-pointer"
          >
            <Icons.MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>

      </div>
    </div>
  );
}
