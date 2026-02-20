import React from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { BrandBackground } from '../components/ui/BrandBackground';

const teamMembers = [
  {
    name: 'Dr. Eric Ullman',
    role: 'Physical Therapist',
    credentials: 'DPT',
    image: 'https://iili.io/qHfxdP9.png',
    bio: [
      'Dr. Eric Ullman has been a Physical Therapist since 2003. He graduated with a Bachelor of Science in Physiological Sciences from the University of Arizona in Tucson, and went on to earn his Doctorate degree in Physical Therapy at the University of St. Augustine for Health Sciences in St. Augustine, Florida.',
      'Dr. Ullman is a member of both the American Physical Therapy Association and Arizona Physical Therapy Association. On a variety of occasions he has served as guest lecturer on numerous topics and has volunteered for many events benefiting charities within the community.',
      'Dr. Ullman chose Physical Therapy due to his interest in physiology and kinesiology, and his desire to work with people one on one, and see them through the entire rehabilitation process.'
    ]
  },
  {
    name: 'Jennifer Stout',
    role: 'Physical Therapist',
    credentials: 'DPT',
    image: 'https://iili.io/qHfz41t.png',
    bio: [
      'Jennifer Stout is originally from Santa Fe, New Mexico and moved to Tucson, Arizona to attend The University of Arizona where she graduated with a Bachelor of Science in Physiological Sciences.',
      'She then attended Nova Southeastern University in Fort Lauderdale, Florida for her Master and Doctorate Degrees of Physical therapy. She has been a Physical Therapist since 2005 working in orthopedics mainly in Scottsdale, Arizona.',
      "Jennifer's interests in physical therapy came from a background of playing and having a love of sports. Through the use of manual therapy and patient specific exercise, Jennifer tailors her treatments based on patient needs to help improve their function and overall quality of life."
    ]
  },
  {
    name: 'Lynsey Schmidt',
    role: 'Physical Therapist',
    credentials: 'PT',
    image: 'https://iili.io/qHfOJpa.jpg',
    bio: [
      'Lynsey grew up in a small town in Northern Minnesota where her passion for sports of all kinds began. She loved going to the aerobics classes her Mom taught in the 80s (the days of leg warmers and leotards) and credits her Mom\'s focus on exercise as the vehicle that led to her interest in health and fitness.',
      'She attended the University of North Dakota and completed her degree in Physical Therapy in 2001. While at UND she met her husband Luke, and they set off on an "adventure" in Arizona for his career, while she completed her last clinical rotations for PT school. Once arriving in AZ, they soon found this was where they wanted to live and raise their family.',
      'Lynsey has worked in the outpatient physical therapy setting for the last 23 years and loves the relationships she has been able to build during that time with patients and colleagues. She considers the best part of her day when patients become friends, and she gets to witness them exceeding their expectations as they get back to living life the way they dreamed of.',
      'She believes that keeping things simple, listening, using hands on skills, and exercise are the key to helping people improve. She is excited to be able to spend more time with patients, giving them her one on one attention.'
    ]
  },
  {
    name: 'Gary Whittington',
    role: 'Massage Therapist',
    credentials: 'LMT',
    image: 'https://iili.io/qHfoTvf.png',
    bio: [
      'Gary Whittington is a seasoned massage therapist with over 29 years of experience. Specializing in medical and fascia release massage, he provides therapeutic treatments tailored to individual needs.',
      'With certifications in various modalities, Gary effectively addresses chronic pain and supports rehabilitation. His warm and compassionate nature creates a safe environment for clients to experience healing and relaxation.',
      'Dedicated to ongoing learning, he stays updated on the latest advancements in massage therapy. Gary is passionate about promoting wellness and enhancing the quality of life through his work.'
    ]
  },
  {
    name: 'Melissa Lewis-Duarte',
    role: 'Health and Wellness Coach',
    credentials: 'Ph.D., NBC-HWC',
    image: 'https://iili.io/qHfk3fp.jpg',
    bio: [
      'Melissa Lewis-Duarte has a Ph.D. in Psychology and is a Nationally Board-Certified Health and Wellness Coach (NBC-HWC). She worked in business consulting, corporate training, and higher education prior to receiving her certification in Integrative Wellness Coaching from the Andrew Weil Center for Integrative Medicine.',
      'She founded Working On Calm, LLC to explore simple, science-based strategies for a calmer, healthier life. It is her mission to help others prioritize health and wellness, emphasizing practical strategies for reducing stress and increasing resilience.',
      'She lives in Scottsdale, AZ with her husband and three young boys. Through the coaching process, you reach your health and wellness goals by working one-on-one with our certified coach. Ongoing support and accountability help you prioritize your health, make simple-science-based changes, and develop healthier habits.'
    ]
  }
];

export const Experts = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero Section with Brand Background */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#1c1c1c]">
        <BrandBackground scrollStyle={{ y }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl mb-6 text-white">Meet Our Expert Team</h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              Dedicated professionals committed to your recovery, wellness, and long-term health. 
              Each member of our team brings years of experience and a passion for helping you thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 md:gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:border-[#0BA4AE]/50 transition-colors group shadow-sm hover:shadow-lg"
            >
              <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-0">
                {/* Image */}
                <div className="relative h-80 md:h-full bg-neutral-200 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-[#0BA4AE] px-4 py-2 rounded-sm text-xs font-semibold text-white uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl mb-2 text-neutral-900">{member.name}</h3>
                    <p className="text-[#0BA4AE] font-medium">{member.credentials}</p>
                  </div>
                  
                  <div className="space-y-4 text-neutral-700 leading-relaxed">
                    {member.bio.map((paragraph, i) => (
                      <p key={i} className="text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section with Brand Background */}
      <section className="relative py-24 overflow-hidden bg-[#1c1c1c]">
        <BrandBackground scrollStyle={{ y }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl mb-6 text-white">Ready to Start Your Journey?</h2>
            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
              Work with our experienced team to achieve your health and wellness goals. 
              We're here to support you every step of the way.
            </p>
            <Link 
              to="/intake" 
              className="inline-block bg-[#0BA4AE] text-white px-10 py-4 rounded-sm hover:bg-[#088f98] transition-colors uppercase tracking-wider"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};