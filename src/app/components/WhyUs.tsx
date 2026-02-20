import React, { useRef } from "react";
import { Link } from 'react-router';
import { Home, UserCheck, ShieldCheck, Clock } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { BrandBackground } from "./ui/BrandBackground";

const features = [
  {
    icon: Home,
    title: "At Home Service",
    description: "Mobile physical therapy throughout Phoenix, Scottsdale, Paradise Valley, and surrounding Arizona communities. We bring expert care to your doorstep.",
  },
  {
    icon: UserCheck,
    title: "Licensed Doctors",
    description: "Community-based Doctors of Physical Therapy. Over 50% of our doctors were born and raised in Arizona, bringing local knowledge and care.",
  },
  {
    icon: ShieldCheck,
    title: "No Insurance Hassles",
    description: "We provide the best service without requesting approvals or waiting for referrals. Direct pay means faster access to care.",
  },
  {
    icon: Clock,
    title: "Full 1-on-1 Attention",
    description: "You get our undivided attention for a full 60 minutes. No aides, no rushing—just focused, personalized care.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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

export const WhyUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section 
      ref={containerRef}
      id="why-us" 
      className="bg-[#1c1c1c] py-24 relative overflow-hidden"
    >
        
        {/* Background Gradient & Outline Text */}
        <BrandBackground scrollStyle={{ y: y1 }} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Floating Container */}
        <motion.div 
            style={{ y: y2 }}
            className="bg-[#0e1f21]/95 backdrop-blur-sm rounded-[40px] p-8 md:p-16 border border-[#0BA4AE]/20 shadow-2xl shadow-[#0BA4AE]/5"
        >
            <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Left Content */}
                <motion.div 
                    className="flex flex-col justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                        Skip the clinic. <br/><span className="text-[#0BA4AE]">Community Based Doctors,</span> right at your door.
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-slate-300 leading-relaxed text-lg mb-10">
                        At ReThrive Wellness we pride ourselves on being the best in home physical therapy. We don't work through the traditional constraints of insurance based clinics. By removing the "middle man," we focus 100% on you to provide higher quality care, faster results, and a personalized experience that simply isn't possible in a high-volume setting.
                    </motion.p>
                    
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
                        <Link to="/intake" className="px-8 py-4 bg-[#0BA4AE] text-white font-bold hover:bg-white hover:text-[#1c1c1c] transition-colors shadow-lg uppercase tracking-wide rounded-sm">
                            Book Appointment
                        </Link>
                        <Link to="/model" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2 uppercase tracking-wide rounded-sm">
                            Our Model
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Grid of White Cards */}
                <motion.div 
                    className="grid sm:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-white rounded-[24px] p-8 flex flex-col items-start gap-4 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
                        >
                            <div className="p-3 bg-slate-100 rounded-full text-[#111111] group-hover:bg-[#0BA4AE] group-hover:text-white transition-colors">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-[#111111] mb-2 uppercase">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};