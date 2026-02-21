import React from "react";
import { Briefcase, Globe, Cpu } from "lucide-react";

export const About = ({ profile }) => (
  <div className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] px-6 overflow-hidden pt-2 md:pt-4 pb-4">
    {/* Ambient Backdrop */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
    </div>

    {/* Title */}
    <div className="relative z-10 max-w-5xl w-full mb-6 mt-2 md:mt-4">
      <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
        About Me
      </h2>
      <p className="text-teal-400 font-bold text-sm uppercase tracking-widest">
        Background & Ambition
      </p>
    </div>

    {/* About Content */}
    <div className="relative z-10 w-full max-w-5xl rounded-[2rem] border border-gray-800 bg-gray-900/60 backdrop-blur-md shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
        <div className="p-7 md:p-10 text-left">
          <div className="inline-flex items-center gap-2 text-teal-300 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Cpu size={14} />
            Engineering Profile
          </div>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {profile.about}
          </p>
          <div className="mt-6 border-l-4 border-teal-500/80 bg-black/30 p-4 rounded-r-2xl">
            <p className="text-sm md:text-base text-gray-300 italic leading-relaxed">
              "{profile.quote}"
            </p>
          </div>
        </div>

        <div className="p-7 md:p-10 border-t lg:border-t-0 lg:border-l border-gray-800 bg-black/20">
          <div className="space-y-4">
            <div className="rounded-2xl border border-teal-500/25 bg-teal-500/10 p-5 text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-teal-500/20 rounded-lg text-teal-300">
                  <Briefcase size={18} />
                </div>
                <h4 className="text-teal-300 font-black text-[10px] uppercase tracking-[0.2em]">
                  Education
                </h4>
              </div>
              <p className="text-white font-bold text-sm md:text-base">
                {profile.education}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300">
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

            <div className="rounded-2xl border border-gray-700 bg-gray-900/60 p-5 text-left">
              <h4 className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                Current Focus
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                Full Stack Development, clean architecture, and network-aware
                application design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="py-8 border-t border-gray-900 text-center flex flex-col items-center gap-3 relative z-40 mt-auto">
      <div className="text-lg font-black uppercase tracking-tighter">
        FRANCIS PASCUA <span className="text-teal-500">/</span> ENGINEER
      </div>
      <p className="text-teal-400 font-black italic text-sm tracking-widest uppercase opacity-80">
        "Rise even when the world tells you to stay down."
      </p>
    </footer>
  </div>
);

