import React from "react";
import {
  Mail,
  Phone,
  Github,
  Facebook,
  Linkedin,
  Twitter,
  Send,
  Clock3,
} from "lucide-react";

const socialItems = [
  { key: "github", label: "Github", Icon: Github },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
  { key: "twitter", label: "Twitter", Icon: Twitter },
];

export const Contact = ({ profile }) => {
  const email = profile?.contact?.email || "";
  const phone = profile?.contact?.phone || "";
  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
  const socials = profile?.socials || {};

  return (
    <div className="relative flex flex-col min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] px-6 overflow-hidden pt-2 md:pt-4">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-12 left-10 h-44 w-44 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Contact
        </h2>
        <p className="text-teal-400 font-bold text-sm uppercase tracking-widest mt-1">
          Get in touch
        </p>
      </div>

      {/* Contact Content */}
      <div className="w-full max-w-5xl mx-auto rounded-[2rem] border border-gray-800 bg-gray-900/60 backdrop-blur-md shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
          <div className="p-6 sm:p-7 md:p-10 bg-gradient-to-br from-teal-500/20 via-teal-500/10 to-transparent">
            <div className="inline-flex items-center gap-2 text-teal-300 text-[10px] font-black uppercase tracking-[0.22em] mb-4">
              <Send size={12} />
              Direct Contact
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mb-6 italic tracking-tighter">
              Let's Connect!
            </h3>
            <div className="space-y-4 font-black">
              <p className="text-gray-300 text-sm leading-relaxed mb-2">
                Open for collaborations, freelance projects, and engineering opportunities.
              </p>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 bg-black/30 border border-teal-500/20 p-4 rounded-2xl hover:bg-black/40 transition-all text-sm truncate text-white focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              aria-label={`Send email to ${email}`}
            >
              <span className="p-2 rounded-lg bg-teal-500/20 text-teal-300">
                <Mail size={18} className="shrink-0" />
              </span>
              <span className="truncate">{email}</span>
            </a>
            <a
              href={phoneHref}
              className="flex items-center gap-4 bg-black/30 border border-teal-500/20 p-4 rounded-2xl hover:bg-black/40 transition-all text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              aria-label={`Call ${phone}`}
            >
              <span className="p-2 rounded-lg bg-teal-500/20 text-teal-300">
                <Phone size={18} className="shrink-0" />
              </span>
              {phone}
            </a>

            <div className="flex items-center gap-3 mt-5 text-gray-300 text-xs uppercase tracking-widest">
              <Clock3 size={14} className="text-teal-400" />
              Usually replies within 24 hours
            </div>
          </div>
        </div>

          <div className="p-6 sm:p-7 md:p-10 border-t lg:border-t-0 lg:border-l border-gray-800 bg-black/20">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
              Social Networks
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {socialItems.map(({ key, label, Icon }) => {
                const href = socials[key] || "#";
                const hasLink = Boolean(socials[key]);

                return (
                  <a
                    key={key}
                    href={href}
                    target={hasLink ? "_blank" : undefined}
                    rel={hasLink ? "noreferrer noopener" : undefined}
                    onClick={!hasLink ? (e) => e.preventDefault() : undefined}
                    aria-label={hasLink ? `Open ${label} profile` : `${label} link unavailable`}
                    className={`p-5 bg-gray-900/70 border border-gray-800 rounded-2xl flex flex-col items-center gap-3 transition-all group ${
                      hasLink
                        ? "hover:border-teal-400 hover:-translate-y-0.5"
                        : "opacity-70 cursor-not-allowed"
                    }`}
                  >
                    <Icon
                      size={24}
                      className="text-gray-400 group-hover:text-teal-400 transition-all"
                    />
                    <span className="font-black text-[9px] tracking-widest text-gray-500 uppercase">
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
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
};
