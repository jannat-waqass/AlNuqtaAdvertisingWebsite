/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Product } from "./types";

// WhatsApp info: Waqass Ahmad (+971 56 1700824)
export const WHATSAPP_NUMBER = "+971561700824";
export const WHATSAPP_NAME = "Waqass Ahmad";
export const COMPANY_EMAIL = "alnuqta.advertising@gmail.com";
export const COMPANY_PHONE = "+971503439839";
export const COMPANY_ADDRESS = "P.O. Box# 37057, Muwailih, Sharjah, United Arab Emirates";
export const WHATSAPP_LINK = "https://wa.me/971561700824";
export const COMPANY_MAP_LINK = "https://maps.app.goo.gl/Butb3DmKNvLFJ1iq6";

export function getWhatsappLink(productName: string): string {
  const message = `Hello Al Nuqta Advertising, I am interested in inquiring about "${productName}". Please provide me with more details and pricing.`;
  return `https://wa.me/971561700824?text=${encodeURIComponent(message)}`;
}

export const CATEGORIES: Category[] = [
  {
    id: "offset-printing",
    name: "Offset & Digital Printing",
    iconName: "Printer",
    subcategories: [
      { id: "business-cards", name: "Premium Business Cards",},
      { id: "letterheads", name: "Letterheads" },
      { id: "envelopes", name: "Envelopes" },
      { id: "product-tags", name: "Product Tags" },
      { id: "flyers", name: "Flyers" },
      { id: "brochures", name: "Brochures & Menus" },
      { id: "company-profile", name: "Company Profiles & Catalogues" },
      { id: "computer-paper-invoice", name: "Computer Paper Invoice" },
      { id: "bill-books", name: "Bill Books" },
      { id: "stickers", name: "Stickers" }
    ]
  },

   {
    id: "packaging",
    name: "Packaging",
    iconName: "Packaging",
    subcategories: [
      { id: "paper-cups", name: "Customized Paper Cups " },
      { id: "shopping-bags", name: "Craft Paper/ Art Paper Bags" },
      { id: "wrapping-paper", name: "SWrapping Paper" },
      { id: "food-box", name: "Food Boxes" },
    ]
  },

  {
    id: "stamps",
    name: "Stamps",
    iconName: "Stamps",
    subcategories: [
    ]
  }, 

  {
    id: "promotional-items",
    name: "Promotional Items & Gifts",
    iconName: "Gift",
    subcategories: [
      { id: "diaries", name: "Customized Diaries & Notebooks" },
      { id: "gadgets", name: "Gadgets & USBs" },
      { id: "badges", name: "Metal & Acrylic Name Badges" },
      { id: "acrylic", name: "Acrylic Displays & Table Tents" },
      { id: "promo-gifts", name: "Promotional Gift Sets" }
    ]
  },
  {
    id: "uniform",
    name: "Uniform",
    iconName: "Uniform",
    subcategories: [
      { id: "polo", name: "Polo T-Shirts" },
      { id: "round-neck", name: "Round Neck T-Shirts" },
      { id: "caps", name: "Caps" },
      { id: "aprons", name: "Aprons" },
      { id: "trousers", name: "Jeans/Trouser" },
      { id: "coverall", name: "Coverall" },
    ]
  },
  {
    id: "large-format-printing",
    name: "Large Format Printing",
    iconName: "Banner",
    subcategories: [
      { id: "vinyl-sticker-pc", name: "Vinyl Sticker Plotter Cut" },
      { id: "vinyl-sticker-lam  ", name: "Vinyl Sticker with Lamination" },
      { id: "roll-up", name: "Roll Up/ Pop Up Stands" },
      { id: "promotional-stand", name: "Promotional Stand" },
      { id: "vehicle-branding", name: "Vehicle Branding" },
      { id: "foam-board", name: "Foam Board/ Forex Board" },
      { id: "cnc-cutting", name: "CNC Cutting" },
      { id: "banner", name: "Banners" },
      { id: "poster", name: "Posters" }
    ]
  },
  {
    id: "acrylic-products",
    name: "Acrylic Products",
    iconName: "Display",
    subcategories: [
      { id: "acrylic-stand1", name: "A4 Acrylic Stand" },
      { id: "acrylic-stand2", name: "A5 Acrylic Stand" },
      { id: "price-display-stand", name: "Price Display Stand" },
      { id: "name-plate", name: "Name Plate" },
      { id: "spacer", name: "Spacer" }
    ]
  },
];

