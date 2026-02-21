import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    <div className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] px-6 overflow-hidden pt-2 md:pt-4 pb-4">
    {/* Background Marquee */}
    <div className="absolute inset-x-0 top-1 md:top-2 bottom-12 md:bottom-16 flex flex-col justify-between pointer-events-none select-none overflow-hidden opacity-[0.15]">
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
      <Link
        to="/about"
        className="mt-10 px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-black flex items-center gap-3 transition-all shadow-xl shadow-teal-500/30 uppercase text-xs tracking-widest"
      >
        Explore Portfolio <ChevronRight className="w-4 h-4" />
      </Link>
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

    <style>{`
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      @keyframes vinyl-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      .vinyl-spin { animation: vinyl-spin 2.2s linear infinite; }
      .tonearm-dropped { transform: rotate(24deg); }
      .tonearm-lifted { transform: rotate(-34deg); }
    `}</style>
  </div>
  );
};
