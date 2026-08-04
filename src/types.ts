/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AppTab {
  Home = "home",
  Products = "products",
  Contact = "contact"
}

export interface SubcategoryItem {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
  iconName: string; // lucide icon identifier
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;    // matching Category.id
  subcategory: string; // matching Subcategory.id
  image: string;       // URL or inline custom SVG
  isCustomSvg?: boolean;
  features?: string[];
}
