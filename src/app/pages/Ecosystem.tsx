import React, { useState } from 'react';
import { Activity, Shield, Clock, CheckCircle, Users, Briefcase, Calendar, ArrowRight, Layout, FileText, DollarSign, Headset, Heart, Star, MapPin, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';

export const Ecosystem = () => {
  const [activeTab, setActiveTab] = useState('patients');

  return (
    <div className="min-h-screen bg-white text-brand-900 pt-28">
       <div className="container mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-brand-900">Who We Help</h1>
            <p className="text-lg text-brand-500 leading-relaxed">
              No matter who you are we would love to connect. Get the best physical therapy service from patients looking to feel like their best, to physicians providing a referral. We are here to serve.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mb-24">
            <div className="inline-flex bg-brand-100 rounded-full p-1.5 border border-brand-200">
               {['patients', 'physician referrals', 'careers'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all capitalize tracking-wide ${activeTab === tab ? 'bg-white text-brand-900 shadow-md ring-1 ring-black/5' : 'text-brand-500 hover:text-brand-900'}`}
                  >
                    {tab === 'physician referrals' ? 'Physician Referrals' : tab}
                  </button>
               ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'patients' && (
              <motion.div 
                key="patients"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-20 items-center"
              >
                 <div>
                    <span className="inline-block px-3 py-1 bg-brand-100 text-brand-500 text-xs font-bold uppercase tracking-widest rounded-md mb-6">For Patients</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-900 leading-tight">Healing done at your convenience</h2>
                    <p className="text-lg text-brand-500 mb-10 leading-relaxed">
                       We empower you to reclaim your well-being with personalized care plans and constant support. Our community based doctors are ready to tailor physical therapy to your needs.
                    </p>
                    
                    <div className="space-y-8 mb-10">
                       <BenefitItem 
                         icon={Users} 
                         title="Your Doctor" 
                         desc="Doctors take the time to get to know you and your health journey to create the most effective path to a healthy life." 
                       />
                       <BenefitItem 
                         icon={Headset} 
                         title="Ongoing Support" 
                         desc="Access your dedicated care team 24/7 through our secure portal for guidance whenever you need it." 
                       />
                       <BenefitItem 
                         icon={Layout} 
                         title="Easy Access" 
                         desc="Manage appointments, view records, and track your progress all from one intuitive dashboard." 
                       />
                    </div>

                    <Link to="/intake" className="inline-block bg-[#0BA4AE] text-white px-8 py-4 font-bold rounded-md hover:bg-[#088f98] transition-colors text-sm uppercase tracking-wider shadow-lg shadow-[#0BA4AE]/20">
                      Find Care Now
                    </Link>
                 </div>
                 
                 <div className="bg-brand-100 rounded-3xl p-8 h-[600px] flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://iili.io/qHfB13J.png" 
                      alt="Patient Dashboard Visual" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />
                    {/* Overlay to ensure text readability if needed, or just a style choice */}
                    <div className="absolute inset-0 bg-brand-900/5 mix-blend-multiply" />
                 </div>
              </motion.div>
            )}

            {activeTab === 'physician referrals' && (
              <motion.div 
                key="referrals"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-20 items-center"
              >
                 <div className="order-2 lg:order-1 bg-brand-100 rounded-3xl p-8 h-[500px] flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="https://iili.io/qHfXgRf.png" 
                      alt="Referral Portal Interface" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-900/5 mix-blend-multiply" />
                 </div>
                 
                 <div className="order-1 lg:order-2">
                    <span className="inline-block px-3 py-1 bg-brand-100 text-brand-500 text-xs font-bold uppercase tracking-widest rounded-md mb-6">Physician Referrals</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-900 leading-tight">Streamlined Patient Referrals</h2>
                    <p className="text-lg text-brand-500 mb-10 leading-relaxed">
                       We partner with physicians to extend the continuum of care. Our platform reduces administrative burden while keeping you informed of your patient's outcomes.
                    </p>
                    
                    <div className="space-y-6 mb-10">
                       <CheckItem text="Seamless Information Flow" subtext="We treat physical referrals like we do our patients, keeping you in the loop and providing a seamless funnel of information from doctor of PT to you." />
                       <CheckItem text="Collaborative Improvement" subtext="Be a second set of eyes for our process and suggest ways we can improve the service to the patient, it's both our goals to provide quick and healthy healing." />
                       <CheckItem text="Quick Digital Process" subtext="Our digital process ensures it takes you under 5 minutes with our EHR compatible tools." />
                    </div>

                    <Link to="/model" className="inline-block bg-white text-brand-900 border border-brand-300 px-8 py-4 font-bold rounded-md hover:bg-brand-50 transition-colors text-sm uppercase tracking-wider">
                      Partner With Us
                    </Link>
                 </div>
              </motion.div>
            )}

            {activeTab === 'careers' && (
               <motion.div 
                 key="careers"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.3 }}
                 className="text-center max-w-5xl mx-auto"
               >
                  <span className="inline-block px-3 py-1 bg-[#0BA4AE]/10 text-[#0BA4AE] text-xs font-bold uppercase tracking-widest rounded-md mb-6">Careers</span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-900">Join Our Team</h2>
                  <p className="text-lg text-brand-500 max-w-2xl mx-auto mb-6 leading-relaxed">
                    At ReThrive, we believe that great care starts with great people. We're always looking for passionate, skilled practitioners who want to make a real difference — on their own terms.
                  </p>
                  <p className="text-base text-brand-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                    Whether you're a Physical Therapist, Occupational Therapist, Massage Therapist, or Wellness Coach, ReThrive offers the flexibility, autonomy, and support you need to do your best work — in the community, with patients who truly need you.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
                     <FeatureCard 
                        icon={Clock} 
                        title="Flexible Scheduling" 
                        desc="Set your own hours and build a caseload that works for your life. Our smart matching system fills your calendar with patients that fit your expertise and availability." 
                     />
                     <FeatureCard 
                        icon={FileText} 
                        title="Admin & Billing Support" 
                        desc="We handle the initial screening, scheduling, documentation support, and billing — so you can focus on what you do best: treating patients." 
                     />
                     <FeatureCard 
                        icon={Heart} 
                        title="Collaborative Culture" 
                        desc="Join a holistic team of PT, OT, Massage, and Wellness Coaching professionals who work together to provide comprehensive, interconnected care." 
                     />
                  </div>

                  <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-12 mb-16 text-left max-w-3xl mx-auto">
                     <h3 className="text-2xl font-bold text-brand-900 mb-6">What We Look For</h3>
                     <div className="space-y-4">
                        <CheckItem text="Licensed Practitioners" subtext="Active Arizona state license in PT, OT, Massage Therapy, or Wellness Coaching." />
                        <CheckItem text="Community-Minded" subtext="A genuine passion for in-home, community-based care and building lasting patient relationships." />
                        <CheckItem text="Team Players" subtext="Willingness to collaborate across disciplines and contribute to a holistic care model." />
                        <CheckItem text="Growth-Oriented" subtext="Desire to grow professionally within a supportive, forward-thinking organization." />
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link to="/intake" className="inline-flex items-center gap-2 bg-[#0BA4AE] text-white px-8 py-4 font-bold rounded-md hover:bg-[#088f98] transition-colors text-sm uppercase tracking-wider shadow-lg shadow-[#0BA4AE]/20">
                       <Send className="w-4 h-4" />
                       Apply Now
                     </Link>
                     <a href="mailto:careers@rethrivewellness.com" className="inline-flex items-center gap-2 bg-white text-brand-900 border border-brand-300 px-8 py-4 font-bold rounded-md hover:bg-brand-50 transition-colors text-sm uppercase tracking-wider">
                       <MapPin className="w-4 h-4" />
                       Contact Us
                     </a>
                  </div>
               </motion.div>
            )}
          </AnimatePresence>
       </div>
       
       {/* Bottom CTA Section */}
       <div className="bg-gradient-to-br from-brand-50 via-white to-[#0BA4AE]/5 py-24 text-center px-6 border-t border-brand-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-900">Ready to Get Started?</h2>
          <p className="text-brand-500 max-w-2xl mx-auto mb-10 text-lg">
             Whether you are a patient, a referring physician, or a provider, ReThrive is ready to support your goals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/intake" className="bg-[#0BA4AE] text-white px-8 py-3.5 font-bold rounded-md hover:bg-brand-900 transition-colors text-sm uppercase tracking-wider">
               Get Started
             </Link>
             <button className="bg-white border border-brand-300 text-brand-900 px-8 py-3.5 font-bold rounded-md hover:bg-brand-50 transition-colors text-sm uppercase tracking-wider">
               Contact Support
             </button>
          </div>
       </div>
    </div>
  );
};

const BenefitItem = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="flex gap-5">
     <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 mt-1">
        <Icon className="text-brand-900 w-6 h-6" />
     </div>
     <div>
        <h3 className="text-xl font-bold mb-2 text-brand-900">{title}</h3>
        <p className="text-brand-500 leading-relaxed text-sm md:text-base">{desc}</p>
     </div>
  </div>
);

const CheckItem = ({ text, subtext }: { text: string; subtext: string }) => (
  <div className="flex gap-4">
     <CheckCircle className="text-brand-900 w-6 h-6 shrink-0 mt-0.5" fill="black" stroke="white" />
     <div>
        <span className="text-lg font-bold text-brand-900 block mb-1">{text}</span>
        <p className="text-brand-500 text-sm leading-relaxed">{subtext}</p>
     </div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
   <div className="bg-brand-50 border border-brand-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-6">
         <Icon className="text-brand-900 w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold mb-3 text-brand-900">{title}</h3>
      <p className="text-brand-500 text-sm leading-relaxed">{desc}</p>
   </div>
);