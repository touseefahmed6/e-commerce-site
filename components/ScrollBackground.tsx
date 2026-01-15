
import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
}

const ScrollBackground: React.FC<Props> = ({ scrollYProgress }) => {
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Background Glows */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute -top-1/4 -left-1/4 w-full h-full bg-cyan-900/10 blur-[160px] rounded-full"
      />
      <motion.div 
        style={{ y: y2, rotate }}
        className="absolute top-1/2 -right-1/4 w-3/4 h-3/4 bg-blue-900/10 blur-[160px] rounded-full"
      />
      
      {/* Floating Glassy Shapes */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 bg-white/5 backdrop-blur-[2px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/5 bg-white/5 backdrop-blur-[2px] rounded-3xl"
      />
    </div>
  );
};

export default ScrollBackground;
