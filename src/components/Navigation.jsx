import React from "react";

export const Navigation = ({ currentPath }) => {
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
        <a
          href="/"
          className="text-2xl md:text-3xl font-black bg-linear-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent tracking-tighter uppercase"
        >
          LEII.CODES
        </a>
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                currentPath === link.path
                  ? "text-teal-400"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
