import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black bg-linear-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent tracking-tighter uppercase"
        >
          LEII.CODES
        </Link>
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs lg:text-sm font-black uppercase tracking-[0.14em] transition-all ${
                  isActive
                    ? "text-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.35)]"
                    : "text-teal-100/70 hover:text-teal-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <nav className="md:hidden border-t border-gray-900/80 px-3 py-2 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.12em] transition-all ${
                  isActive
                    ? "bg-teal-500/20 border border-teal-400/40 text-teal-300"
                    : "border border-gray-800 text-teal-100/70"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};
