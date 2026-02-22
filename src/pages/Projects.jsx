import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { SectionIntro } from "../components/SectionIntro";
import { SiteFooter } from "../components/SiteFooter";


export const Projects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="relative flex flex-col h-full px-6 pb-4 overflow-hidden">
      {/* Project Section Title */}
      <SectionIntro title="Projects" subtitle="Portfolio Stack" />

      {/* Projects Carousel */}
      <div className="relative h-[440px] md:h-[500px] w-full flex items-center justify-center overflow-hidden perspective-[1000px]">
        <div className="absolute top-0 right-0 z-50 flex gap-3 md:gap-4">
          <button
            onClick={prev}
            className="p-2.5 md:p-3 bg-slate-950/70 backdrop-blur-md border border-slate-600 rounded-full text-white hover:border-cyan-300 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2.5 md:p-3 bg-slate-950/70 backdrop-blur-md border border-slate-600 rounded-full text-white hover:border-cyan-300 transition-all"
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
                className={`absolute w-[250px] sm:w-[290px] md:w-[420px] bg-slate-950 border border-slate-700 rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-out cursor-pointer
                  ${isActive ? "z-30 scale-100 opacity-100 shadow-[0_20px_60px_rgba(34,211,238,0.25)]" : "z-20 scale-75 opacity-40 grayscale"}
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

                <div className="p-4 bg-slate-950/85 backdrop-blur-sm">
                  <span className="text-[9px] font-black text-cyan-200 uppercase tracking-widest bg-cyan-300/10 px-3 py-1 rounded-full mb-2 inline-block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">
                    {p.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[8px] font-black uppercase text-cyan-100 border border-cyan-300/20 bg-cyan-300/5 px-2 py-1 rounded"
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
                      className="w-full bg-cyan-600 hover:bg-cyan-500 py-2 rounded-xl flex items-center justify-center gap-2 text-white transition-all font-black text-[10px] uppercase tracking-widest"
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
      <SiteFooter />
    </div>
  );
};
