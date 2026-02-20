import React from 'react';
import { Section } from './ui/Section';

const LOGOS = [
  "Acme Corp", "Nebula", "Tension", "Ocular", "FocalPoint", "Vertex", "Spherule", "GlobalBank"
];

export function Marquee() {
  return (
    <div className="w-full bg-zinc-950 border-b border-zinc-900 overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6">
        <p className="text-sm text-zinc-500 font-medium uppercase tracking-widest text-center">Trusted by industry leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 px-8 min-w-full justify-around items-center">
          {LOGOS.map((logo, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold text-zinc-700 uppercase tracking-tighter hover:text-cyan-400 transition-colors cursor-default">
              {logo}
            </span>
          ))}
          {LOGOS.map((logo, i) => (
            <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-zinc-700 uppercase tracking-tighter hover:text-cyan-400 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
