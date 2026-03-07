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
  Star,
  Phone,
  MessageSquare,
  FileText,
  Heart
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white text-brand-900 pt-28">
      
      {/* Hero Section */}
      <section className="bg-brand-50 py-20 border-b border-brand-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0BA4AE]/10 text-[#0BA4AE] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4" />
            Transparent & Patient-Focused
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-900 mb-6 tracking-tight leading-tight">
            How ReThrive Works
          </h1>
          <p className="text-xl text-brand-600 leading-relaxed max-w-2xl mx-auto">
            We've redesigned physical therapy to put you first. No insurance barriers, no rushed visits—just expert care delivered to your door.
          </p>
        </div>
      </section>

      {/* Your Roadmap - matching the Process component */}
      <section className="py-20 container mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#0BA4AE] font-bold tracking-wider uppercase text-sm mb-4 block">
            Your Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-900">Start the Process to Recovery Today</h2>
          <p className="text-brand-600 text-lg max-w-2xl">We've streamlined the physical therapy experience. No hurdles, no confusion—just a clear, effective path to getting you back to your best self.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 text-[#0BA4AE] group-hover:bg-[#0BA4AE] group-hover:text-white transition-all duration-500 relative">
              <Phone className="w-8 h-8" strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#2D3436] text-white text-xs font-bold rounded-full border-2 border-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D3436] group-hover:text-[#0BA4AE] transition-colors">Reach Out</h3>
            <p className="text-brand-600 leading-relaxed">
              Fill out our contact form or call us directly at <a href="tel:4809358225" className="text-[#0BA4AE] font-bold hover:underline">(480) 935-8225</a>. No pressure, no commitment — just the first step toward feeling better.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 text-[#0BA4AE] group-hover:bg-[#0BA4AE] group-hover:text-white transition-all duration-500 relative">
              <MessageSquare className="w-8 h-8" strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#2D3436] text-white text-xs font-bold rounded-full border-2 border-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D3436] group-hover:text-[#0BA4AE] transition-colors">Talk with Your Patient Coordinator</h3>
            <p className="text-brand-600 leading-relaxed">
              Within 48 hours, your dedicated patient coordinator will reach out to learn about your needs, answer your questions, and start building your care plan.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 text-[#0BA4AE] group-hover:bg-[#0BA4AE] group-hover:text-white transition-all duration-500 relative">
              <FileText className="w-8 h-8" strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#2D3436] text-white text-xs font-bold rounded-full border-2 border-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D3436] group-hover:text-[#0BA4AE] transition-colors">Consult & Schedule</h3>
            <p className="text-brand-600 leading-relaxed">
              Your coordinator connects you with the right practitioner to discuss your goals, review your options, and schedule your first session.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow relative group">
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6 text-[#0BA4AE] group-hover:bg-[#0BA4AE] group-hover:text-white transition-all duration-500 relative">
              <Heart className="w-8 h-8" strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#2D3436] text-white text-xs font-bold rounded-full border-2 border-white">4</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#2D3436] group-hover:text-[#0BA4AE] transition-colors">ReThrive</h3>
            <p className="text-brand-600 leading-relaxed">
              Your practitioner arrives at your door, and your journey to feeling your best begins. Welcome to a new standard of care.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/intake" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0BA4AE] text-white font-bold rounded-sm hover:bg-[#2D3436] transition-colors duration-300 uppercase tracking-wide">
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-brand-500">
            or call us at <a href="tel:4809358225" className="text-[#0BA4AE] font-bold hover:underline">(480) 935-8225</a>
          </p>
        </div>
      </section>

      {/* The ReThrive Model */}
      <section className="py-20 bg-brand-50 border-y border-brand-100">
        <div className="container mx-auto px-6">
          <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-900">Physical Therapy Done Your Way</h2>
              <p className="text-brand-600 text-lg max-w-2xl">See how we tailor the physical therapy experience so it aligns with your healing goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#0BA4AE]/10 rounded-xl flex items-center justify-center mb-6">
                      <UserCheck className="w-6 h-6 text-[#0BA4AE]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Personalized Roadmap</h3>
                  <p className="text-brand-600 leading-relaxed">
                      We build a custom recovery plan tailored to your specific goals, and as you progress we adjust so your recovery is healthy and seamless.
                  </p>
                  <div className="mt-4 pt-4 border-t border-brand-100">
                      <p className="text-sm font-semibold text-brand-900">Why it matters:</p>
                      <p className="text-sm text-brand-500">No need to follow a strict guideline like many other clinics, our goal is to get you healthy.</p>
                  </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#0BA4AE]/10 rounded-xl flex items-center justify-center mb-6">
                      <Clock className="w-6 h-6 text-[#0BA4AE]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Full 60min Sessions</h3>
                  <p className="text-brand-600 leading-relaxed">
                      Get a doctor's undivided attention for a full 60 minutes, we come with the proper equipment and do all the work ourselves.
                  </p>
                  <div className="mt-4 pt-4 border-t border-brand-100">
                      <p className="text-sm font-semibold text-brand-900">Why it matters:</p>
                      <p className="text-sm text-brand-500">We accomplish in 1 visit what typically takes 3 at a standard clinic.</p>
                  </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#0BA4AE]/10 rounded-xl flex items-center justify-center mb-6">
                      <Home className="w-6 h-6 text-[#0BA4AE]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Privacy and Convenience</h3>
                  <p className="text-brand-600 leading-relaxed">
                      Our in home service not only minimizes the time you have to take out of your day, but also provides you with privacy. Something we take very seriously.
                  </p>
                  <div className="mt-4 pt-4 border-t border-brand-100">
                      <p className="text-sm font-semibold text-brand-900">Why it matters:</p>
                      <p className="text-sm text-brand-500">No travel time, or peering eyes of the public. Confidentiality in what we do.</p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Direct Pay Explained */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-brand-900">Direct Pay, Clearly Explained</h2>
                    <p className="text-brand-500 text-lg mb-8 leading-relaxed">
                        We operate out-of-network to remove the "middleman" from your healthcare. This allows us to make decisions based on what's best for <i>you</i>, not what an insurance adjuster approves.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/10 flex-shrink-0 flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-[#0BA4AE]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-brand-900">Total Cost Transparency</h4>
                                <p className="text-brand-500 text-sm">You know exactly what you pay upfront. No surprise bills months later.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/10 flex-shrink-0 flex items-center justify-center">
                                <Activity className="w-5 h-5 text-[#0BA4AE]" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1 text-brand-900">Faster Recovery = Lower Total Cost</h4>
                                <p className="text-brand-500 text-sm">Most patients are discharged in 5-8 visits, compared to 20+ in traditional clinics. You save time and money.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison Card */}
                <div className="bg-white rounded-2xl p-8 border border-brand-200 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-center text-brand-900">Cost vs. Outcome</h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-brand-200">
                            <span className="text-brand-400 text-sm uppercase tracking-wider">Traditional PT</span>
                            <span className="text-[#0BA4AE] text-sm uppercase tracking-wider font-bold text-right">ReThrive</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 items-center">
                            <div>
                                <div className="text-2xl font-bold text-brand-400">$30 - $60</div>
                                <div className="text-xs text-brand-400">Co-pay per visit</div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-brand-900">Flat Rate</div>
                                <div className="text-xs text-brand-500">Per session</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center">
                            <div>
                                <div className="text-xl font-bold text-brand-400">20 - 30</div>
                                <div className="text-xs text-brand-400">Visits required</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-brand-900">5 - 10</div>
                                <div className="text-xs text-brand-500">Visits required</div>
                            </div>
                        </div>

                         <div className="grid grid-cols-2 gap-4 items-center pt-4 border-t border-brand-200">
                            <div>
                                <div className="text-sm font-medium text-brand-400">Total Time Cost:</div>
                                <div className="text-lg font-bold text-brand-400">40+ Hours</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-medium text-brand-500">Total Time Cost:</div>
                                <div className="text-lg font-bold text-[#0BA4AE]">~8 Hours</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* What Results Look Like */}
      <section className="py-20 bg-brand-50 border-y border-brand-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-900">What Results from In-House Doctor Visits Look Like</h2>
              <p className="text-brand-600 text-lg">Hear about real outcomes from patients who got our simplified doctor lead, focused approach.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-xl border border-brand-200">
                  {/* Patient Profile */}
                  <div className="flex items-center gap-3 mb-4">
                      <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1675106644038-310da7ca0df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYW4lMjBnb2xmZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA4NjM4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Robert M."
                          className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                          <p className="font-bold text-sm text-brand-900">Robert M.</p>
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
                  <p className="text-brand-600 text-sm mb-4">
                      Patient was told they needed surgery. After 3 weeks of targeted manual therapy and core stabilization, they played 18 holes pain-free.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-900">
                      <CheckCircle2 className="w-4 h-4 text-[#0BA4AE]" />
                      <span>Surgery Avoided</span>
                  </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-xl border border-brand-200">
                  {/* Patient Profile */}
                  <div className="flex items-center gap-3 mb-4">
                      <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1496672254107-b07a26403885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3b21hbiUyMGdyYW5kbW90aGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODYzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Linda S."
                          className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                          <p className="font-bold text-sm text-brand-900">Linda S.</p>
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
                  <p className="text-brand-600 text-sm mb-4">
                      Chronic shoulder pain prevented lifting overhead. Through dry needling and progressive loading, full range of motion restored in 6 visits.
                  </p>
                   <div className="flex items-center gap-2 text-sm font-medium text-brand-900">
                      <CheckCircle2 className="w-4 h-4 text-[#0BA4AE]" />
                      <span>Full ROM Restored</span>
                  </div>
              </div>

              {/* Testimonial 3 */}
               <div className="bg-white p-6 rounded-xl border border-brand-200">
                  {/* Patient Profile */}
                  <div className="flex items-center gap-3 mb-4">
                      <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1768208718216-5642b5ae9cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHJ1bm5lciUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODYzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Jennifer K."
                          className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                          <p className="font-bold text-sm text-brand-900">Jennifer K.</p>
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
                  <p className="text-brand-600 text-sm mb-4">
                      Runner dealing with nagging knee pain. Biomechanical analysis corrected gait issues. Not only did pain vanish, pace improved by 30s/mile.
                  </p>
                   <div className="flex items-center gap-2 text-sm font-medium text-brand-900">
                      <CheckCircle2 className="w-4 h-4 text-[#0BA4AE]" />
                      <span>Performance Boost</span>
                  </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                  to="/intake"
                  className="inline-flex items-center gap-2 bg-[#2D3436] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-brand-700 hover:scale-105 transition-all shadow-xl"
              >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                  href="tel:4809358225"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wide hover:bg-white/30 transition-all"
              >
                  <Phone className="w-5 h-5" />
                  (480) 935-8225
              </a>
            </div>
        </div>
      </section>

    </div>
  );
};