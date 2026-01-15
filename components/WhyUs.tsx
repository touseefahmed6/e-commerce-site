
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 px-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-400 font-black uppercase tracking-[0.5em] text-[11px] mb-4 block opacity-90">
              The Entor Standard
            </span>
            <h2 className="text-5xl font-black text-white mb-10 leading-[0.9] tracking-[-0.05em]">
              Unrivaled <br /> <span className="text-cyan-400">Authenticity</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {[
                { title: 'NFT Verified', desc: 'Every pair linked to the blockchain for total proof and historical tracking.', icon: <ShieldCheck className="text-cyan-400" /> },
                { title: 'Global Priority', desc: 'Secure worldwide shipping in under 48 hours to any metropolitan hub.', icon: <Globe className="text-cyan-400" /> },
                { title: 'Bespoke Fit', desc: 'Advanced AI scanning ensures the perfect anatomical size every time.', icon: <Zap className="text-cyan-400" /> },
                { title: 'Elite Access', desc: 'Exclusive member-only drops for our top-tier global collectors.', icon: <Sparkles className="text-cyan-400" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group cursor-default relative"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                      <div className="glass-highlight opacity-20" />
                      {React.cloneElement(item.icon as React.ReactElement<any>, { 
                        size: 20,
                        className: "text-cyan-400 transition-transform duration-500 group-hover:rotate-12"
                      })}
                    </div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                  
                  <div className="relative overflow-hidden">
                    <p className="text-slate-400 text-[13px] leading-relaxed opacity-80 group-hover:opacity-100 group-hover:text-slate-200 transition-all duration-500 group-hover:translate-x-1">
                      {item.desc}
                    </p>
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400/50 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image/Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative h-[450px] group"
          >
            <div className="absolute inset-0 glass-card rounded-[48px] overflow-hidden border-white/5 shadow-2xl">
              <div className="glass-highlight opacity-30" />
              
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover opacity-30 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-50"
                alt="Shoe Factory"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-cyan-400/50" />
                  <div className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.4em] opacity-90">
                    Craftsmanship Excellence
                  </div>
                </div>
                
                <p className="text-3xl font-black text-white leading-[1.1] tracking-tight group-hover:tracking-normal transition-all duration-700">
                  "We don't build products. We <span className="text-cyan-400">architect</span> modern artifacts."
                </p>
                
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-1 bg-cyan-400 mt-6 rounded-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
