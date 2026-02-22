import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";
const SEGMENT_START = 42;
const SEGMENT_END = 70;

export const Home = ({ profile }) => {
  const [isVinylMode, setIsVinylMode] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isVinylMode) {
      if (audio.currentTime < SEGMENT_START || audio.currentTime >= SEGMENT_END) {
        audio.currentTime = SEGMENT_START;
      }
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = SEGMENT_START;
    }
  }, [isVinylMode]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const clampToSegment = () => {
      if (audio.currentTime < SEGMENT_START || audio.currentTime >= SEGMENT_END) {
        audio.currentTime = SEGMENT_START;
      }
    };
    const loopSegment = () => {
      if (audio.currentTime >= SEGMENT_END) {
        audio.currentTime = SEGMENT_START;
      }
    };
    audio.addEventListener("loadedmetadata", clampToSegment);
    audio.addEventListener("timeupdate", loopSegment);

    return () => {
      audio.removeEventListener("loadedmetadata", clampToSegment);
      audio.removeEventListener("timeupdate", loopSegment);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center text-center h-full px-6 overflow-hidden pt-2 md:pt-4 pb-4">
    {/* Background Marquee */}
    <div className="absolute inset-x-0 top-1 md:top-2 bottom-12 md:bottom-16 flex flex-col justify-between pointer-events-none select-none overflow-hidden opacity-[0.15]">
      <div className="marquee-track marquee-forward">
        <span className="text-[10vw] font-black uppercase text-white tracking-tighter px-4">
          FRONTEND DEVELOPER &nbsp; FRONTEND DEVELOPER &nbsp;
        </span>
        <span aria-hidden className="text-[10vw] font-black uppercase text-white tracking-tighter px-4">
          FRONTEND DEVELOPER &nbsp; FRONTEND DEVELOPER &nbsp;
        </span>
      </div>
      <div className="marquee-track marquee-reverse opacity-60">
        <span
          className="text-[10vw] font-black uppercase text-transparent tracking-tighter px-4"
          style={{ WebkitTextStroke: "2px white" }}
        >
          SOFTWARE ENGINEER &nbsp; SOFTWARE ENGINEER &nbsp;
        </span>
        <span
          aria-hidden
          className="text-[10vw] font-black uppercase text-transparent tracking-tighter px-4"
          style={{ WebkitTextStroke: "2px white" }}
        >
          SOFTWARE ENGINEER &nbsp; SOFTWARE ENGINEER &nbsp;
        </span>
      </div>
      <div className="marquee-track marquee-forward-slow opacity-40">
        <span className="text-[10vw] font-black uppercase text-white tracking-tighter px-4">
          NETWORK ADMIN &nbsp; NETWORK ADMIN &nbsp;
        </span>
        <span aria-hidden className="text-[10vw] font-black uppercase text-white tracking-tighter px-4">
          NETWORK ADMIN &nbsp; NETWORK ADMIN &nbsp;
        </span>
      </div>
      <div className="marquee-track marquee-reverse-medium opacity-50">
        <span
          className="text-[10vw] font-black uppercase text-transparent tracking-tighter px-4"
          style={{ WebkitTextStroke: "2px white" }}
        >
          FULL STACK DEV &nbsp; FULL STACK DEV &nbsp;
        </span>
        <span
          aria-hidden
          className="text-[10vw] font-black uppercase text-transparent tracking-tighter px-4"
          style={{ WebkitTextStroke: "2px white" }}
        >
          FULL STACK DEV &nbsp; FULL STACK DEV &nbsp;
        </span>
      </div>
      <div className="marquee-track marquee-forward-slowest opacity-30">
        <span className="text-[10vw] font-black uppercase text-white tracking-tighter px-4">
          COMPUTER ENGINEER &nbsp; COMPUTER ENGINEER &nbsp;
        </span>
        <span aria-hidden className="text-[10vw] font-black uppercase text-white tracking-tighter px-4">
          COMPUTER ENGINEER &nbsp; COMPUTER ENGINEER &nbsp;
        </span>
      </div>
    </div>

    {/* Main Profile */}
    <div className="relative z-10 flex flex-col items-center animate-in zoom-in duration-700 max-w-4xl w-full mt-4 md:mt-6">
      <div className="relative mb-6">
        <button
          type="button"
          onClick={() => setIsVinylMode((prev) => !prev)}
          className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600 p-1 shadow-[0_0_50px_rgba(20,184,166,0.3)] transition-transform relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-300/70"
          aria-label="Toggle vinyl player mode"
          title="Click to toggle vinyl mode"
        >
          <div
            className={`pointer-events-none absolute z-30 right-[-12px] top-[-12px] md:right-[-16px] md:top-[-14px] h-20 w-2 md:h-28 md:w-3 rounded-full bg-gray-200 shadow-[0_0_12px_rgba(255,255,255,0.35)] origin-top transition-all duration-300 ${
              isVinylMode ? "tonearm-dropped opacity-100" : "tonearm-lifted opacity-0"
            }`}
          >
            <div className="absolute -top-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-gray-500 border border-gray-300" />
            <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gray-400 border border-gray-300" />
          </div>

          <div
            className={`relative z-10 w-full h-full rounded-full bg-gray-950 overflow-hidden border-4 border-gray-900 ${
              isVinylMode ? "vinyl-spin" : ""
            }`}
          >
            {isVinylMode ? (
              <>
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_#171717_0%,_#070707_58%,_#000_100%)]" />
                <div className="absolute inset-[16%] rounded-full border border-gray-700/80" />
                <div className="absolute inset-[26%] rounded-full border border-gray-700/70" />
                <div className="absolute inset-[36%] rounded-full border border-gray-700/60" />
                <div className="absolute inset-[43%] rounded-full bg-teal-500/80 border border-teal-200/30 overflow-hidden">
                  <img
                    src={profile.profileImage}
                    alt="Vinyl label"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200 border border-gray-700" />
              </>
            ) : (
              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </button>
        <audio
          ref={audioRef}
          src="/girl_in_red_-_you_will_be_my_girl_(mp3.pm).mp3"
          preload="auto"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2 uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        {profile.name}
      </h1>
      <p className="text-base md:text-lg text-cyan-300 font-bold mb-6 uppercase tracking-[0.2em]">
        {profile.title}
      </p>
      <div className="max-w-md border-l-4 border-cyan-400/90 pl-6 text-left glass-card p-4 rounded-r-2xl">
        <p className="text-base text-gray-300 italic leading-relaxed">
          {profile.quote}
        </p>
      </div>

      <div className="w-full max-w-3xl mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(profile.highlights || []).map((item) => (
          <div
            key={item.label}
            className="rounded-2xl glass-card px-3 py-4"
          >
            <p className="text-lg md:text-xl font-black text-white leading-none">
              {item.value}
            </p>
            <p className="mt-1 text-[10px] text-cyan-200/85 font-black uppercase tracking-widest">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {(profile.focusTags || []).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-100 text-[10px] font-black uppercase tracking-widest"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <Link
          to="/about"
          className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-black flex items-center gap-3 transition-all shadow-xl shadow-cyan-500/25 uppercase text-xs tracking-widest"
        >
          Explore Portfolio <ChevronRight className="w-4 h-4" />
        </Link>
        <Link
          to="/projects"
          className="px-8 py-3 border border-slate-600 hover:border-cyan-300 text-gray-200 rounded-full font-black flex items-center gap-3 transition-all uppercase text-xs tracking-widest bg-slate-950/35"
        >
          View Projects
        </Link>
      </div>

    </div>

    <SiteFooter />

    <style>{`
      .marquee-track {
        display: flex;
        width: max-content;
        white-space: nowrap;
        will-change: transform;
      }
      .marquee-forward { animation: marquee 34s linear infinite; }
      .marquee-forward-slow { animation: marquee 40s linear infinite; }
      .marquee-forward-slowest { animation: marquee 48s linear infinite; }
      .marquee-reverse { animation: marquee-reverse 36s linear infinite; }
      .marquee-reverse-medium { animation: marquee-reverse 44s linear infinite; }
      @keyframes marquee {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-50%, 0, 0); }
      }
      @keyframes marquee-reverse {
        0% { transform: translate3d(-50%, 0, 0); }
        100% { transform: translate3d(0, 0, 0); }
      }
      @keyframes vinyl-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .vinyl-spin { animation: vinyl-spin 2.2s linear infinite; }
      .tonearm-dropped { transform: rotate(24deg); }
      .tonearm-lifted { transform: rotate(-34deg); }
    `}</style>
  </div>
  );
};
