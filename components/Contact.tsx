
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-10 pb-20 px-10">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] bg-gradient-to-br from-cyan-950/10 via-slate-900/10 to-transparent border border-white/10 backdrop-blur-3xl overflow-hidden p-8 md:p-12"
        >
          <div className="absolute -top-1/2 -right-1/4 w-[700px] h-[700px] bg-cyan-500/5 blur-[150px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                Secure Your <br /> <span className="text-cyan-400 underline decoration-cyan-500/20 underline-offset-8">Place In The Evolution</span>
              </h2>
              <p className="text-slate-400 text-sm mb-8 opacity-80">
                Contact our concierge desk to inquire about limited seasonal drops or to schedule a bespoke sizing consultation. Experience the pinnacle of technical footwear.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Mail size={16} />, label: 'Concierge Email', value: 'concierge@sparksphere.com' },
                  { icon: <MapPin size={16} />, label: 'Headquarters', value: '450 Precision Ave, Suite 900' },
                  { icon: <Clock size={16} />, label: 'Support Hours', value: 'Mon - Fri: 9am — 6pm EST' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-center group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                      <p className="text-white text-[11px] font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-0.5 rounded-[28px] bg-gradient-to-br from-white/10 to-transparent">
              <div className="bg-slate-950/40 backdrop-blur-2xl p-7 rounded-[26px] space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-[12px] text-white focus:outline-none focus:border-cyan-400/50 transition-colors backdrop-blur-md" 
                      placeholder="Jane Sterling"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-[12px] text-white focus:outline-none focus:border-cyan-400/50 transition-colors backdrop-blur-md" 
                      placeholder="jane@bespoke.com"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-[12px] text-slate-400 focus:outline-none focus:border-cyan-400/50 transition-colors backdrop-blur-md appearance-none">
                    <option>Performance Collection</option>
                    <option>Limited Edition Drops</option>
                    <option>Bespoke Consultation</option>
                  </select>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-black text-[12px] rounded-lg shadow-2xl shadow-cyan-500/20 flex items-center justify-center gap-2 uppercase tracking-widest"
                >
                  Request Access <CalendarCheck size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
