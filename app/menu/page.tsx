'use client'
import { useState, useEffect } from 'react';
import { Leaf, ShoppingBag, Zap, Flame, Calendar, Star, StarHalf, Activity, Droplets, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


interface DailySpecial {
  day: string;
  item: string;
}

interface MenuItem {
  name: string;
  price?: string; 
  prices?: Record<string, string>; 
  desc: string;
  extra?: string;
  options?: boolean;
}

export default function MoreLifeMenu() {
  
  const menuData: Record<string, MenuItem[]> = {
    'Entrées': [
      { name: "Vegan Brown Stew Chicken", prices: { Large: "$25.00", Medium: "$20.00" }, desc: "Plant-based vegan chicken simmered in savory browning sauce.", options: true },
      { name: "Vegan Curry Chicken", prices: { Large: "$25.00", Medium: "$20.00" }, desc: "Bold Jamaican curry spices with plant-based protein.", options: true },
      { name: "Brown Stew Tofu", prices: { Large: "$25.00", Medium: "$20.00" }, desc: "Crispy tofu chunks in a traditional Jamaican stew.", options: true },
      { name: "Vegan Brownstew Fish", prices: { Large: "$25.00", Medium: "$20.00" }, desc: "Authentic sea-inspired plant protein with deep island flavors.", options: true },
      { name: "Tofu Stir Fry", prices: { Large: "$25.00", Medium: "$20.00" }, desc: "Wok-seared tofu with seasonal garden vegetables.", options: true },
    ],
    'Wraps & Patties': [
      { name: "Vegan Chicken Caesar Wrap", price: "$15.00", extra: "With Fries $23", desc: "Classic caesar flavors, 100% plant-based." },
      { name: "Vegan Fish Wrap", price: "$15.00", extra: "With Fries $23", desc: "Crispy vegan fish with fresh greens and dressing." },
      { name: "Chickpea & Lentil Wrap", price: "$12.00", extra: "With Fries $20", desc: "High-protein legume blend with signature spices." },
      { name: "Spinach Patty", price: "$4.00", desc: "Flaky Jamaican crust filled with seasoned spinach." },
      { name: "Veggie Patty", price: "$4.00", desc: "Traditional vegetable filling in a golden crust." },
    ],
    'Soups & Stews': [
      { name: "Vegetable Soup", prices: { Large: "$20.00", Small: "$10.00" }, desc: "A nourishing blend of fresh seasonal vegetables." },
      { name: "Lentil Soup", prices: { Large: "$20.00", Small: "$10.00" }, desc: "Hearty lentils simmered with natural Jamaican herbs." },
      { name: "Ital Stew", prices: { Large: "$20.00", Small: "$10.00" }, desc: "Pure vitality. Root vegetables in a coconut milk base." },
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

  const [activeCategory, setActiveCategory] = useState<string>('Entrées');
  const [dailySpecial, setDailySpecial] = useState<DailySpecial | null>(null);

  const categories = ['Entrées', 'Wraps & Patties', 'Soups & Stews', 'Sides', 'Beverages'];

  const superfoods = [
    { name: "Callaloo", icon: <Activity className="text-green-500" />, benefit: "Blood Purifier", desc: "Iron-rich Jamaican staple for immune support." },
    { name: "Sea Moss", icon: <Droplets className="text-yellow-500" />, benefit: "92 Minerals", desc: "Supports thyroid health and deep hydration." },
    { name: "Ancient Grains", icon: <Zap className="text-red-600" />, benefit: "Clean Energy", desc: "Quinoa and Bulgar for slow-release fuel." },
    { name: "Ital Herbs", icon: <ShieldCheck className="text-yellow-500" />, benefit: "Gut Healing", desc: "Turmeric and Ginger anti-inflammatory base." }
  ];

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const specials = ["Soursop Boost", "Lentil Power", "Sea Moss Shake", "Ital Stew Special", "Brown Stew Fish", "Curry Platter", "Vitality Juice"];
    const now = new Date();
    const phillyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    setDailySpecial({ day: days[phillyTime.getDay()], item: specials[phillyTime.getDay()] });
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans pb-20">
      
     
      <header className="relative pt-32 pb-12 px-6 border-b-8 border-green-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-500 font-black uppercase tracking-[0.4em] text-xs">
              <Leaf size={16} /> Let Food Be Thy Medicine
            </div>
            <h1 className="text-8xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] skew-x-[-10deg]">
              MORE <span className="text-yellow-500">FLAVOR</span>
            </h1>
          </div>
          {dailySpecial && (
            <div className="bg-red-600 p-6 skew-x-[-5deg] border-l-4 border-yellow-500 shadow-xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-white/80 flex items-center gap-2">
                <Calendar size={12}/> {dailySpecial.day} Special
              </p>
              <p className="text-xl font-black uppercase italic">{dailySpecial.item}</p>
            </div>
          )}
        </div>
      </header>

    
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4">
        <div className="flex text-yellow-500">
          {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          <StarHalf size={14} fill="currentColor" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">4.7 / 5 on Google Reviews</span>
      </div>

    
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar gap-8 py-6">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white/40 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </nav>

     
      <section className="max-w-5xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            {menuData[activeCategory]?.map((item, i) => (
              <div key={i} className="group border-b border-white/5 pb-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter group-hover:text-yellow-500 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex gap-4 items-center">
                    {item.prices ? (
                      Object.entries(item.prices).map(([size, price]) => (
                        <div key={size} className="flex flex-col items-end">
                          <span className="text-[10px] font-black uppercase text-white/30">{size}</span>
                          <span className="text-2xl font-black text-red-600">{price}</span>
                        </div>
                      ))
                    ) : (
                      <span className="text-2xl font-black text-red-600">{item.price}</span>
                    )}
                  </div>
                </div>
                
                <p className="text-white/50 font-bold uppercase text-xs tracking-widest mb-6 max-w-2xl leading-relaxed">
                  {item.desc} {item.extra && <span className="text-green-500 ml-2">// {item.extra}</span>}
                </p>

                {item.options && (
                  <div className="bg-zinc-900/50 p-4 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4 skew-x-[-1deg]">
                    <div>
                      <span className="text-[9px] font-black uppercase text-yellow-500 tracking-widest">Choose Your Grain</span>
                      <p className="text-[11px] font-bold opacity-60 uppercase mt-1 text-white">Quinoa, Bulgar, or Wild Rice & Peas</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase text-green-500 tracking-widest">Choose Your Greens</span>
                      <p className="text-[11px] font-bold opacity-60 uppercase mt-1 text-white">Steamed Veggies or Callaloo (+ Air Fried Plantain)</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 py-24 bg-zinc-900/30 border-y border-white/5">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">Healing <span className="text-green-500">Index</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {superfoods.map((food, i) => (
            <div key={i} className="p-6 border border-white/10 space-y-4">
              <div className="w-10 h-10 bg-black flex items-center justify-center border border-white/10">{food.icon}</div>
              <h4 className="font-black uppercase text-lg italic text-yellow-500">{food.name}</h4>
              <p className="text-[10px] font-bold uppercase opacity-50 leading-relaxed">{food.desc}</p>
            </div>
          ))}
        </div>
      </section>

    
      <footer className="max-w-7xl mx-auto px-6 mt-12">
        <a href="https://www.ubereats.com/store/more-life/_r_5YEzjQVyhQNrB93saiQ?srsltid=AfmBOorLbSmCmP4DJUfAd9u_cpg2FVXqN3Q2pjuu0WCTVuEmHnY9bi02" target="_blank"
           className="w-full bg-green-600 hover:bg-yellow-500 text-white hover:text-black p-10 flex flex-col md:flex-row items-center justify-between transition-all group">
          <div className="text-center md:text-left">
            <h4 className="text-5xl font-black uppercase italic tracking-tighter">Order Delivery</h4>
            <p className="font-black uppercase tracking-[0.3em] text-xs opacity-80">Available on UberEats Philadelphia</p>
          </div>
          <ShoppingBag size={48} className="group-hover:scale-110 transition-transform" />
        </a>
      </footer>
    </main>
  );
}
