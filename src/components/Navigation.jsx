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
    <header className="fixed top-0 w-full border-b backdrop-blur-xl z-50 site-header">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent tracking-tight uppercase"
        >
          LEII.CODES
        </Link>
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs lg:text-sm font-extrabold uppercase tracking-[0.14em] transition-all ${
                  isActive
                    ? "text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.42)]"
                    : "text-slate-300/80 hover:text-cyan-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <nav className="md:hidden border-t px-3 py-2 overflow-x-auto mobile-nav">
        <div className="flex items-center gap-2 min-w-max">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.12em] transition-all ${
                  isActive
                    ? "bg-cyan-400/15 border border-cyan-300/40 text-cyan-100"
                    : "border border-slate-700/80 text-slate-300/80"
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
