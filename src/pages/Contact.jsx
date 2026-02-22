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
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-react";
import { SectionIntro } from "../components/SectionIntro";
import { SiteFooter } from "../components/SiteFooter";

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
    <div className="relative flex flex-col h-full px-6 overflow-hidden pt-2 md:pt-4">
      <SectionIntro title="Contact" subtitle="Get in touch" />

      <div className="w-full max-w-6xl mx-auto rounded-[2rem] glass-card overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-cyan-400/18 via-cyan-400/8 to-transparent">
            <div className="inline-flex items-center gap-2 text-cyan-100 text-[10px] font-black uppercase tracking-[0.22em] mb-4">
              <Send size={12} />
              Direct Contact
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-[0.95]">
              Let's Build
              <br />
              Something Solid
            </h3>

            <p className="mt-5 text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
              Open for collaborations, freelance projects, and engineering roles.
              Share your idea and I will reply with a clear technical direction.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-100">
                <BadgeCheck size={12} />
                Available For Projects
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-800/35 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <BriefcaseBusiness size={12} />
                Remote Friendly
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-cyan-300/20 bg-slate-950/45 px-4 py-4 hover:border-cyan-300/45 hover:bg-slate-900/60 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                aria-label={`Send email to ${email}`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="p-2 rounded-lg bg-cyan-300/20 text-cyan-100">
                    <Mail size={18} className="shrink-0" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-widest text-cyan-200/90">
                      Email
                    </p>
                    <p className="text-sm text-white truncate">{email}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-cyan-200/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href={phoneHref}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-cyan-300/20 bg-slate-950/45 px-4 py-4 hover:border-cyan-300/45 hover:bg-slate-900/60 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                aria-label={`Call ${phone}`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="p-2 rounded-lg bg-cyan-300/20 text-cyan-100">
                    <Phone size={18} className="shrink-0" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-widest text-cyan-200/90">
                      Phone
                    </p>
                    <p className="text-sm text-white truncate">{phone}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-cyan-200/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2 text-gray-300 text-[11px] uppercase tracking-widest">
              <Clock3 size={14} className="text-cyan-300" />
              Usually replies within 24 hours
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-cyan-100/10 bg-black/25">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/45 p-4 mb-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-cyan-200 mb-1">
                Preferred Contact
              </p>
              <p className="text-sm text-slate-200 leading-relaxed">
                For fastest response, send a short email with your project scope
                and timeline.
              </p>
            </div>

            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">
              Social Networks
            </h4>

            <div className="grid grid-cols-2 gap-3">
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
                    aria-label={
                      hasLink ? `Open ${label} profile` : `${label} link unavailable`
                    }
                    className={`p-4 bg-slate-950/70 border border-slate-700 rounded-2xl flex flex-col items-center gap-3 transition-all group ${
                      hasLink
                        ? "hover:border-cyan-300 hover:-translate-y-0.5 hover:bg-slate-900/80"
                        : "opacity-70 cursor-not-allowed"
                    }`}
                  >
                    <Icon
                      size={24}
                      className="text-slate-400 group-hover:text-cyan-200 transition-all"
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

      <SiteFooter />
    </div>
  );
};
