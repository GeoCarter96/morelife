'use client'
import { Plus, Check, RefreshCcw, Droplets, Zap, ShieldCheck, QrCode, X, Star, StarHalf, MapPin, Navigation } from 'lucide-react';
import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
interface Selections {
  fruits: string[];
 base: string;
 boost: string
}
export default function SmoothieBuilder() {
  const [selections, setSelections] =useState<Selections>({ base: '', fruits: [], boost: '' });
  const [showQR, setShowQR] = useState(false);

  const options = {
    bases: [
      { name: 'Sea Moss Gel', icon: <Droplets size={16} /> },
      { name: 'Coconut Water', icon: <Droplets size={16} /> },
      { name: 'Almond Milk', icon: <Droplets size={16} /> }
    ],
    fruits: ['Soursop', 'Mango', 'Pineapple', 'Banana', 'Papaya', 'Berries'],
    boosts: [
      { name: 'Hemp Protein', benefit: 'Muscle', icon: <Zap size={16} /> },
      { name: 'Ashwagandha', benefit: 'Stress', icon: <ShieldCheck size={16} /> },
      { name: 'Ginger/Turmeric', benefit: 'Immunity', icon: <ShieldCheck size={16} /> }
    ]
  };

 const toggleFruit = (fruit: string) => {
    setSelections(prev => ({
      ...prev,
      fruits: prev.fruits.includes(fruit) 
        ? prev.fruits.filter(f => f !== fruit) 
        : prev.fruits.length < 3 ? [...prev.fruits, fruit] : prev.fruits
    }));
  };

  const formulaString = `MORE LIFE FORMULA: ${selections.base} | ${selections.fruits.join(', ')} | ${selections.boost}`;
  const googleMapsUrl = "https://www.google.com/maps/place/More+life/@40.046314,-75.1551531,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6b98d54e96941:0x860261a8d4ef29ee!8m2!3d40.046314!4d-75.1551531!16s%2Fg%2F11hmsqq878?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="bg-[#050505] py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* RATING BADGE */}
        <div className="flex items-center gap-4 mb-12 bg-zinc-900/50 w-fit p-4 border border-white/5 skew-x-[-10deg]">
          <div className="flex text-yellow-500">
            {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            <StarHalf size={14} fill="currentColor" />
          </div>
          <span className="text-xs font-black uppercase tracking-tighter text-white">
            4.7 Rating <span className="text-white/40 ml-2">93 Reviews</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 space-y-12">
            <div>
              <div className="flex items-center gap-2 text-yellow-500 mb-4">
                <div className="h-1 w-12 bg-yellow-500" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Vitality Lab</span>
              </div>
              <h2 className="text-6xl font-black uppercase italic tracking-tighter text-red-600 leading-none mb-6">
                Build Your <span className="text-green-500">Medicine</span>
              </h2>
            </div>

            {/* SELECTION STEPS */}
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-red-600">Step 01: The Base</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {options.bases.map((base) => (
                  <button key={base.name} onClick={() => setSelections({...selections, base: base.name})}
                    className={`p-4 border-2 flex items-center justify-between transition-all ${selections.base === base.name ? 'border-yellow-500 bg-yellow-500 text-black' : 'border-white/10 hover:border-white/30 text-white'}`}>
                    <span className="font-black uppercase italic text-xs">{base.name}</span>
                    {selections.base === base.name ? <Check size={16}/> : base.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-green-500">Step 02: Earth's Candy (Max 3)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {options.fruits.map((fruit) => (
                  <button key={fruit} onClick={() => toggleFruit(fruit)}
                    className={`p-4 border-2 transition-all font-black uppercase italic text-xs flex justify-between items-center ${selections.fruits.includes(fruit) ? 'border-green-600 bg-green-600 text-white' : 'border-white/10 text-white/40'}`}>
                    {fruit} {selections.fruits.includes(fruit) ? <Check size={14}/> : <Plus size={14}/>}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Step 03: Natural Boost</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {options.boosts.map((boost) => (
                  <button key={boost.name} onClick={() => setSelections({...selections, boost: boost.name})}
                    className={`p-4 border-2 flex flex-col items-start gap-1 transition-all ${selections.boost === boost.name ? 'border-red-600 bg-red-600' : 'border-white/10 text-white/40'}`}>
                    <span className="font-black uppercase italic text-xs">{boost.name}</span>
                    <span className={`text-[9px] font-bold uppercase tracking-tighter ${selections.boost === boost.name ? 'text-white' : 'text-red-600'}`}>{boost.benefit}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 bg-zinc-900 border-2 border-white/10 p-8 rounded-[3rem] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600" />
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter text-red-600 text-center">Your <span className="text-yellow-500">Ital</span> <span className='text-green-600'>Blend</span></h3>
                
                <div className="w-48 h-72 mx-auto border-x-4 border-b-4 border-white/20 rounded-b-3xl relative flex flex-col justify-end overflow-hidden px-1 pb-1">
                   <div className={`w-full transition-all duration-700 ${selections.base ? 'h-1/3 bg-yellow-500/80' : 'h-0'}`} />
                   <div className={`w-full transition-all duration-700 delay-200 ${selections.fruits.length > 0 ? 'h-1/3 bg-green-600/80 border-t border-white/10' : 'h-0'}`} />
                   <div className={`w-full transition-all duration-700 delay-500 ${selections.boost ? 'h-1/3 bg-red-600/80 border-t border-white/10' : 'h-0'}`} />
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <ul className="space-y-2">
                    <li className="text-sm font-bold italic text-white uppercase"><span className="text-yellow-500 mr-2">Base:</span> {selections.base || '---'}</li>
                    <li className="text-sm font-bold italic text-white uppercase"><span className="text-green-500 mr-2">Fruits:</span> {selections.fruits.join(', ') || '---'}</li>
                    <li className="text-sm font-bold italic text-white uppercase"><span className="text-red-600 mr-2">Boost:</span> {selections.boost || '---'}</li>
                  </ul>
                </div>

                <button 
                  disabled={!selections.base}
                  onClick={() => setShowQR(true)}
                  className="w-full bg-white text-black py-4 font-black uppercase italic tracking-widest text-sm hover:bg-yellow-500 disabled:opacity-20 transition-all flex items-center justify-center gap-2"
                >
                  Save Formula <QrCode size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
          <div className="bg-white text-black w-full max-w-sm p-8 text-center relative border-[12px] border-yellow-500">
            <button onClick={() => setShowQR(false)} className="absolute -top-12 -right-0 text-white hover:text-red-600 transition-colors">
              <X size={32} />
            </button>
            <div className="space-y-6">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none">MY <span className="text-red-600">ITAL</span> <br /> FORMULA</h3>
              
              <div className="flex justify-center p-4 bg-white border-4 border-black">
                <QRCodeCanvas value={formulaString} size={160} />
              </div>

              <div className="space-y-4">
                <div className="pt-4 border-t border-zinc-200 text-[10px] font-black uppercase italic leading-tight">
                  {selections.base} + {selections.fruits.join(' + ')} + {selections.boost}
                </div>
                
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 font-black uppercase text-[10px] tracking-widest hover:bg-black transition-colors"
                >
                  <MapPin size={12} /> 2035 Church Ln <Navigation size={12} />
                </a>
                <p className="text-[9px] font-bold uppercase text-zinc-400">Tap address to open GPS</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
