import React, { useMemo, useState } from "react";
import { SectionIntro } from "../components/SectionIntro";
import { SiteFooter } from "../components/SiteFooter";

export const Skills = ({ skills }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = useMemo(
    () => ["All", ...new Set(skills.map((s) => s.category || "Other"))],
    [skills]
  );
  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") return skills;
    return skills.filter((s) => (s.category || "Other") === activeFilter);
  }, [skills, activeFilter]);

  return (
    <div className="relative flex flex-col items-center text-center h-full px-6 overflow-hidden pt-2 md:pt-4 pb-4">
    <SectionIntro
      title="Technical Skills"
      subtitle="Tools & Technologies"
      className="mb-8"
    />

      <div className="relative z-10 mb-6 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              activeFilter === filter
                ? "bg-cyan-300/15 border border-cyan-300/40 text-cyan-100"
                : "border border-slate-700/90 text-slate-300 hover:text-cyan-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-center w-full max-w-6xl">
        {filteredSkills.map((skill, i) => (
        <div
          key={i}
          className="glass-card p-8 rounded-2xl group hover:border-cyan-300 transition-all w-48 flex flex-col items-center"
        >
          <img
            src={skill.logo}
            className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all brightness-125"
            alt={skill.name}
          />
          <h3 className="font-black text-white uppercase text-sm tracking-tighter mt-4 mb-2">
            {skill.name}
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed text-center">
            {skill.desc}
          </p>
        </div>
        ))}
      </div>

    <SiteFooter />
    </div>
  );
};

