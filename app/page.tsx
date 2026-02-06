'use client'
import {  Instagram, MapPin, Clock, Leaf, ShoppingBag, Music,  Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MoreLifeLanding() {
  
  const [isLiveOpen, setIsLiveOpen] = useState(false);


    useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const phillyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
      
      const hour = phillyTime.getHours();
      const minutes = phillyTime.getMinutes();
      
      
      const currentTimeDecimal = hour + (minutes / 60);
      
      setIsLiveOpen(currentTimeDecimal >= 10 && currentTimeDecimal < 21.5);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);


  

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500 selection:text-black">
      
     
      
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60 z-10" />
          <img 
            src="/food.png" 
            alt="Authentic Ital Food" 
            className="w-full h-full object-cover opacity-40 scale-110 animate-[pulse_8s_ease-in-out_infinite]"
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
            <span className={`h-2 w-2 rounded-full ${isLiveOpen ? 'bg-green-500 animate-pulse' : 'bg-red-600'}`} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {isLiveOpen ? "We are Cooking Now" : "Kitchen is Closed"}
            </span>
          </div>
          <h1 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] italic mb-6">
            MORE <br /><span className="text-yellow-500">LIFE</span>
          </h1>
          <p className="text-lg md:text-xl font-bold uppercase tracking-[0.4em] text-green-500 mb-12 max-w-2xl mx-auto">
            “Let your food be your medicine & your medicine be your food”
          </p>
          
        </div>
      </header>

     

      <section id="vibe" className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-600/20 blur-3xl rounded-full" />
          <div className="relative space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-red-600" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-red-600">Our Mission</span>
            </div>
            <h2 className="text-7xl font-black uppercase italic tracking-tighter leading-none">
              Ital <br /><span className="text-green-500">Vibration</span>
            </h2>
            <p className="text-xl opacity-70 leading-relaxed font-medium italic">
              "We cook and serve authentic Jamaican cuisine and make all-natural Ital juices. 
              We offer vegan food that nourishes the soul while operating as a conscious 
              community hub in the heart of Philly."
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-yellow-500 flex items-center justify-center group-hover:bg-yellow-500 transition-all">
                    <Music size={16} className="group-hover:text-black" />
                  </div>
                  <span className="font-black uppercase italic tracking-widest text-sm">Live Roots Music</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center group-hover:bg-green-600 transition-all">
                    <Leaf size={16} className="group-hover:text-black" />
                  </div>
                  <span className="font-black uppercase italic tracking-widest text-sm">100% Plant-Based Ital</span>
               </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            
          </div>
          <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-8 rounded-2xl rotate-3 hidden md:block">
            <p className="font-black text-3xl italic tracking-tighter">PHILLY'S BEST <br /> VEGAN SPOT</p>
          </div>
        </div>
      </section>

    
      <footer className="bg-zinc-950 border-t border-white/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h4 className="font-black uppercase italic text-yellow-500 text-2xl">Visit Us</h4>
            <p className="font-bold opacity-60 uppercase tracking-widest text-sm">
              2035 Church Ln<br />Philadelphia, PA 19138
            </p>
            <a href="tel:2673318696" className="block text-2xl font-black hover:text-green-500 transition-colors">
              (267) 331-8696
            </a>
          </div>
          <div className="space-y-6">
            <h4 className="font-black uppercase italic text-green-500 text-2xl">Hours</h4>
            <div className="text-xs font-black uppercase space-y-2 opacity-60">
              <p>Mon-Sun: 10AM - 9:30PM</p>
             
            </div>
          </div>
          <div className="space-y-6 lg:col-span-2">
            <h4 className="font-black uppercase italic text-red-600 text-2xl">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/liveirie.morelife" target='_blank' className="p-4 border border-white/10 hover:bg-red-600 transition-all">
                <Instagram />
              </a>
              <a href="https://www.ubereats.com/store/more-life/_r_5YEzjQVyhQNrB93saiQ?srsltid=AfmBOorLbSmCmP4DJUfAd9u_cpg2FVXqN3Q2pjuu0WCTVuEmHnY9bi02" target='_blank' className="p-4 border border-white/10 hover:bg-green-600 transition-all">
                <ShoppingBag />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-white/5 pt-12">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-20">
            More Life © {new Date().getFullYear()} • Roots • Culture • Ital
          </p>
        </div>
      </footer>
    </main>
  );
}
