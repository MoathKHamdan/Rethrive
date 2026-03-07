import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';
import { FileText, Phone, MessageSquare, Heart } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Reach Out",
    description: "Fill out our contact form or call us directly at (480) 935-8225. No pressure, no commitment — just the first step toward feeling better.",
  },
  {
    icon: MessageSquare,
    title: "Talk with Your Patient Coordinator",
    description: "Within 48 hours, your dedicated patient coordinator will reach out to learn about your needs, answer your questions, and start building your care plan.",
  },
  {
    icon: FileText,
    title: "Consult & Schedule",
    description: "Your coordinator connects you with the right practitioner to discuss your goals, review your options, and schedule your first session.",
  },
  {
    icon: Heart,
    title: "ReThrive",
    description: "Your practitioner arrives at your door, and your journey to feeling your best begins. Welcome to a new standard of care.",
  },
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

export const Process = () => {
  return (
    <section id="process" className="py-32 bg-brand-50 text-brand-900 border-t border-brand-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <motion.div 
            className="lg:col-span-5 lg:sticky lg:top-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
             <span className="text-[#0BA4AE] font-bold tracking-wider uppercase text-sm mb-4 block">
               The Process
             </span>
             <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-[#2D3436] leading-tight">
               Your roadmap, <br className="hidden lg:block" />Start the process to recovery Today.
             </h2>
             <p className="text-brand-700 text-lg leading-relaxed font-medium mb-8">
               We've streamlined the physical therapy experience. No hurdles, no confusion—just a clear, effective path to getting you back to your best self.
             </p>
             <div className="hidden lg:block">
                 <Link to="/intake" className="inline-flex items-center justify-center px-8 py-4 bg-[#2D3436] text-white font-bold rounded-sm hover:bg-[#0BA4AE] transition-colors duration-300 uppercase tracking-wide">
                    Start Your Journey
                 </Link>
             </div>
          </motion.div>

          {/* Right Column: Vertical Steps */}
          <div className="lg:col-span-7">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-6 md:gap-8 py-10 border-b border-brand-200 group first:pt-0 last:border-0"
                >
                  <div className="flex-shrink-0 relative">
                    {/* Number Background */}
                    <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-[#0BA4AE] group-hover:bg-[#0BA4AE] group-hover:text-white transition-all duration-500 ease-out shadow-sm group-hover:shadow-lg group-hover:scale-105">
                      <step.icon className="w-8 h-8" strokeWidth={1.5} />
                    </span>
                    <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#2D3436] text-white text-xs font-bold rounded-full border-2 border-white">
                        {index + 1}
                    </span>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3 text-[#2D3436] group-hover:text-[#0BA4AE] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-brand-600 leading-relaxed font-medium text-[16px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};