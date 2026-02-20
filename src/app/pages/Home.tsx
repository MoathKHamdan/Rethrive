import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Process } from '../components/Process';
import { ConditionsMarquee } from '../components/ConditionsMarquee';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <ConditionsMarquee />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};
