import React from "react";
import Marquee from "react-fast-marquee";

const LOGOS = [
  "ACME Corp",
  "Globex",
  "Soylent Corp",
  "Initech",
  "Umbrella Corp",
  "Stark Ind",
  "Cyberdyne",
  "Massive Dynamic",
];

export function Ticker() {
  return (
    <section className="py-10 bg-brand-50 border-y border-brand-100">
      <div className="container mx-auto px-6 mb-6">
        <p className="text-center text-brand-500 text-sm font-medium uppercase tracking-widest">
          Trusted by market leaders
        </p>
      </div>
      <Marquee gradient={true} gradientColor="#f5fafa" speed={40}>
        {LOGOS.map((logo, index) => (
          <div
            key={index}
            className="mx-12 text-2xl font-bold text-brand-300 hover:text-brand-900 transition-colors cursor-default"
          >
            {logo}
          </div>
        ))}
      </Marquee>
    </section>
  );
}