
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronDown, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-12 py-8 overflow-hidden">
      {/* Volumetric Beam Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
        <div className="absolute top-0 left-[-15%] w-[70%] h-full light-beam rotate-[-15deg]" />
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/5 bg-white/[0.02] text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6 backdrop-blur-xl"
          >
            <Zap size={10} className="text-cyan-400 fill-cyan-400" /> SS/25 Performance Drop
          </motion.div>
          
          <h1 className="text-6xl md:text-[7rem] font-black text-white leading-[0.85] mb-8 tracking-[-0.07em]">
            Experience <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-cyan-400">
              The Edge.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed tracking-wide opacity-80">
            Sparksphere defines the intersection of high-performance materials and avant-garde aesthetic. Precision engineered for those who move beyond the ordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <button className="group relative px-10 py-5 bg-white text-slate-950 font-black rounded-full transition-all duration-500 hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
                Explore Collection <ShoppingBag size={18} />
              </span>
            </button>
            
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-white tracking-tighter">$1,199.00</span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.4em]">Limited Edition</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Main Hero Product Display */}
          <div className="relative group scale-95 lg:scale-105">
            <div className="absolute inset-0 bg-cyan-500/5 blur-[180px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium Sneaker"
              className="relative z-10 w-[500px] h-auto object-contain drop-shadow-[0_60px_80px_rgba(0,0,0,0.6)]"
            />
            {/* Dynamic Glass Specs Overlay */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 -right-12 py-6 px-12 glass-card rounded-[32px] z-20 shadow-2xl border-white/5"
            >
              <div className="glass-highlight opacity-30" />
              <div className="text-[8px] text-cyan-400 font-black uppercase tracking-[0.4em] mb-2">Cushioning</div>
              <div className="text-xl font-black text-white tracking-tighter">MAX AIR</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-2 text-slate-500 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">Discover More</span>
        <ChevronDown size={10} className="text-cyan-400/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
