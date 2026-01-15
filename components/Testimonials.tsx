
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'David Vandermere',
    role: 'Performance Athlete',
    content: 'The carbon-infused chassis is a game-changer. I\'ve never felt this level of energy return in a performance sneaker. Sparksphere is in a league of its own.',
    avatar: 'https://picsum.photos/seed/user1/200/200'
  },
  {
    name: 'Sarah Drumm',
    role: 'Art Curator',
    content: 'The liquid-resist coating actually works. I wore my Nebula Runners through a storm and they still look brand new. It\'s the perfect blend of tech and aesthetic.',
    avatar: 'https://picsum.photos/seed/user2/200/200'
  },
  {
    name: 'James Lee',
    role: 'Streetwear Collector',
    content: 'Sparksphere balances avant-garde design with actual track-ready performance. The AI-guided fit process ensures they feel like a second skin.',
    avatar: 'https://picsum.photos/seed/user3/200/200'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-10 px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tight">The <span className="text-cyan-400">Sphere</span> Experience</h2>
          <p className="text-slate-400 text-xs opacity-70">Actual feedback from our global community of athletes and collectors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-[28px] glass-card border-white/5 backdrop-blur-xl flex flex-col gap-4"
            >
              <div className="glass-highlight opacity-10" />
              <div className="absolute top-5 right-5 text-cyan-400/10">
                <Quote size={30} />
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border-2 border-cyan-400/20 object-cover" />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Star size={7} className="text-slate-950 fill-slate-950" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs">{t.name}</h4>
                  <p className="text-cyan-400 text-[10px] font-black tracking-[0.2em] uppercase">{t.role}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-[11px] leading-relaxed italic opacity-80">
                "{t.content}"
              </p>
              
              <div className="flex gap-0.5 text-cyan-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-cyan-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
