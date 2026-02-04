import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";
import { DummyModal } from "../components/DummyModal";

export const Projects = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <PageWrapper title="Projects" subtitle="Portfolio Stack">
      <div className="relative h-150 w-full flex items-center justify-center overflow-hidden perspective-[1000px]">
        <div className="absolute top-0 right-0 z-50 flex gap-4">
          <button
            onClick={prev}
            className="p-3 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full text-white hover:border-teal-500 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-3 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-full text-white hover:border-teal-500 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="relative w-full max-w-4xl h-112.5 flex items-center justify-center">
          {projects.map((p, index) => {
            let position = index - currentIndex;
            if (position < -1) position = position + projects.length;
            if (position > 1) position = position - projects.length;

            const isActive = position === 0;
            const isLeft = position === -1;
            const isRight = position === 1;

            return (
              <div
                key={p.id}
                onClick={() => !isActive && setCurrentIndex(index)}
                className={`absolute w-75 md:w-105 bg-gray-900 border border-gray-800 rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-out cursor-pointer
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
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-80" />
                  )}
                </div>

                <div className="p-6 bg-gray-900/90 backdrop-blur-sm">
                  <span className="text-[9px] font-black text-teal-400 uppercase tracking-widest bg-teal-400/10 px-3 py-1 rounded-full mb-2 inline-block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(p.title);
                      }}
                      className="w-full bg-teal-600 hover:bg-teal-500 py-3 rounded-xl flex items-center justify-center gap-3 text-white transition-all font-black text-[10px] uppercase tracking-widest"
                    >
                      View Live Project <ExternalLink size={12} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <DummyModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        projectTitle={selectedProject}
      />
    </PageWrapper>
  );
};
