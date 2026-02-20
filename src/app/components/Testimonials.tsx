import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Zap } from "lucide-react";
import { Link } from 'react-router';

const reShapeImg = "https://freeimage.host/i/qHf5rB4.png";

const testimonials = [
  {
    quote: "My daughter is a high school multi-sport athlete who has worked with ReThrive over the past couple of years. Their expertise and dedication have been evident in the remarkable progress she has made.",
    author: "Jill L.",
    role: "Parent of Athlete",
    image: "https://images.unsplash.com/photo-1620213391117-0d169a917221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzA5NDY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    quote: "Absolutely top-notch, professional physical therapy. I have never seen so much progress before. The convenience of home visits made all the difference in my recovery.",
    author: "Ernest Crane",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwOTQ2NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    quote: "Professional, punctual, and incredibly knowledgeable. Start treatment immediately without needing a physician's referral—this saved me weeks of waiting.",
    author: "Sarah Jenkins",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBoeXNpY2FsJTIwdGhlcmFweSUyMHNlc3Npb258ZW58MXx8fHwxNzcwOTQ2NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    quote: "60 minutes of one-on-one care dedicated entirely to your recovery. No aides, no double booking. Just pure, focused care.",
    author: "Michael Ross",
    role: "Post-Surgery Patient",
    image: "https://images.unsplash.com/photo-1765896387454-3c29c0473615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjByZWNvdmVyeSUyMHRoZXJhcHl8ZW58MXx8fHwxNzcwOTQ2NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  }
];

const tags = [
    "CONCIERGE LEVEL ACCESS", 
    "ALWAYS 1-ON-1 SESSIONS", 
    "DIRECT, EXPEDITED SCHEDULING", 
    "DATA TRACKING", 
    "PERFORMANCE MONITORING",
    "IN-HOME EXERCISES",
    "TEXT & EMAIL ACCESS"
];

const Marquee = ({ reverse = false }: { reverse?: boolean }) => (
    <div className="flex overflow-hidden py-4 border-y border-slate-100 bg-white select-none">
        <motion.div 
            className="flex gap-8 items-center whitespace-nowrap"
            animate={{ x: reverse ? "0%" : "-50%" }}
            initial={{ x: reverse ? "-50%" : "0%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            {[...tags, ...tags, ...tags, ...tags].map((tag, i) => (
                <div key={i} className="flex items-center gap-8">
                    <span className="text-xs font-bold tracking-widest text-slate-400">{tag}</span>
                    <Zap className="w-4 h-4 text-[#0BA4AE] fill-current" />
                </div>
            ))}
        </motion.div>
    </div>
);

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white overflow-hidden py-12 md:py-24">
      {/* Top Marquee */}
      <Marquee />

      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
            
            {/* Testimonial Content */}
            <div className="flex flex-col justify-center relative min-h-[400px]">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="w-full flex flex-col items-center justify-center"
                    >
                        {/* Text Content */}
                        <div className="flex flex-col items-center justify-center mb-12 w-full max-w-5xl mx-auto">
                            <motion.blockquote 
                                className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#111111] leading-tight mb-8 w-full text-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                "{testimonials[current].quote}"
                            </motion.blockquote>
                            
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <p className="text-xl font-bold text-[#111111]">
                                    {testimonials[current].author}
                                </p>
                                <p className="text-sm text-slate-500 mt-1">
                                    {testimonials[current].role}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex flex-wrap items-center justify-center gap-8 mt-auto border-t border-slate-100 pt-8">
                    {/* Counter & Controls */}
                    <div className="flex items-center gap-8">
                        <div className="text-4xl md:text-6xl font-light text-[#111111] tracking-tighter">
                            0{current + 1}
                            <span className="text-lg md:text-xl text-slate-400 font-normal ml-2">/ 0{testimonials.length}</span>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={prev} className="p-3 rounded-full border border-slate-200 hover:border-[#0BA4AE] hover:text-[#0BA4AE] transition-colors">
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button onClick={next} className="p-3 rounded-full border border-slate-200 hover:border-[#0BA4AE] hover:text-[#0BA4AE] transition-colors">
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link to="/intake" className="px-8 py-4 bg-[#0BA4AE] text-white font-bold hover:bg-[#1c1c1c] transition-colors shadow-lg uppercase tracking-wide rounded-full">
                        Get Started
                    </Link>
                </div>
            </div>

        </div>
      </div>

      {/* Bottom Marquee */}
      <Marquee reverse />
    </section>
  );
};