import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { HolisticApproach } from '../components/HolisticApproach';
import { WhyUs } from '../components/WhyUs';
import { Process } from '../components/Process';
import { ConditionsMarquee } from '../components/ConditionsMarquee';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { GoogleReviews } from '../components/GoogleReviews';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <HolisticApproach />
      <WhyUs />
      <Process />
      <ConditionsMarquee />
      <Testimonials />
      <FAQ />
      <CTA />
      <GoogleReviews />
    </>
  );
};