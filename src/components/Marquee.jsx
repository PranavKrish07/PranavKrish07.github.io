import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  'Python', 'Django REST Framework', 'React.js', 'PostgreSQL', 
  'JWT Auth', 'Vite', 'Gemini API', 'Vercel', 'Render'
];

export default function Marquee() {
  return (
    <div className="marquee">
      <motion.div
        className="marquee__track"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {/* Double the array to ensure seamless looping */}
        {[...stack, ...stack, ...stack].map((item, index) => (
          <div key={index} className="marquee__item">
            <span><b>{item}</b></span>
            <span className="marquee__dot">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
