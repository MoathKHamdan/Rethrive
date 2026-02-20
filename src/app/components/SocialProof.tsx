import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

const logos = [
  "Aetna", "BlueCross BlueShield", "Cigna", "UnitedHealthcare", "Humana", "Medicare"
];

export const SocialProof = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Insurance Partners Accepted</p>
      </div>
      
      <div className="relative flex overflow-hidden mask-gradient-x">
        <motion.div 
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap min-w-full"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate the array enough times to ensure smooth scrolling */}
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-bold text-slate-300 hover:text-[#187F7E] transition-colors cursor-default select-none uppercase tracking-tight"
            >
              {logo}
            </span>
          ))}
        </motion.div>
        
        {/* Gradient Fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
