import React from "react";
import { ChevronRight } from "lucide-react";

export const Home = ({ profile }) => (
  <div className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-4 overflow-hidden pt-10">
    
    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none overflow-hidden py-10 opacity-[0.15]">
      <div className="whitespace-nowrap flex animate-[marquee_15s_linear_infinite]">
        <span className="text-[10vw] font-black uppercase text-white tracking-tighter mx-4 italic">
          FRONTEND DEVELOPER &nbsp; FRONTEND DEVELOPER &nbsp;
        </span>
      </div>
      <div className="whitespace-nowrap flex animate-[marquee-reverse_18s_linear_infinite] opacity-60">
        <span
          className="text-[10vw] font-black uppercase text-transparent tracking-tighter mx-4"
          style={{ WebkitTextStroke: "2px white" }}
        >
          SOFTWARE ENGINEER &nbsp; SOFTWARE ENGINEER &nbsp;
        </span>
      </div>
      <div className="whitespace-nowrap flex animate-[marquee_25s_linear_infinite] opacity-40">
        <span className="text-[10vw] font-black uppercase text-white tracking-tighter mx-4 italic">
          NETWORK ADMIN &nbsp; NETWORK ADMIN &nbsp;
        </span>
      </div>
      <div className="whitespace-nowrap flex animate-[marquee-reverse_22s_linear_infinite] opacity-50">
        <span
          className="text-[10vw] font-black uppercase text-transparent tracking-tighter mx-4"
          style={{ WebkitTextStroke: "2px white" }}
        >
          FULL STACK DEV &nbsp; FULL STACK DEV &nbsp;
        </span>
      </div>
      <div className="whitespace-nowrap flex animate-[marquee_30s_linear_infinite] opacity-30">
        <span className="text-[10vw] font-black uppercase text-white tracking-tighter mx-4">
          COMPUTER ENGINEER &nbsp; COMPUTER ENGINEER &nbsp;
        </span>
      </div>
    </div>

    <div className="relative z-10 flex flex-col items-center animate-in zoom-in duration-700">
      <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-linear-to-br from-teal-400 to-emerald-600 p-1 mb-6 shadow-[0_0_50px_rgba(20,184,166,0.3)] hover:scale-105 transition-transform group relative overflow-hidden">
        <div className="w-full h-full rounded-full bg-gray-950 overflow-hidden border-4 border-gray-900 relative">
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-2 uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        {profile.name}
      </h1>
      <p className="text-base md:text-lg text-teal-400 font-bold mb-6 uppercase tracking-[0.2em]">
        {profile.title}
      </p>
      <div className="max-w-md border-l-4 border-teal-500 pl-6 text-left bg-black/40 backdrop-blur-md p-4 rounded-r-2xl">
        <p className="text-base text-gray-300 italic leading-relaxed">
          {profile.quote}
        </p>
      </div>
      <a
        href="/about"
        className="mt-10 px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-black flex items-center gap-3 transition-all shadow-xl shadow-teal-500/30 uppercase text-xs tracking-widest"
      >
        Explore Portfolio <ChevronRight className="w-4 h-4" />
      </a>
    </div>

    <style>{`
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    `}</style>
  </div>
);
