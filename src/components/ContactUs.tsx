/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import * as Icons from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, WHATSAPP_NAME, WHATSAPP_NUMBER } from "../data";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productCategory: "Offset Printing",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsappDraftLink = () => {
    const text = `Hi Al Nuqta Advertising, my name is ${formData.name}. I am inquiring about "${formData.productCategory}".\n\nMy Message: ${formData.message}\n\nMy Phone: ${formData.phone}\nMy Email: ${formData.email}`;
    return `https://wa.me/971561700824?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact-us-view" className="py-24 px-6 md:px-12 bg-white text-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-600 font-mono font-bold uppercase tracking-widest text-[10px] border border-emerald-500/20 py-1.5 px-4 inline-block rounded-md bg-emerald-50/80">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight font-display">
            Contact <span className="text-emerald-600">Al Nuqta</span> Today
          </h2>
          <p className="text-neutral-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Reach out to our sales team or visit our office in Sharjah. We deliver professional corporate branding across the entire UAE.
          </p>
        </div>

        {/* Contact Information Cards - 2x2 Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Box 1: WhatsApp (Black) */}
          <div className="bg-[#060806] rounded-2xl p-5 border border-neutral-900 flex gap-3.5 items-start shadow-xl shadow-neutral-100/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-950/20">
              <Icons.MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-extrabold text-emerald-400 font-display">Contact Us on Whatsapp</p>
              <p className="text-[11px] text-neutral-300 leading-relaxed">Direct consultations, corporate quotes &amp; custom printing inquiries</p>
              <a
                href="https://wa.me/971561700824"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1 hover:underline cursor-pointer"
              >
                Chat on WhatsApp
                <Icons.ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Box 2: Telephone Line (White) */}
          <div className="bg-[#fbfcfb] rounded-2xl p-5 border border-neutral-200/50 flex gap-3.5 items-start shadow-sm hover:border-neutral-300/60 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0">
              <Icons.PhoneCall className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-neutral-950 text-xs uppercase tracking-wider font-display">
                Telephone Line Support
              </h3>
              <p className="text-sm font-bold text-neutral-800">{COMPANY_PHONE}</p>
              <p className="text-[11px] text-neutral-500">Quick assistance for orders and shipment status</p>
              <a
                href="tel:+971503439839"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-800 pt-1 hover:underline cursor-pointer font-mono"
              >
                Call Secondary Line
                <Icons.ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Box 3: Email Inquiries (White) */}
          <div className="bg-[#fbfcfb] rounded-2xl p-5 border border-neutral-200/50 flex gap-3.5 items-start shadow-sm hover:border-neutral-300/60 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0">
              <Icons.Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-neutral-950 text-xs uppercase tracking-wider font-display">
                Email Submissions
              </h3>
              <p className="text-sm font-bold text-neutral-800">{COMPANY_EMAIL}</p>
              <p className="text-[11px] text-neutral-500">Send your high-res design artwork vector PDFs directly</p>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-800 pt-1 hover:underline cursor-pointer font-mono"
              >
                Send Email Message
                <Icons.ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Box 4: Office Address (Black) */}
          <div className="bg-[#060806] rounded-2xl p-5 border border-neutral-900 flex gap-3.5 items-start shadow-xl shadow-neutral-100/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-950/20">
              <Icons.MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-emerald-400 text-xs uppercase tracking-wider font-display">
                Corporate Office Address
              </h3>
              <p className="text-xs font-bold text-neutral-100 leading-relaxed">
                Muwailih Commercial, Sharjah, United Arab Emirates
              </p>
              <p className="text-[10px] text-neutral-500 font-mono">P.O. Box# 37057</p>
              <p className="text-[11px] text-neutral-400">Open: Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <a
                href="https://maps.google.com/?q=Muwailih,Sharjah,UAE"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1 hover:underline cursor-pointer font-mono"
              >
                Open in Google Maps
                <Icons.ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}