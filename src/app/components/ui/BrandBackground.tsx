import React from "react";
import { motion } from "motion/react";

interface BrandBackgroundProps {
  scrollStyle?: any;
}

export const BrandBackground = ({ scrollStyle }: BrandBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] via-[#052e31] to-[#0BA4AE] opacity-20" />
      {/* Large Repeated Text Background - Parallax Effect */}
      <motion.div
        style={scrollStyle}
        className="absolute inset-0 flex flex-col justify-center gap-0 opacity-[0.05] select-none"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="text-[12rem] font-black uppercase text-transparent leading-[0.85] whitespace-nowrap"
            style={{ WebkitTextStroke: "2px #0BA4AE" }}
          >
            ReThrive Wellness
          </div>
        ))}
      </motion.div>
    </div>
  );
};