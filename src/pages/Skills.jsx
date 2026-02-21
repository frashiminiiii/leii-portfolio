import React from "react";

export const Skills = ({ skills }) => (
  <div className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] px-6 overflow-hidden pt-2 md:pt-4 pb-4">
    {/* Title */}
    <div className="relative z-10 max-w-6xl w-full mb-8 mt-2 md:mt-4">
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
        Technical Skills
      </h2>
      <p className="text-teal-400 font-bold text-sm uppercase tracking-widest">
        Tools & Technologies
      </p>
    </div>

    {/* Skills Grid */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-center w-full max-w-6xl">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="bg-gray-900/80 border border-gray-800 p-8 rounded-2xl group hover:border-teal-500 transition-all backdrop-blur-sm w-48 flex flex-col items-center"
        >
          <img
            src={skill.logo}
            className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all brightness-125"
            alt={skill.name}
          />
          <h3 className="font-black text-white uppercase text-sm tracking-tighter mt-4 mb-2">
            {skill.name}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed text-center">
            {skill.desc}
          </p>
        </div>
      ))}
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

