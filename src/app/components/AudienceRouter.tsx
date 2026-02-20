import React from "react";
import { User, Stethoscope, Users, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const audiences = [
  {
    title: "Patients",
    description: "Ready to invest in your long-term health? Book your comprehensive evaluation today.",
    icon: User,
    color: "bg-[#187F7E]", // V13 Teal
    hoverBorder: "hover:border-[#187F7E]",
    linkText: "Start Your Journey"
  },
  {
    title: "Physician Referrals",
    description: "Refer a patient to ReThrive for high-quality, outcomes-driven care.",
    icon: Stethoscope,
    color: "bg-[#0F5C5B]", // Darker Teal
    hoverBorder: "hover:border-[#0F5C5B]",
    linkText: "Refer a Patient"
  },
  {
    title: "Providers",
    description: "Join our team of elite doctoral-level therapists redefining healthcare delivery.",
    icon: Users,
    color: "bg-slate-900", // Dark neutral
    hoverBorder: "hover:border-slate-900",
    linkText: "Join Our Team"
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const AudienceRouter = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Partner with <span className="text-[#187F7E]">ReThrive</span>
            </h2>
            <p className="text-slate-600">
                Whether you're seeking care, coordinating it, or delivering it—we have a path for you.
            </p>
        </motion.div>

        <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
        >
            {audiences.map((item, idx) => (
                <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className={`relative p-8 rounded-3xl bg-slate-50 border-2 border-transparent ${item.hoverBorder} transition-all duration-300 group hover:bg-white hover:shadow-xl flex flex-col`}
                >
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                        {item.description}
                    </p>
                    
                    <a href="#contact" className={`inline-flex items-center gap-2 font-bold transition-colors ${item.color === 'bg-[#187F7E]' ? 'text-[#187F7E]' : 'text-slate-900'}`}>
                        {item.linkText} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};
