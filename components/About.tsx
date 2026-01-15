
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Wind, Droplets, Zap, Shield } from 'lucide-react';

const coreTechnologies = [
  {
    title: 'Carbon',
    subtitle: 'Base Chassis Construction',
    desc: 'High-tensile carbon weave for unparalleled structural integrity and weight reduction.',
    icon: <Box size={60} strokeWidth={1.5} />,
    color: 'text-cyan-400',
    glow: 'bg-cyan-400/20'
  },
  {
    title: 'Graphene',
    subtitle: 'Thermal Regulation Layer',
    desc: 'Single-atom thick heat dissipation layer keeping your performance at optimal temperatures.',
    icon: <Zap size={60} strokeWidth={1.5} />,
    color: 'text-cyan-400',
    glow: 'bg-cyan-400/20'
  },
  {
    title: 'Obsidian',
    subtitle: 'Reactive Impact Shield',
    desc: 'Non-Newtonian fluid-core structure that hardens instantly on aggressive impact.',
    icon: <Shield size={60} strokeWidth={1.5} />,
    color: 'text-cyan-400',
    glow: 'bg-cyan-400/20'
  }
];

const About: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coreTechnologies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentTech = coreTechnologies[activeIndex];

  return (
    <section id="technology" className="py-24 px-10 relative">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Info & Small Material Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col gap-10"
        >
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-[-0.05em]">
              Materials From <br />
              <span className="text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">The Future</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed tracking-wide max-w-xl opacity-80">
              We don't use standard fabrics. Every Sparksphere product is constructed using liquid-form polymers and recycled carbon threads, creating a reactive second skin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 glass-card rounded-[32px] group hover:bg-white/5 transition-all duration-700 border-white/5"
            >
              <div className="glass-highlight opacity-20" />
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Wind className="text-cyan-400" size={24} />
              </div>
              <h4 className="text-white font-black mb-2 uppercase tracking-[0.3em] text-[11px]">Aero-Mesh</h4>
              <p className="text-slate-400 text-[14px] leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">360° airflow integration for extreme thermal control.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 glass-card rounded-[32px] group hover:bg-white/5 transition-all duration-700 border-white/5"
            >
              <div className="glass-highlight opacity-20" />
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Droplets className="text-cyan-400" size={24} />
              </div>
              <h4 className="text-white font-black mb-2 uppercase tracking-[0.3em] text-[11px]">Liquid-Resist</h4>
              <p className="text-slate-400 text-[14px] leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">Molecular coating that repels all environmental stains.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Hero Material Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative lg:pl-10"
        >
          <div className="aspect-square glass-card rounded-[48px] p-12 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_120px_rgba(34,211,238,0.1)] border-white/5">
            <div className="glass-highlight opacity-40" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <div className="relative mb-8">
                  <div className={`absolute inset-0 ${currentTech.glow} blur-3xl rounded-full animate-pulse`} />
                  <div className={`${currentTech.color} relative z-10 opacity-90 transition-transform duration-1000 group-hover:rotate-[15deg]`}>
                    {currentTech.icon}
                  </div>
                </div>
                
                <h3 className="text-5xl md:text-6xl font-black text-white mb-2 uppercase tracking-[-0.05em] leading-none">
                  {currentTech.title}
                </h3>
                
                <div className="text-slate-400 uppercase tracking-[0.5em] text-[12px] font-black opacity-60 mb-6">
                  {currentTech.subtitle}
                </div>

                <p className="text-slate-300 text-base max-w-[320px] leading-relaxed opacity-80">
                  {currentTech.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="absolute bottom-12 flex gap-3 z-20">
              {coreTechnologies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 transition-all duration-500 rounded-full ${
                    i === activeIndex ? 'w-10 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
