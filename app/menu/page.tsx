'use client'
import { useState, useEffect, useMemo } from 'react';
import { Leaf, Calendar, Star, StarHalf, Activity, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Updated Interface to support string OR object pricing
interface MenuItemProps {
  name: string;
  price?: string | Record<string, string>; 
  desc?: string;
  popular?: boolean;
  extra?: string;
}

interface DailySpecial {
  day: string;
  item: string;
}

export default function MoreLifeMenu() {
  // 2. Move menuData ABOVE state to fix "used before defined" error
  const menuData: Record<string, MenuItemProps[]> = {
    'Entrées': [
      { name: "Vegan Brown Stew Chicken", price: { Large: "$25.00", Medium: "$20.00" }, desc: "Plant-based vegan chicken simmered in savory browning sauce.", popular: true },
      { name: "Vegan Curry Chicken", price: { Large: "$25.00", Medium: "$20.00" }, desc: "Bold Jamaican curry spices with plant-based protein.", popular: true },
      { name: "Brown Stew Tofu", price: { Large: "$25.00", Medium: "$20.00" }, desc: "Crispy tofu chunks in a traditional Jamaican stew." },
      { name: "Vegan Brownstew Fish", price: { Large: "$25.00", Medium: "$20.00" }, desc: "Authentic sea-inspired plant protein with deep island flavors." },
      { name: "Tofu Stir Fry", price: { Large: "$25.00", Medium: "$20.00" }, desc: "Wok-seared tofu with seasonal garden vegetables." },
    ],
    'Wraps & Patties': [
      { name: "Vegan Chicken Caesar Wrap", price: "$15.00", extra: "With Fries $23", desc: "Classic caesar flavors, 100% plant-based." },
      { name: "Vegan Fish Wrap", price: "$15.00", extra: "With Fries $23", desc: "Crispy vegan fish with fresh greens and dressing." },
      { name: "Chickpea & Lentil Wrap", price: "$12.00", extra: "With Fries $20", desc: "High-protein legume blend with signature spices." },
      { name: "Spinach Patty", price: "$4.00", desc: "Flaky Jamaican crust filled with seasoned spinach." },
      { name: "Veggie Patty", price: "$4.00", desc: "Traditional vegetable filling in a golden crust." },
    ],
    'Soups & Stews': [
      { name: "Vegetable Soup", price: { Large: "$20.00", Small: "$10.00" }, desc: "A nourishing blend of fresh seasonal vegetables." },
      { name: "Lentil Soup", price: { Large: "$20.00", Small: "$10.00" }, desc: "Hearty lentils simmered with natural Jamaican herbs." },
      { name: "Ital Stew", price: { Large: "$20.00", Small: "$10.00" }, desc: "Pure vitality. Root vegetables in a coconut milk base.", popular: true },
    ],
    'Sides': [
      { name: "Steamed Mixed Vegetables", price: "$8.00", desc: "Cabbage, carrot, cauliflower, and broccoli with natural spice." },
      { name: "Callaloo", price: "$8.00", desc: "The essential Jamaican green leafy superfood." },
      { name: "Sweet Potato Fries", price: "$8.00", desc: "Hand-cut and prepared for maximum crunch." },
      { name: "Air Fried Plantains", price: "$8.00", desc: "Sweet, ripe, and oil-free." },
      { name: "Rice Sides", price: "$8.00 - $10.00", desc: "Choose: Bulgar Grain, Quinoa ($10), or Wild Rice & Peas." },
    ],
    'Beverages': [
      { name: "Organic Smoothies & Protein Shake", price: "$8.00", desc: "Choose 2: Fruits, Greens, Nuts, or Grains for the perfect blend." },
    ]
  };

  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Entrées');
  const [dailySpecial, setDailySpecial] = useState<DailySpecial | null>(null);

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const specials = ["Soursop Boost", "Lentil Power", "Sea Moss Shake", "Ital Stew Special", "Brown Stew Fish", "Curry Platter", "Vitality Juice"];
    const now = new Date();
    const phillyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    setDailySpecial({ day: days[phillyTime.getDay()], item: specials[phillyTime.getDay()] });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* ... Header and Nav remain the same ... */}
      
      <section className="max-w-5xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {menuData[activeCategory].map((item, i) => (
              <div key={i} className="group border-b border-white/5 pb-10 mb-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter group-hover:text-yellow-500 transition-colors">
                    {item.name} {item.popular && <span className="text-xs bg-yellow-500 text-black px-2 py-1 not-italic ml-2">POPULAR</span>}
                  </h3>
                  
                  <div className="flex gap-4 items-center">
                    {/* 3. Logic to handle both price types */}
                    {typeof item.price === 'object' ? (
                      Object.entries(item.price).map(([size, p]) => (
                        <div key={size} className="flex flex-col items-end">
                          <span className="text-[10px] font-black uppercase text-white/30">{size}</span>
                          <span className="text-2xl font-black text-red-600">{p}</span>
                        </div>
                      ))
                    ) : (
                      <span className="text-2xl font-black text-red-600">{item.price}</span>
                    )}
                  </div>
                </div>
                {item.desc && <p className="text-white/60 mt-2 max-w-2xl">{item.desc}</p>}
                {item.extra && <p className="text-yellow-500 text-xs font-black mt-1 uppercase tracking-widest">{item.extra}</p>}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
