import React from 'react';
import { ArrowLeft, Award, Calendar, Clock, Star, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router';

export const ClinicianProfile = () => {
  const { id } = useParams();
  const idNum = parseInt(id || '0');
  
  const profiles = [
    {
        name: "Dr. Emily Ross",
        title: "DPT, OCS",
        role: "Lead Physical Therapist",
        specialties: ["Orthopedics", "Post-Surgical Rehab", "Manual Therapy"],
        bio: "Dr. Emily Ross is a Board Certified Orthopedic Clinical Specialist with over 10 years of experience. She specializes in complex shoulder and knee rehabilitation, helping patients return to their active lifestyles faster. Her approach combines hands-on manual therapy with targeted corrective exercises.",
        education: [
          "Doctor of Physical Therapy, University of Southern California",
          "BS in Kinesiology, Arizona State University",
          "Orthopedic Clinical Specialist (OCS) Board Certification"
        ],
        availability: "Mon, Wed, Fri",
        rating: 4.9,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
        name: "Dr. Michael Chang",
        title: "DPT, SCS",
        role: "Sports Rehabilitation Specialist",
        specialties: ["Sports Rehab", "Return to Sport", "ACL Prevention"],
        bio: "Dr. Michael Chang brings elite-level sports rehabilitation to the home setting. With a background working with collegiate and professional athletes, he focuses on high-level performance metrics, biomechanics, and return-to-sport testing.",
        education: [
          "Doctor of Physical Therapy, Duke University",
          "Sports Clinical Specialist (SCS) Residency",
          "Certified Strength & Conditioning Specialist (CSCS)"
        ],
        availability: "Tue, Thu, Sat",
        rating: 5.0,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
        name: "Dr. Sarah Johnson",
        title: "PsyD",
        role: "Mental Health & Performance Coach",
        specialties: ["Mental Health", "Performance Anxiety", "Pain Psychology"],
        bio: "Dr. Sarah Johnson helps patients bridge the gap between physical recovery and mental resilience. She specializes in pain psychology and helping athletes overcome the mental barriers associated with injury and recovery.",
        education: [
          "Doctor of Psychology (PsyD), Stanford University",
          "MA in Sport Psychology",
          "Certified Mental Performance Consultant"
        ],
        availability: "Mon, Tue, Thu",
        rating: 4.8,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const clinician = profiles[idNum] || profiles[0];

  return (
    <div className="min-h-screen bg-white text-brand-900 pt-28 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Back Link */}
        <Link to="/experts" className="inline-flex items-center gap-2 text-brand-500 hover:text-brand-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Experts
        </Link>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Photo & Quick Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="aspect-[3/4] bg-brand-100 rounded-2xl overflow-hidden border border-brand-200 relative">
               <img 
                 src={clinician.image} 
                 alt={clinician.name} 
                 className="w-full h-full object-cover grayscale"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D3436]/90 to-transparent p-6 pt-20">
                  <div className="flex items-center gap-2 text-[#0BA4AE] font-bold mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{clinician.rating} / 5.0</span>
                    <span className="text-brand-500 text-sm font-normal">({clinician.reviews} reviews)</span>
                  </div>
               </div>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 space-y-4">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/10 flex items-center justify-center text-[#0BA4AE]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-500 uppercase font-bold tracking-wider">Experience</p>
                    <p className="font-medium text-brand-900">10+ Years</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/10 flex items-center justify-center text-[#0BA4AE]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-500 uppercase font-bold tracking-wider">Service Area</p>
                    <p className="font-medium text-brand-900">Scottsdale & Phoenix</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0BA4AE]/10 flex items-center justify-center text-[#0BA4AE]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-500 uppercase font-bold tracking-wider">Availability</p>
                    <p className="font-medium text-brand-900">{clinician.availability}</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-8">
             <div className="mb-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{clinician.name}</h1>
                <p className="text-xl text-[#0BA4AE] font-medium">{clinician.title} — {clinician.role}</p>
             </div>

             <div className="flex flex-wrap gap-2 my-6">
                {clinician.specialties.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-brand-50 border border-brand-200 rounded-full text-xs font-semibold text-brand-600 uppercase tracking-wider">
                      {tag}
                   </span>
                ))}
             </div>

             <div className="prose prose-lg max-w-none text-brand-500 mb-12">
                <p>{clinician.bio}</p>
             </div>

             <div className="mb-12">
                <h3 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                   <Award className="w-5 h-5 text-[#0BA4AE]" />
                   Education & Certifications
                </h3>
                <ul className="space-y-4">
                   {clinician.education.map((edu, i) => (
                      <li key={i} className="flex items-start gap-4 p-4 bg-brand-50 rounded-lg border border-brand-100">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#0BA4AE] mt-2.5 shrink-0" />
                         <span className="text-brand-700">{edu}</span>
                      </li>
                   ))}
                </ul>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 border-t border-brand-200 pt-8">
                <Link to="/intake" className="px-8 py-4 bg-[#0BA4AE] text-white font-bold rounded-sm hover:bg-[#088f98] transition-colors text-center uppercase tracking-wide">
                   Book Evaluation with {clinician.name.split(' ').slice(1).join(' ')}
                </Link>
                <button className="px-8 py-4 border border-brand-300 text-brand-900 font-bold rounded-sm hover:bg-brand-50 transition-colors text-center uppercase tracking-wide">
                   Contact for Questions
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};