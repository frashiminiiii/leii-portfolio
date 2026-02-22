import React from "react";
import {
  Briefcase,
  Globe,
  Cpu,
  Sparkles,
  ShieldCheck,
  ServerCog,
} from "lucide-react";
import { SectionIntro } from "../components/SectionIntro";
import { SiteFooter } from "../components/SiteFooter";

export const About = ({ profile }) => {
  return (
    <div className="relative flex flex-col items-center text-center h-full px-6 overflow-hidden pt-2 md:pt-4 pb-4">
      {/* Title */}
      <SectionIntro title="About Me" subtitle="Background & Ambition" />

      {/* About Content */}
      <div className="relative z-10 w-full max-w-6xl rounded-[2rem] glass-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="p-7 md:p-10 text-left bg-gradient-to-br from-cyan-400/16 via-cyan-400/8 to-transparent">
            <div className="inline-flex items-center gap-2 text-cyan-200 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Cpu size={14} />
              Engineering Profile
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              Building Reliable
              <br />
              Digital Systems
            </h3>

            <p className="mt-5 text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
              {profile.about}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-100">
                <ShieldCheck size={12} />
                Clean Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-800/35 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <ServerCog size={12} />
                Network Aware Apps
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-200">
                <Sparkles size={12} />
                Continuous Learning
              </span>
            </div>

            <div className="mt-6 border-l-4 border-cyan-400/80 bg-slate-950/35 p-4 rounded-r-2xl">
              <p className="text-sm md:text-base text-gray-300 italic leading-relaxed">
                "{profile.quote}"
              </p>
            </div>
          </div>

          <div className="p-7 md:p-10 border-t lg:border-t-0 lg:border-l border-cyan-100/10 bg-black/25">
            <div className="space-y-4">
              <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 p-5 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-300/20 rounded-lg text-cyan-200">
                    <Briefcase size={18} />
                  </div>
                  <h4 className="text-cyan-200 font-black text-[10px] uppercase tracking-[0.2em]">
                    Education
                  </h4>
                </div>
                <p className="text-white font-bold text-sm md:text-base">
                  {profile.education}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-300/20 rounded-lg text-emerald-200">
                    <Globe size={18} />
                  </div>
                  <h4 className="text-emerald-300 font-black text-[10px] uppercase tracking-[0.2em]">
                    Major
                  </h4>
                </div>
                <p className="text-white font-bold text-sm md:text-base">
                  {profile.major}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-600/85 bg-slate-950/55 p-5 text-left">
                <h4 className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                  Current Focus
                </h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Full Stack Development, clean architecture, and network-aware
                  application design.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/45 p-5 text-left">
                <h4 className="text-cyan-200 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                  Work Principle
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Build first for reliability and clarity, then optimize for
                  speed. Stable systems create better long-term products.
                </p>
                <div className="mt-3 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[78%] rounded-full bg-cyan-300/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

