import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";


export const Projects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative flex flex-col min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] px-6 pb-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      {/* Project Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Projects
        </h2>
        <p className="text-teal-400 font-bold text-sm uppercase tracking-widest mt-1">
          Portfolio Stack
        </p>
      </div>

      {/* Projects Carousel */}
      <div className="relative h-[440px] md:h-[500px] w-full flex items-center justify-center overflow-hidden perspective-[1000px]">
        <div className="absolute top-0 right-0 z-50 flex gap-3 md:gap-4">
          <button
            onClick={prev}
            className="p-2.5 md:p-3 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full text-white hover:border-teal-500 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2.5 md:p-3 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full text-white hover:border-teal-500 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="relative w-full max-w-4xl h-[360px] md:h-[420px] flex items-center justify-center">
          {projects.map((p, index) => {
            let position = index - currentIndex;
            if (position < -1) position += projects.length;
            if (position > 1) position -= projects.length;

            const isActive = position === 0;
            const isLeft = position === -1;
            const isRight = position === 1;

            return (
              <div
                key={p.id}
                onClick={() => !isActive && setCurrentIndex(index)}
                className={`absolute w-[250px] sm:w-[290px] md:w-[420px] bg-gray-900 border border-gray-800 rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-out cursor-pointer
                  ${isActive ? "z-30 scale-100 opacity-100 shadow-[0_20px_60px_rgba(20,184,166,0.3)]" : "z-20 scale-75 opacity-40 grayscale"}
                `}
                style={{
                  transformStyle: "preserve-3d",
                  transform: isActive
                    ? "translateX(0) rotateY(0deg)"
                    : isLeft
                      ? "translateX(-70%) rotateY(35deg)"
                      : isRight
                        ? "translateX(70%) rotateY(-35deg)"
                        : "scale(0.5) opacity(0)",
                }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Removed gradient overlay for clean look */}
                </div>

                <div className="p-4 bg-gray-900/90 backdrop-blur-sm">
                  <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest bg-teal-400/10 px-3 py-1 rounded-full mb-2 inline-block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[8px] font-black uppercase text-teal-300 border border-teal-500/20 bg-teal-500/5 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {isActive && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full bg-teal-600 hover:bg-teal-500 py-2 rounded-xl flex items-center justify-center gap-2 text-white transition-all font-black text-[10px] uppercase tracking-widest"
                    >
                      View Live Project <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
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
};
