import React, { useState } from "react";
import { Play, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Video Modal Component
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#1c1c1c]/80 backdrop-blur-sm" 
                onClick={onClose}
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl aspect-video bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#1c1c1c]/50 text-white rounded-full hover:bg-white hover:text-[#1c1c1c] transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder video
                        title="ReThrive Philosophy" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  );
};

const valuePoints = [
  "Depth over volume approach",
  "Health as a long-term investment",
  "Prevention-focused methodology",
  "Empowerment through education"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const Philosophy = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="bg-[#0F5C5B] py-24 relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Glow Effect (V13 Lime/Teal) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9F257] rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Video Section */}
            <motion.div 
                className="relative group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video">
                    <img 
                        src="https://images.unsplash.com/photo-1544187702-067d81860901?auto=format&fit=crop&q=80&w=1080" 
                        alt="Founder working with patient" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1c1c1c]/30 group-hover:bg-[#1c1c1c]/40 transition-colors" />
                    
                    {/* Custom Play Button - V13 Colors */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                        <div className="w-14 h-14 bg-[#D9F257] rounded-full flex items-center justify-center shadow-lg pl-1">
                            <Play className="w-6 h-6 text-[#187F7E] fill-current" />
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-stripes-white opacity-10 -z-10" />
            </motion.div>

            {/* Content Section */}
            <motion.div 
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, delay: 0.2 }}
                variants={fadeInUp}
            >
                <div>
                    <span className="text-[#D9F257] font-bold tracking-wider uppercase text-sm mb-2 block">Our Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Health is an <br />
                        <span className="text-white relative inline-block">
                            Investment.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D9F257] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                        "We believe healthcare should be proactive, not reactive. At ReThrive, we prioritize depth over volume, partnering with you to build a foundation for a lifetime of vitality—without the constraints of insurance."
                    </p>
                </div>

                <div className="space-y-4">
                    {valuePoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-slate-200">
                            <div className="p-1 rounded-full bg-[#D9F257] text-[#187F7E]">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <span className="font-medium">{point}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};