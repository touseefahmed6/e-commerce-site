
import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const navBg = useTransform(scrollY, [0, 100], ['rgba(15, 23, 42, 0)', 'rgba(2, 6, 23, 0.98)']);
  const navBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(40px)']);
  const navPadding = useTransform(scrollY, [0, 100], ['56px', '24px']);
  const borderOpacity = useTransform(scrollY, [0, 100], ['0', '0.05']);

  return (
    <motion.nav
      style={{ 
        backgroundColor: navBg,
        backdropFilter: navBlur,
        paddingTop: navPadding,
        paddingBottom: navPadding,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity})`
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-12"
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6 cursor-pointer group">
          <div className="relative flex items-center justify-center">
             <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
             <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
               <Zap size={18} className="text-white group-hover:text-cyan-400 transition-colors fill-white group-hover:fill-cyan-400" />
             </div>
          </div>
          <span className="text-xl font-black text-white uppercase tracking-[0.3em] flex items-center leading-none">
            Spark<span className="text-cyan-400 opacity-80">sphere</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-16">
          {['Collections', 'Drop Calendar', 'Technology', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="relative text-slate-400 hover:text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-all group/nav"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover/nav:w-full" />
            </a>
          ))}
          <div className="flex items-center gap-10 border-l border-white/5 pl-10 ml-4">
            <button className="text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <User size={18} strokeWidth={2} />
            </button>
            <button className="relative text-slate-400 hover:text-white transition-all transform hover:scale-110">
              <ShoppingCart size={18} strokeWidth={2} />
              <span className="absolute -top-3 -right-3 w-5 h-5 bg-white text-slate-950 rounded-full text-[9px] flex items-center justify-center font-black shadow-lg">
                0
              </span>
            </button>
          </div>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="absolute top-full left-0 right-0 bg-slate-950 h-screen backdrop-blur-3xl p-16 border-b border-white/5 md:hidden flex flex-col gap-12 items-center text-center pt-24"
          >
            {['Collections', 'Drop Calendar', 'Technology', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
