'use client'
import { useState } from "react";
import {  Menu, X } from 'lucide-react';
 const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Smoothie Builder', href: '/builder' },
  { 
    name: 'UberEats', 
    href: 'https://www.ubereats.com/store/more-life/_r_5YEzjQVyhQNrB93saiQ?srsltid=AfmBOorLbSmCmP4DJUfAd9u_cpg2FVXqN3Q2pjuu0WCTVuEmHnY9bi02',
    isExternal: true 
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/liveirie.morelife',
    isExternal: true 
  },
];


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-2 h-6 bg-red-600 skew-x-[-15deg]" />
              <div className="w-2 h-6 bg-yellow-500 skew-x-[-15deg]" />
              <div className="w-2 h-6 bg-green-600 skew-x-[-15deg]" />
            </div>
            <span className="font-black italic text-white text-2xl tracking-tighter uppercase ml-2">MORE LIFE</span>
          </div>
           <div className="hidden md:flex items-center gap-8">
           {navLinks.map((link) => (
  <a 
    key={link.name} 
    href={link.href} 
   
    target={link.isExternal ? "_blank" : undefined}
    rel={link.isExternal ? "noopener noreferrer" : undefined}
    className="text-xs font-black uppercase text-white tracking-widest hover:text-yellow-500 transition-colors"
  >
    {link.name}
  </a>
))}

            <a href="tel:2673318696" className="bg-yellow-500 text-black px-5 py-2 font-black text-xs uppercase skew-x-[-10deg] hover:bg-white transition-colors">
              Call Now
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
     
       {isMenuOpen && (
  <div className="md:hidden bg-black border-b border-white/10 p-6 flex flex-col gap-4">
    {navLinks.map((link) => (
      <a 
        key={link.name} 
        href={link.href} 
       
        target={link.isExternal ? "_blank" : undefined}
        rel={link.isExternal ? "noopener noreferrer" : undefined}
        className="text-xl text-white font-black uppercase italic hover:text-yellow-500 transition-colors" 
        onClick={() => setIsMenuOpen(false)}
      >
        {link.name}
      </a>
    ))}
    
 
    <a 
      href="tel:2673318696" 
      className="mt-4 bg-yellow-500 text-black py-4 text-center font-black uppercase italic skew-x-[-10deg] active:scale-95 transition-all"
    >
      Call Now
    </a>
  </div>
)}

      </nav>
    </div>
  )
}