export const PRODUCTS: Product[] = [
  // --- OFFSET PRINTING ---
  {
    id: "matte-lamination",
    name: "Matte Lamination 350/400 gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "matte-lamination.jpg",
    features: ["Straight cut - 350/400 gsm", "4 colour printing on both sides", "Size - 9x5.5 cm", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "round-corner-spot",
    name: "Round Corner Spot UV Matt Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "rounded-corner-spot.png",
    features: ["Rounded Corner - 400gsm", "4 colour printing on both sides", "Matt Lamination & Spot UV", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "round-corner-matte",
    name: "Round Corner Matt Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "round-corner-matte.png",
    features: ["Rounded Corner - 400gsm", "4 colour printing on both sides", "Matt Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "round-corner-spotvelevet",
    name: "Round Corner Spot UV Velvet Lamination 760mic",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "round-corner-spotvelevet.png",
    features: ["Rounded Corner - Food Board - 300gsm (Back to Back Paste)", "4 colour printing on both sides", "Velvet Lamination and Spot UV", "Size - 9x5.5 cm", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "spot-matte",
    name: "Spot UV Matte Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "spot-matte.png",
    features: ["Straight Cut - 400gsm", "4 colour printing on both sides", "Matt Lamination and Spot UV", "Size - 9x5.5 cm", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "spot-goldfoil-velvet",
    name: "Rounded Corner Gold Foil Spot UV Velvet Lamination 760mic",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "spot-goldfoil-velvet.png",
    features: ["Rounded Corner - Food Board - 300gsm (Back to Back Paste)", "4 colour printing on both sides", "Velvet Lamination, Gold Foil and Spot UV", "Size - 9x5.5 cm", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "glossy-lamination",
    name: "Glossy Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "glossy-lamination.png",
    features: ["Straight Cut - 400gsm", "4 colour printing on both sides", "Glossy Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "rounded-glossy-lamination",
    name: "Rounded Corner Glossy Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "rounded-glossy-lamination.png",
    features: ["Rounded Corner - 400gsm", "4 colour printing on both sides", "Glossy Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "artpaper-nolamination",
    name: "Art Paper Without Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "artpaper-nolamination.png",
    features: ["Straight Cut - Art Paper - 400gsm", "4 colour printing on both sides", "No Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "goldfoil-mattlamination",
    name: "Gold Foil Matte Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "goldfoil-mattlamination.png",
    features: ["Straight Cut - 400gsm", "4 colour printing on both sides", "Matt Lamination and Gold Foil", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "rounded-petglossy-lamination",
    name: "Rounded Corner PET Glossy Lamination 760mic",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "rounded-petglossy-lamination.png",
    features: ["Rounded Corner - Art paper - 350gsm", "4 colour printing on both sides", "PET Glossy Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "custom-diecut",
    name: "Custom Die Cut Matt Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "custom-diecut.png",
    features: ["Die Cut - 400gsm", "4 colour printing on both sides", "Matt Lamination", "Custom Size", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "rounded-goldfoil-mattlamination",
    name: "Rounded Corner Gold Foil Matt Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "rounded-goldfoil-mattlamination.png",
    features: ["Rounded Corner - 400gsm", "4 colour printing on both sides", "Matt Lamination and Gold Foil", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "custom-diecut-spot",
    name: "Custom Die Cut Spot UV Matt Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "custom-diecut-spot.png",
    features: ["Die Cut - 400gsm", "4 colour printing on both sides", "Matt Lamination and Spot UV", "Custom Size", "Minimum Order - 1000pcs","Customized Designing"]
  },
  {
    id: "rounded-goldfoilpet-glossylamination",
    name: "Rounded Corner Gold Foil PET Glossy Lamination 760mic",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "rounded-goldfoilpet-glossylamination.png",
    features: ["Rounded Corner - Art Paper - 350gsm", "4 colour printing on both sides", "Gold Foil and PET Glossy Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "rounded-goldfoilUV-mattlamination",
    name: "Rounded Corner Gold Foil Spot UV Matte Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "rounded-goldfoilUV-mattlamination.png",
    features: ["Rounded Corner - 400gsm", "4 colour printing on both sides", "Gold Foil, Spot UV and Matt Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
   {
    id: "goldfoilspot-mattlamination",
    name: "Gold Foil Spot UV Matte Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "goldfoilspot-mattlamination.png",
    features: ["Straight Cut - 400gsm", "4 colour printing on both sides", "Gold Foil, Spot UV and MAtt Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
   {
    id: "customdiecut-goldfoil-spotuv",
    name: "Custom Die Cut Gold Foil Spot UV Matt Lamination 400gsm",
    category: "offset-printing",
    subcategory: "business-cards",
    image: "customdiecut-goldfoil-spotuv.png",
    features: ["Custom Die Cut - 400gsm", "4 colour printing on both sides", "Gold Foil, Spot UV and Matt Lamination", "Custom Size", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "letterheads",
    name: "Custom Letterheads (Wood Free Paper)",
    category: "offset-printing",
    subcategory: "letterheads",
    image: "letterheads.png",
    features: ["100 or 120 gsm Wood-Free Paper", "Sizes - A4, A5, A6", "4 colour 1 Side or 2 Sides Printing", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "envelopes",
    name: "Corporate Envelopes (Wood Free Paper)",
    category: "offset-printing",
    subcategory: "envelopes",
    image: "envelopes.png",
    features: ["100 or 120 gsm Wood Free Paper", "Sizes - DL, A4, A5", "4 Colour Front Side Printing Only", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "flyer-realsize",
    name: "Flyers Real Size (Glossy Paper)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "flyer-realsize.png",
    features: ["Paper stock - 115gsm, 135gsm, or 200gsm", "Glossy Paper", "4 Colour Printing on 1 Side or 2 Sides", "Sizes - A3, A4, A5, A6", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "flyer-dl",
    name: "Flyers DL (Glossy Paper)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "flyer-dl.png",
    features: ["Paper stock - 115gsm, 135gsm, or 200gsm", "Glossy Paper", "4 Colour Printing on 1 Side or 2 Sides", "Size - DL (1UPS)", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "flyer-realsize-woodfree",
    name: "Flyers Real Size (Wood Free Paper 100gsm)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "flyer-realsize-woodfree.png",
    features: ["Wood Free Paper - 100gsm", "4 Colour Printing on 1 Side or 2 Sides", "Sizes - A3, B3, A4, B4, A5, B5, A6, B6", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "flyer-dl-woodfree",
    name: "Flyers DL (Wood Free Paper 100gsm)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "flyer-dl-woodfree.png",
    features: ["Wood Free Paper - 100gsm", "4 Colour Printing on 1 Side or 2 Sides", "Size - DL(1UPS)", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "door-hanger",
    name: "Door Hanger Cane Design (Matt Lamination 350gsm)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "door-hanger.png",
    features: ["Art Paper with Matt Lamination - 350gsm", "4 Colour Printing on 2 Sides", "Size - 9.5x24 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "door-hanger-matt",
    name: "Door Hanger (Matt Lamination 350gsm)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "door-hanger-matt.png",
    features: ["Art Paper with Matt Lamination - 350gsm", "4 Colour Printing on 2 Sides", "Size - 12x28.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "door-hanger-rounded",
    name: "Door Hanger Rounded Corner Design (Matt Lamination 350gsm)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "door-hanger-rounded.png",
    features: ["Art Paper with Matt Lamination - 350gsm", "4 Colour Printing on 2 Sides", "Size - 12x28.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "door-hanger-butterfly",
    name: "Door Hanger Butterfly Design (Matt Lamination 350gsm)",
    category: "offset-printing",
    subcategory: "flyers",
    image: "door-hanger-butterfly.png",
    features: ["Art Paper with Matt Lamination - 350gsm", "4 Colour Printing on 2 Sides", "Size - 12x28.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "brochure-realsize",
    name: "Brochure Real Size (Glossy Paper)",
    category: "offset-printing",
    subcategory: "brochures",
    image: "brochure-realsize.png",
    features: ["Paper Stock - 115gsm or 135 gsm", "4 Colour Printing on Both Sides", "Folding", "Sizes - A3, B3, A4, B4", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "brochure-realsize-woodfree",
    name: "Brochure Real Size (Wood Free Paper)",
    category: "offset-printing",
    subcategory: "brochures",
    image: "brochure-realsize-woodfree.png",
    features: ["Wood Free Paper - 100 gsm", "4 Colour Printing on Both Sides", "Folding", "Sizes - A3, B3, A4, B4", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "menu-mattlam",
    name: "Menu (Matt Lamination 350gsm)",
    category: "offset-printing",
    subcategory: "brochures",
    image: "menu-mattlam.png",
    features: ["Art Paper - 350 gsm", "4 Colour Printing on Both Sides", "Matt Lamination", "Creasing & Folding", "Sizes - A3, A4, A5", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "menu-glossylam",
    name: "Menu (Glossy Lamination 350gsm)",
    category: "offset-printing",
    subcategory: "brochures",
    image: "menu-mattlam.png",
    features: ["Art Paper - 350 gsm", "4 Colour Printing on Both Sides", "Glossy Lamination", "Creasing & Folding", "Sizes - A3, A4, A5", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "sticker-glossy",
    name: "Sticker Glossy Lamination 80gsm",
    category: "offset-printing",
    subcategory: "stickers",
    image: "sticker-glossy.png",
    features: ["Straight Cut - 80gsm", "4 Colour Printing on 1 Side", "Glossy Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "diecut-sticker-glossy",
    name: "Custom Die Cut Sticker Glossy Lamination 80gsm",
    category: "offset-printing",
    subcategory: "stickers",
    image: "diecut-sticker-glossy.png",
    features: ["Die Cut - 80gsm", "4 Colour Printing on 1 Side", "Glossy Lamination", "Custom Size", "Minimum Order - 1000pcs", "Customized Designing"]
  }, 
  {
    id: "sticker-nolam",
    name: "Sticker Without Lamination",
    category: "offset-printing",
    subcategory: "stickers",
    image: "sticker-nolam.png",
    features: ["4 Colour Printing on 1 Side", "No Lamination", "Sizes - 8x12cm, 23x17cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },  
  { 
    id: "sticker-diecut-goldfoil",
    name: "Custom Die Cut Gold Foil Sticker Glossy Lamination 80gsm",
    category: "offset-printing",
    subcategory: "stickers",
    image: "sticker-diecut-goldfoil.png",
    features: ["4 Colour Printing on 1 Side", "Glossy Lamination", "Custom Size", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "goldfoil-glossy-sticker",
    name: "Gold Foil Sticker Glossy Lamination 80gsm",
    category: "offset-printing",
    subcategory: "stickers",
    image: "goldfoil-glossy-sticker.png",
    features: ["4 Colour Printing on 1 Side", "Glossy Lamination", "Size - 9x5.5 cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  

  // --- PACKAGING ---
  {
    id: "kraft-bag-white",
    name: "Kraft Shopping Bag (White)",
    category: "packaging",
    subcategory: "shopping-bags",
    image: "shopping-bags.png",
    features: ["Kraft Paper - 100gsm", "4 Colour Printing on 1 Side", "Price Depends on Size", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "kraft-bag-white-topfold",
    name: "Kraft Shopping Bag (White) Top Fold",
    category: "packaging",
    subcategory: "shopping-bags",
    image: "shopping-bags-2.png",
    features: ["Kraft Paper - 100gsm", "4 Colour Printing on 1 Side", "Price Depends on Size", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "kraft-bag-brown",
    name: "Kraft Shopping Bag (Brown Virgin)",
    category: "packaging",
    subcategory: "shopping-bags",
    image: "shopping-bags.png",
    features: ["Kraft Paper - 100gsm", "4 Colour Printing on 1 Side", "Price Depends on Size", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "kraft-bag-rec",
    name: "Kraft Shopping Bag (Brown Recycled)",
    category: "packaging",
    subcategory: "shopping-bags",
    image: "shopping-bags.png",
    features: ["Kraft Paper - 100gsm", "4 Colour Printing on 1 Side", "Price Depends on Size", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "kraft-bag-brown-topfold",
    name: "Kraft Shopping Bag (Brown Virgin) Top Fold",
    category: "packaging",
    subcategory: "shopping-bags",
    image: "shopping-bags-2.png",
    features: ["Kraft Paper - 100gsm", "4 Colour Printing on 1 Side", "Price Depends on Size", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "kraft-bag-brownrec-topfold",
    name: "Kraft Shopping Bag (Brown Recycled) Top Fold",
    category: "packaging",
    subcategory: "shopping-bags",
    image: "shopping-bags-2.png",
    features: ["Kraft Paper - 100gsm", "4 Colour Printing on 1 Side", "Price Depends on Size", "Minimum Order - 500pcs", "Customized Designing"]
  },
  {
    id: "simple-burger-box",
    name: "Simple Burger Box",
    category: "packaging",
    subcategory: "food-box",
    image: "burger-box.png",
    features: ["Food Board - 250gsm", "4 Colour Printing on 1 Side", "Size - 12.5x12.5x8cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "pearl-burger-box",
    name: "Pearl Burger Box",
    category: "packaging",
    subcategory: "food-box",
    image: "pearl-burger-box.png",
    features: ["Food Board - 250gsm", "4 Colour Printing on 1 Side", "Size - Small, Medium, Large", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "chicken-box-takeaway",
    name: "Fried Chicken Box (Takeaway)",
    category: "packaging",
    subcategory: "food-box",
    image: "chicken-box-takeaway.png",
    features: ["Food Board - 250gsm", "4 Colour Printing on 1 Side", "Size - 21.5x12x8cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "chicken-box-dine",
    name: "Fried Chicken Box (Dine-In)",
    category: "packaging",
    subcategory: "food-box",
    image: "chicken-box-dine.png",
    features: ["Food Board - 250gsm", "4 Colour Printing on 1 Side", "Size - 24x17x5cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "chicken-box-gable1",
    name: "Gable Box (Type 2)",
    category: "packaging",
    subcategory: "food-box",
    image: "gable-box1.png",
    features: ["Food Board - 350gsm", "4 Colour Printing on 1 Side", "Size - Small, Medium, Large", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "chicken-box-gable2",
    name: "Gable Box (Type 1)",
    category: "packaging",
    subcategory: "food-box",
    image: "gable-box2.png",
    features: ["Food Board - 350gsm", "4 Colour Printing on 1 Side", "Size - Small, Medium, Large", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "chicken-box-gable2",
    name: "Gable Box (Type 1)",
    category: "packaging",
    subcategory: "food-box",
    image: "gable-box2.png",
    features: ["Food Board - 350gsm", "4 Colour Printing on 1 Side", "Size - Small, Medium, Large", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "cone-fries",
    name: "Cone French Fries Box",
    category: "packaging",
    subcategory: "food-box",
    image: "cone-fries.png",
    features: ["Food Board - 250gsm", "4 Colour Printing on 1 Side", "Size - 7.5x7.5x11cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },
  {
    id: "fries-tray",
    name: "French Fries Tray",
    category: "packaging",
    subcategory: "food-box",
    image: "fries-tray.png",
    features: ["Food Board - 250gsm", "4 Colour Printing on 1 Side", "Size - 20x10x5cm", "Minimum Order - 1000pcs", "Customized Designing"]
  },  
];

export const SLIDES = [
  {
    title: "Innovative Printing & Branding Solutions",
    tag: "Offset & Digital",
    image: "slide1.png",
    accent: "text-emerald-400 border-emerald-400"
  },
  {
    title: "Premium Corporate Gifts & Giveaways",
    tag: "Corporate Gifts",
    image: "slide2.png",
    accent: "text-lime-400 border-lime-400"
  },
  {
    title: "Heavy Duty Large Format & Signage Displays",
    tag: "Exhibition Displays",
    image: "slide3.png",
    accent: "text-green-400 border-green-400"
  },
  {
    title: "Customized Corporate Apparel & Uniforms",
    tag: "Corporate Apparel",
    image: "slide4.png",
    accent: "text-emerald-500 border-emerald-500"
  }
];

export const SOCIAL_MEDIAS = [
  { name: "Instagram", icon: "Instagram", handle: "@alnuqta", url: "https://www.instagram.com/alnuqta.adv/" },
  { name: "Facebook", icon: "Facebook", handle: "Al Nuqta", url: "https://www.facebook.com/alnuqtaadvertising/" },
  { name: "TikTok", icon: "TikTok", handle: "@alnuqta", url: "https://tiktok.com/alnuqta.adv/" }
];
