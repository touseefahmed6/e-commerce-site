import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollBackground from './components/ScrollBackground';
import AISidekick from './components/AISidekick';
import { Zap } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['rgba(2, 6, 23, 1)', 'rgba(7, 10, 30, 1)', 'rgba(10, 15, 45, 1)', 'rgba(2, 6, 23, 1)']
  );

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      <ScrollBackground scrollYProgress={scrollYProgress} />
      
      <motion.div 
        style={{ backgroundColor: bgColor }}
        className="fixed inset-0 -z-10 transition-colors duration-700"
      />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            
            <main>
              <Hero />
              <About />
              <Services />
              <WhyUs />
              <Testimonials />
              <Contact />
            </main>

            <footer className="relative pt-48 pb-24 px-12 border-t border-white/5 bg-slate-950/80 backdrop-blur-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
              
              <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="flex items-center gap-4 group">
                  <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center">
                    <Zap size={14} className="text-white fill-white opacity-60" />
                  </div>
                  <span className="text-lg font-black tracking-[0.4em] text-white uppercase">
                    Spark<span className="text-cyan-400">sphere</span>
                  </span>
                </div>

                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
                  © {new Date().getFullYear()} Sparksphere Footwear Evolution. All rights reserved.
                </div>

                <div className="flex gap-12">
                  {['Privacy', 'Drops', 'Accessibility'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="text-slate-400 hover:text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <AISidekick />
    </div>
  );
};

export default App;