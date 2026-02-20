import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CornerRightDown } from "lucide-react";
import { Link } from 'react-router';

// Animation Constants
const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_CONFIG.duration, ease: ANIMATION_CONFIG.ease }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-white pt-20">
      
      {/* 1. Video Section - Top Half */}
      <div className="w-full h-[calc(50vh+100px)] relative overflow-hidden bg-neutral-900 group">
        
        {/* Video Background Layer - using direct iframe with object-fit cover */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
          {isMounted && (
            <iframe
              src="https://www.youtube.com/embed/nFyC43ZmrTk?autoplay=1&mute=1&controls=0&loop=1&playlist=nFyC43ZmrTk&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&modestbranding=1"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                pointerEvents: 'none',
                border: 'none',
                margin: 0,
                padding: 0,
                width: '100vw',
                height: '56.25vw', // 16:9 aspect ratio (9/16 = 0.5625)
                minHeight: '100%',
                minWidth: '177.77vh' // 16:9 aspect ratio (16/9 = 1.7777)
              }}
              allow="autoplay; encrypted-media"
              title="Background Video"
            />
          )}
        </div>
        
        {/* Overlay for contrast and click protection */}
        <div className="absolute inset-0 bg-[#1c1c1c]/20 z-10 pointer-events-none" />
      </div>

      {/* 2. Content Section - Bottom Half */}
      <div className="w-full bg-white relative z-20">
        <div className="relative container mx-auto px-6 py-12 md:py-16">
            <motion.div 
                className="grid lg:grid-cols-12 gap-12 items-start"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
            <motion.div className="lg:col-span-8" variants={fadeInUp}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-normal leading-none text-[#1c1c1c] mb-6">
                    Physical Therapy.
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-normal leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#0BA4AE] to-[#088f98]">
                    On Your Terms.
                </h1>
            </motion.div>

            <motion.div className="lg:col-span-4 flex flex-col gap-6 pt-2" variants={fadeInUp}>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    The best in home physical therapy in Arizona. Our community based approach gives you the best 1-on-1 doctor level care right in the comfort of your own home.
                </p>
                {/* Mobile: Stack vertically with full width. Desktop: Row layout */}
                <div className="flex flex-col md:flex-row gap-3">
                    <Link
                      to="/intake"
                      className="w-full md:w-auto px-8 py-4 bg-[#0BA4AE] text-white font-bold hover:bg-[#1c1c1c] hover:text-white transition-all shadow-sm flex items-center justify-center text-center uppercase tracking-wide rounded-sm text-sm"
                    >
                      Book Now
                    </Link>
                    <a
                      href="#services"
                      className="w-full md:w-auto px-8 py-4 bg-white border border-slate-200 text-[#1c1c1c] font-bold hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2 group uppercase tracking-wide rounded-sm text-sm"
                    >
                      Our Services
                      <CornerRightDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                    </a>
                </div>
            </motion.div>
            </motion.div>
        </div>
      </div>

    </section>
  );
};