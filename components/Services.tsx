
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, ShieldCheck, Zap } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nike Air Max',
    price: '$1,199.00',
    desc: 'Experience the perfect blend of cushioning and attitude.',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Air Force Vision',
    price: '$950.00',
    desc: 'Iconic silhouette met with futurist transparency.',
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Nebula Runner',
    price: '$1,400.00',
    desc: 'Lightweight mesh for intergalactic exploration.',
    img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=600'
  }
];

const Services: React.FC = () => {
  return (
    <section id="collections" className="py-8 px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter"
            >
              The <span className="text-cyan-400">Curated</span> Drop
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-slate-400 text-xs md:text-sm leading-relaxed tracking-wide opacity-80"
            >
              Each piece is a testament to technical precision. Limited seasonal runs, engineered for infinite impact.
            </motion.p>
          </div>
          <button className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[9px] border-b border-cyan-400/10 hover:border-cyan-400 transition-all pb-1 mb-1 whitespace-nowrap">
            View All Collections
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-[24px] p-0 flex flex-col group cursor-pointer shadow-xl border-white/5 overflow-hidden"
            >
              <div className="glass-highlight opacity-20" />
              
              {/* Product Image Area - Adjusted to 4:3 for compactness */}
              <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-slate-950/40 z-20 group-hover:bg-transparent transition-all duration-700" />
                
                {/* Corner Technical Badge - Scaled down */}
                <div className="absolute top-4 left-4 z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0 scale-75 group-hover:scale-90 transform flex flex-col gap-1">
                  <div className="bg-cyan-500/90 backdrop-blur-md px-2 py-1 rounded-sm flex items-center gap-1.5 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                    <ShieldCheck size={10} className="text-slate-950" />
                    <span className="text-[8px] font-black text-slate-950 uppercase tracking-widest">Auth Verified</span>
                  </div>
                </div>

                <motion.img 
                  whileHover={{ 
                    scale: 1.15,
                    rotate: -4,
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                  transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                  src={p.img} 
                  alt={p.name} 
                  className="relative z-10 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
              </div>
              
              {/* Product Info Area - Reduced padding */}
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xl font-black text-white block tracking-tighter group-hover:text-cyan-400 transition-colors duration-300">{p.price}</span>
                    <h3 className="text-base font-bold text-white mt-0.5 tracking-tight">
                      {p.name}
                    </h3>
                  </div>
                  <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-white hover:text-slate-950 transition-all group/heart shadow-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-10 transition-opacity" />
                    <Heart size={14} className="group-hover/heart:fill-current z-10" />
                  </button>
                </div>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-5 min-h-[32px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {p.desc}
                </p>

                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-[14px] flex items-center justify-center gap-2 text-white text-[9px] font-black uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-slate-950 group-hover:border-white transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-slate-950">
                    <ShoppingCart size={14} /> Add to Cart
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
