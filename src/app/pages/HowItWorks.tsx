import React from 'react';
import { Link } from 'react-router';
import { 
  Clock, 
  Home, 
  UserCheck, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Activity,
  ArrowRight,
  Star
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-20">
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 border-b border-neutral-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0BA4AE]/10 text-[#0BA4AE] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" />
            Transparent & Patient-Focused
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 tracking-tight leading-tight">
            How ReThrive Works
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            We've redesigned physical therapy to put you first. No insurance barriers, no rushed visits—just expert care delivered to your door.
          </p>
        </div>
      </section>

      {/* The ReThrive Model */}
      <section className="py-20 container mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">Physical Therapy Done Your Way</h2>
            <p className="text-neutral-600 text-lg max-w-2xl">See how we tailor the physical therapy experience so it aligns with your healing goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#0BA4AE]/10 rounded-xl flex items-center justify-center mb-6">
                    <UserCheck className="w-6 h-6 text-[#0BA4AE]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Roadmap</h3>
                <p className="text-neutral-600 leading-relaxed">
                    We build a custom recovery plan tailored to your specific goals, and as you progress we adjust so your recovery is healthy and seamless.
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-sm font-semibold text-neutral-900">Why it matters:</p>
                    <p className="text-sm text-neutral-500">No need to follow a strict guideline like many other clinics, our goal is to get you healthy.</p>
                </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#0BA4AE]/10 rounded-xl flex items-center justify-center mb-6">
                    <Clock className="w-6 h-6 text-[#0BA4AE]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full 60min Sessions</h3>
                <p className="text-neutral-600 leading-relaxed">
                    Get a doctor's undivided attention for a full 60 minutes, we come with the proper equipment and do all the work ourselves.
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-sm font-semibold text-neutral-900">Why it matters:</p>
                    <p className="text-sm text-neutral-500">We accomplish in 1 visit what typically takes 3 at a standard clinic.</p>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#0BA4AE]/10 rounded-xl flex items-center justify-center mb-6">
                    <Home className="w-6 h-6 text-[#0BA4AE]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Privacy and Convenience</h3>
                <p className="text-neutral-600 leading-relaxed">
                    Our in home service not only minimizes the time you have to take out of your day, but also provides you with privacy. Something we take very seriously.
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-sm font-semibold text-neutral-900">Why it matters:</p>
                    <p className="text-sm text-neutral-500">No travel time, or peering eyes of the public. Confidentiality in what we do.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Direct Pay Explained */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Direct Pay, Clearly Explained</h2>
                    <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        We operate out-of-network to remove the "middleman" from your healthcare. This allows us to make decisions based on what's best for <i>you</i>, not what an insurance adjuster approves.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/20 flex-shrink-0 flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-[#0BA4AE]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Total Cost Transparency</h4>
                                <p className="text-neutral-400 text-sm">You know exactly what you pay upfront. No surprise bills months later.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/20 flex-shrink-0 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-[#0BA4AE]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Faster Recovery = Lower Total Cost</h4>
                                <p className="text-neutral-400 text-sm">Most patients are discharged in 5-8 visits, compared to 20+ in traditional clinics. You save time and money.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Card */}
                <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
                    <h3 className="text-xl font-bold mb-6 text-center">Cost vs. Outcome</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-700">
                            <span className="text-neutral-400 text-sm uppercase tracking-wider">Traditional PT</span>
                            <span className="text-[#0BA4AE] text-sm uppercase tracking-wider font-bold text-right">ReThrive</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 items-center">
                            <div>
                                <div className="text-2xl font-bold text-neutral-500">$30 - $60</div>
                                <div className="text-xs text-neutral-500">Co-pay per visit</div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-white">Flat Rate</div>
                                <div className="text-xs text-neutral-400">Per session</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center">
                            <div>
                                <div className="text-xl font-bold text-neutral-500">20 - 30</div>
                                <div className="text-xs text-neutral-500">Visits required</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-white">5 - 10</div>
                                <div className="text-xs text-neutral-400">Visits required</div>
                            </div>
                        </div>

                         <div className="grid grid-cols-2 gap-4 items-center pt-4 border-t border-neutral-700">
                            <div>
                                <div className="text-sm font-medium text-neutral-500">Total Time Cost:</div>
                                <div className="text-lg font-bold text-neutral-400">40+ Hours</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-medium text-neutral-400">Total Time Cost:</div>
                                <div className="text-lg font-bold text-[#0BA4AE]">~8 Hours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* What Results Look Like */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">What Results from In-House Doctor Visits Look Like</h2>
            <p className="text-neutral-600 text-lg">Hear about real outcomes from patients who got our simplified doctor lead, focused approach.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-neutral-200">
                {/* Patient Profile */}
                <div className="flex items-center gap-3 mb-4">
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1675106644038-310da7ca0df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYW4lMjBnb2xmZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA4NjM4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Robert M."
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <p className="font-bold text-sm text-neutral-900">Robert M.</p>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md uppercase">Back Pain</span>
                </div>
                <h4 className="font-bold text-lg mb-2">\"Back to Golf in 3 Weeks\"</h4>
                <p className="text-neutral-600 text-sm mb-4">
                    Patient was told they needed surgery. After 3 weeks of targeted manual therapy and core stabilization, they played 18 holes pain-free.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
                    <CheckCircle2 className="w-4 h-4 text-[#0BA4AE]" />
                    <span>Surgery Avoided</span>
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-neutral-200">
                {/* Patient Profile */}
                <div className="flex items-center gap-3 mb-4">
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1496672254107-b07a26403885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3b21hbiUyMGdyYW5kbW90aGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODYzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Linda S."
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <p className="font-bold text-sm text-neutral-900">Linda S.</p>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                     <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-md uppercase">Shoulder</span>
                </div>
                <h4 className="font-bold text-lg mb-2">\"Lifting Grandkids Again\"</h4>
                <p className="text-neutral-600 text-sm mb-4">
                    Chronic shoulder pain prevented lifting overhead. Through dry needling and progressive loading, full range of motion restored in 6 visits.
                </p>
                 <div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
                    <CheckCircle2 className="w-4 h-4 text-[#0BA4AE]" />
                    <span>Full ROM Restored</span>
                </div>
            </div>

            {/* Testimonial 3 */}
             <div className="bg-slate-50 p-6 rounded-xl border border-neutral-200">
                {/* Patient Profile */}
                <div className="flex items-center gap-3 mb-4">
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1768208718216-5642b5ae9cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHJ1bm5lciUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODYzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Jennifer K."
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                        <p className="font-bold text-sm text-neutral-900">Jennifer K.</p>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                     <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-md uppercase">Performance</span>
                </div>
                <h4 className="font-bold text-lg mb-2">\"PR on Marathon Time\"</h4>
                <p className="text-neutral-600 text-sm mb-4">
                    Runner dealing with nagging knee pain. Biomechanical analysis corrected gait issues. Not only did pain vanish, pace improved by 30s/mile.
                </p>
                 <div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
                    <CheckCircle2 className="w-4 h-4 text-[#0BA4AE]" />
                    <span>Performance Boost</span>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0BA4AE] py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Experience the Difference?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Stop waiting for approvals and start healing. Book your initial evaluation today.
            </p>
            <Link 
                to="/intake"
                className="inline-flex items-center gap-2 bg-[#1c1c1c] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-neutral-900 hover:scale-105 transition-all shadow-xl"
            >
                Get Started
                <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
      </section>

    </div>
  );
};