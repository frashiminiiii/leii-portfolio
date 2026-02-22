import React from "react";

export const SectionIntro = ({ title, subtitle, className = "" }) => (
  <div
    className={`relative z-10 w-full max-w-6xl mx-auto mt-2 md:mt-4 text-center mb-7 ${className}`.trim()}
  >
    <h2 className="section-title text-white">{title}</h2>
    {subtitle && <p className="section-kicker mt-2">{subtitle}</p>}
  </div>
);
