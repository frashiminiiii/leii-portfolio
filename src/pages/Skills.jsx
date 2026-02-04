import React from "react";

export const Skills = ({ skills }) => {
  const allSkills = [
    {
      name: "Email",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      desc: "Manage secure email communications.",
    },
    ...skills,
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-black text-white uppercase mb-8 tracking-tighter">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allSkills.map((skill, i) => (
          <div
            key={i}
            className="bg-gray-900/80 border border-gray-800 p-8 rounded-2xl group hover:border-teal-500 hover:scale-105 transition-all backdrop-blur-sm cursor-pointer"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all brightness-125"
              />
            </div>
            <h3 className="font-black text-white uppercase text-sm tracking-tighter mb-2 text-center">
              {skill.name}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed text-center">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
