import React from "react";
import { motion } from "motion/react";
import { Activity, Heart, Hand, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const disciplines = [
  {
    icon: Activity,
    label: "Physical Therapy",
    abbr: "PT",
    color: "#0BA4AE",
    description: "Restore movement, reduce pain, and rebuild strength with doctoral-level care.",
  },
  {
    icon: Heart,
    label: "Occupational Therapy",
    abbr: "OT",
    color: "#088f98",
    description: "Regain independence in daily activities with hands-on, personalized treatment.",
  },
  {
    icon: Hand,
    label: "Massage Therapy",
    abbr: "MT",
    color: "#0F7B7F",
    description: "Release tension, improve circulation, and support recovery through therapeutic massage.",
  },
  {
    icon: Brain,
    label: "Wellness Coaching",
    abbr: "WC",
    color: "#0BA4AE",
    description: "Build resilience, manage stress, and create sustainable habits for lifelong health.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const HolisticApproach = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle warm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafa] via-white to-[#f0fafa] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-[#0BA4AE] font-bold tracking-wider uppercase text-sm mb-4 block">
            A Holistic Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2D3436] tracking-tight leading-tight mb-6">
            Taking Care of All of{" "}
            <span className="text-[#0BA4AE] italic">You</span>
          </h2>
          <p className="text-brand-600 text-lg leading-relaxed">
            At ReThrive, we don't just treat symptoms — we treat the whole person. Our practitioners work as a connected team, combining disciplines to achieve the best possible outcomes for you and your family.
          </p>
        </motion.div>

        {/* The Wheel / Connected Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Visual - The Connected Wheel */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#0BA4AE] to-[#088f98] flex items-center justify-center shadow-2xl shadow-[#0BA4AE]/20 z-10">
                <div className="text-center text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">You</p>
                  <p className="text-lg md:text-xl font-black mt-1">ReThrive</p>
                </div>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 400">
                <line x1="200" y1="200" x2="200" y2="50" stroke="#0BA4AE" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                <line x1="200" y1="200" x2="350" y2="200" stroke="#0BA4AE" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                <line x1="200" y1="200" x2="200" y2="350" stroke="#0BA4AE" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                <line x1="200" y1="200" x2="50" y2="200" stroke="#0BA4AE" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
                {/* Circular connection between disciplines */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="#0BA4AE" strokeWidth="1" strokeDasharray="4 6" opacity="0.15" />
              </svg>

              {/* Discipline nodes - positioned around the circle */}
              {disciplines.map((d, i) => {
                const positions = [
                  { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
                  { top: "50%", right: "0%", transform: "translate(0, -50%)" },
                  { bottom: "0%", left: "50%", transform: "translate(-50%, 0)" },
                  { top: "50%", left: "0%", transform: "translate(0, -50%)" },
                ];
                return (
                  <motion.div
                    key={d.abbr}
                    className="absolute z-10"
                    style={positions[i] as React.CSSProperties}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border-2 border-[#0BA4AE]/20 shadow-lg flex flex-col items-center justify-center hover:border-[#0BA4AE] hover:shadow-xl transition-all duration-300 cursor-default group">
                      <d.icon className="w-6 h-6 md:w-7 md:h-7 text-[#0BA4AE] group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] md:text-xs font-bold text-[#2D3436] mt-1.5 uppercase tracking-wide">
                        {d.abbr}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Discipline Details */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {disciplines.map((d) => (
                <motion.div
                  key={d.abbr}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 border border-brand-100 hover:border-[#0BA4AE]/30 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0BA4AE]/10 flex items-center justify-center group-hover:bg-[#0BA4AE] transition-colors duration-300">
                      <d.icon className="w-5 h-5 text-[#0BA4AE] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-[#2D3436]">{d.label}</h3>
                  </div>
                  <p className="text-brand-500 text-sm leading-relaxed">
                    {d.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Team collaboration message */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-gradient-to-r from-[#0BA4AE]/5 to-[#088f98]/5 rounded-2xl p-6 border border-[#0BA4AE]/10"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex -space-x-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#0BA4AE] flex items-center justify-center text-white text-xs font-bold border-2 border-white">PT</div>
                  <div className="w-10 h-10 rounded-full bg-[#088f98] flex items-center justify-center text-white text-xs font-bold border-2 border-white">OT</div>
                  <div className="w-10 h-10 rounded-full bg-[#0F7B7F] flex items-center justify-center text-white text-xs font-bold border-2 border-white">MT</div>
                  <div className="w-10 h-10 rounded-full bg-[#0BA4AE] flex items-center justify-center text-white text-xs font-bold border-2 border-white">WC</div>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[#2D3436] mb-1">
                    One team, one goal — your recovery.
                  </p>
                  <p className="text-brand-500 text-sm leading-relaxed">
                    Our practitioners collaborate and can combine treatments to achieve faster, more complete results.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Visual strip with warm imagery */}
        <motion.div
          className="grid grid-cols-3 gap-4 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758599879024-7379d769f664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcGlzdCUyMGhlbHBpbmclMjBwYXRpZW50JTIwc3RyZXRjaCUyMGhvbWV8ZW58MXx8fHwxNzcyNTQyNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Physical therapist working with patient"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1769029271190-36b22f5e6771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwdGhlcmFweSUyMGhhbmRzJTIwYmFjayUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzI1NDI1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wellness and massage therapy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581579187106-a8af45d736e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGNvYWNoaW5nJTIwaGVhbHRoeSUyMGZhbWlseSUyMG91dGRvb3IlMjBhY3RpdmV8ZW58MXx8fHwxNzcyNTQyNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Family wellness and exercise"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/intake"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0BA4AE] text-white font-bold rounded-sm hover:bg-brand-900 transition-colors uppercase tracking-wide shadow-lg shadow-[#0BA4AE]/20"
          >
            Start Your Holistic Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};