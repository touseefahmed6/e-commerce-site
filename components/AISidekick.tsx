import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AISidekick: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Welcome to Sparksphere. I am your Personal Style Consultant. Looking for a specific drop or need advice on performance materials?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are the Sparksphere Personal Style Consultant. Sparksphere is an elite e-commerce platform for high-end technical footwear. Your tone is sophisticated, knowledgeable about streetwear trends, and exclusive. You explain technical features like 'Aero-Mesh' and 'Max Air' with passion. Be helpful but maintain a high-fashion aura. Keep responses under 50 words."
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm momentarily unavailable to curate. Please browse our latest arrivals." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to Style Consultant." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-24 right-0 w-80 sm:w-96 h-[500px] glass-card rounded-[40px] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="glass-highlight" />
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Sparkles className="text-cyan-400" size={20} />
                <span className="font-black text-white uppercase tracking-tighter">Sphere Consultant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-5 py-3 rounded-[24px] text-sm ${
                    m.role === 'user' 
                      ? 'bg-white text-slate-950 font-black rounded-br-none' 
                      : 'bg-white/10 text-slate-200 border border-white/5 rounded-bl-none backdrop-blur-md'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl rounded-bl-none animate-pulse text-[10px] text-cyan-400 font-black uppercase tracking-widest">
                    Curating Choice...
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/10 bg-slate-950/50">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about collections..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-14 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white text-slate-950 rounded-xl hover:bg-cyan-400 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-950"
      >
        <MessageSquare size={28} />
      </motion.button>
    </div>
  );
};

export default AISidekick;