import React from "react";

export const PageWrapper = ({ children, title, subtitle }) => (
  <div className="max-w-6xl mx-auto px-6 py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="mb-8 border-l-8 border-teal-500 pl-6">
      <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-teal-400 font-bold text-sm uppercase tracking-widest mt-2">
          {subtitle}
        </p>
      )}
    </div>
    {children}
  </div>
);
