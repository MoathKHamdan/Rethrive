import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Activity, Heart, Brain } from "lucide-react";

const services = [
  {
    category: "Physical Therapy",
    title: "Expert Care at Home",
    description: "Specialized treatment for orthopedic injuries, post-surgical recovery, chronic pain, sports injuries, balance disorders, and joint replacements. Our doctors of physical therapy bring clinical expertise directly to your door in Phoenix and Scottsdale.",
    icon: Activity,
    tags: ["ORTHOPEDIC", "POST-SURGICAL", "PAIN MANAGEMENT", "SPORTS REHAB"]
  },
  {
    category: "Occupational Therapy",
    title: "Function & Independence",
    description: "Comprehensive occupational therapy focused on daily living activities, fine motor skills, work-related rehabilitation, and adaptive strategies. Get back to the activities that matter most with personalized in-home treatment plans.",
    icon: Heart,
    tags: ["DAILY LIVING", "FINE MOTOR", "WORK REHAB", "INDEPENDENCE"]
  },
  {
    category: "Wellness Coaching",
    title: "Holistic Health Support",
    description: "One-on-one health and wellness coaching to help you achieve sustainable lifestyle changes. Focus on stress reduction, nutrition guidance, sleep optimization, exercise habits, and building resilience for long-term wellness.",
    icon: Brain,
    tags: ["STRESS MANAGEMENT", "LIFESTYLE", "NUTRITION", "RESILIENCE"]
  }
];

const ANIMATION_CONFIG = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
           style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '30px 30px'
           }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-20 mx-auto text-center">
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-8"
             >
                <h2 className="text-5xl md:text-6xl font-black text-[#111111] tracking-tight leading-[1.1]">
                    In Home Physical Therapy. <br />
                    No Doctor Referral Needed.
                </h2>
             </motion.div>
             <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-slate-600 leading-relaxed text-lg"
             >
                <p>
                    ReThrive Wellness brings top-tier physical therapy directly to your home in Phoenix and Scottsdale. With no need for doctor referrals we make the process painless. No need for rushed appointments or divided attention, our 60-minute blocks with licensed doctors of physical therapy will get you feeling great in no time.
                </p>
             </motion.div>
        </div>

        <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="group relative bg-[#1a1a1a] rounded-[24px] overflow-hidden p-8 md:p-10 flex flex-col shadow-2xl hover:shadow-[#0BA4AE]/10 border border-white/5 hover:border-[#0BA4AE]/50 transition-all duration-300"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-[#0BA4AE] text-white">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-medium text-white">{service.category}</h3>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {service.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-[#2a2a2a] text-[10px] font-bold text-[#0BA4AE] rounded uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h4 className="text-xl font-bold text-white uppercase tracking-wide">{service.title}</h4>
                        <p className="text-slate-400 leading-relaxed text-base">
                            {service.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};