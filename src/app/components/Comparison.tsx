import React from "react";
import { Check, X, Info } from "lucide-react";
import { motion } from "motion/react";

const comparisonData = [
  {
    feature: "Session Length",
    traditional: "15-30 min",
    rethrive: "60 min",
    highlight: true
  },
  {
    feature: "Provider",
    traditional: "Aides/Techs",
    rethrive: "Doctor of PT",
    highlight: true
  },
  {
    feature: "Cost",
    traditional: "Hidden Fees",
    rethrive: "Flat Rate",
    highlight: true
  },
  {
    feature: "Focus",
    traditional: "Symptoms",
    rethrive: "Root Cause",
    highlight: true
  },
  {
    feature: "Location",
    traditional: "Clinic",
    rethrive: "Home",
    highlight: true
  }
];

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

export const Comparison = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            The ReThrive <span className="text-[#187F7E]">Advantage</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            See why our direct-pay model delivers better outcomes than traditional insurance-based care.
          </p>
        </motion.div>

        <motion.div 
            className="max-w-5xl mx-auto overflow-x-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
        >
            {/* V13 Styled Table Container */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 min-w-[600px] md:min-w-0 relative overflow-hidden">
                 {/* Decorative Lime Accent */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9F257] blur-[60px] opacity-20 pointer-events-none" />

                <div className="grid grid-cols-3 bg-slate-50/80 p-6 border-b border-slate-200">
                    <div className="text-slate-500 font-bold uppercase tracking-wider text-xs md:text-sm pt-2">Comparison</div>
                    <div className="text-center">
                        <div className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-600 font-bold text-xs md:text-sm">Traditional</div>
                    </div>
                    <div className="text-center">
                        {/* V13 Teal & Lime Badge */}
                        <div className="inline-block px-4 py-1 rounded-full bg-[#187F7E] text-white font-bold text-xs md:text-sm shadow-md shadow-[#187F7E]/20">ReThrive</div>
                    </div>
                </div>

                <div className="divide-y divide-slate-100">
                    {comparisonData.map((row, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-6 items-center hover:bg-[#D9F257]/5 transition-colors duration-300">
                            <div className="font-semibold text-slate-700 text-sm md:text-base pr-4">{row.feature}</div>
                            
                            <div className="text-center flex flex-col items-center justify-center text-slate-500 text-sm md:text-base border-r border-slate-100 px-2">
                                <span className="block mb-1 opacity-50"><X className="w-5 h-5 text-red-400" /></span>
                                <span>{row.traditional}</span>
                            </div>
                            
                            <div className="text-center flex flex-col items-center justify-center text-slate-900 font-bold text-sm md:text-base px-2">
                                <span className="block mb-1 text-[#187F7E]"><Check className="w-5 h-5" /></span>
                                <span className={row.highlight ? "text-[#187F7E]" : ""}>{row.rethrive}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="bg-[#187F7E]/5 p-6 text-center border-t border-slate-100">
                    <p className="text-slate-600 text-sm flex items-center justify-center gap-2">
                        <Info className="w-4 h-4 text-[#187F7E]" />
                        <span>By bypassing insurance restrictions, we focus 100% on your recovery goals.</span>
                    </p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
