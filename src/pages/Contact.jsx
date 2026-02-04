import React from "react";
import { Mail, Phone, Github, Facebook, Linkedin, Twitter } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";

export const Contact = ({ profile }) => (
  <PageWrapper title="Contact" subtitle="Get in touch">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-teal-600 rounded-[3rem] p-10 text-black shadow-2xl relative overflow-hidden flex flex-col justify-center">
        <h3 className="text-5xl font-black uppercase mb-8 italic tracking-tighter">
          Let's
          <br />
          Connect!
        </h3>
        <div className="space-y-4 font-black">
          <div className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl hover:bg-black/10 transition-all text-sm truncate">
            <Mail size={20} className="shrink-0" /> {profile.contact.email}
          </div>
          <div className="flex items-center gap-4 bg-black/5 p-4 rounded-2xl hover:bg-black/10 transition-all text-sm">
            <Phone size={20} className="shrink-0" /> {profile.contact.phone}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-gray-900 pb-4">
          Social Networks
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="#"
            className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl flex flex-col items-center gap-3 hover:border-teal-400 transition-all group backdrop-blur-sm"
          >
            <Github
              size={28}
              className="text-gray-400 group-hover:text-teal-400 transition-all"
            />
            <span className="font-black text-[9px] tracking-widest text-gray-500 uppercase">
              Github
            </span>
          </a>
          <a
            href="#"
            className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl flex flex-col items-center gap-3 hover:border-teal-400 transition-all group backdrop-blur-sm"
          >
            <Facebook
              size={28}
              className="text-gray-400 group-hover:text-teal-400 transition-all"
            />
            <span className="font-black text-[9px] tracking-widest text-gray-500 uppercase">
              Facebook
            </span>
          </a>
          <a
            href="#"
            className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl flex flex-col items-center gap-3 hover:border-teal-400 transition-all group backdrop-blur-sm"
          >
            <Linkedin
              size={28}
              className="text-gray-400 group-hover:text-teal-400 transition-all"
            />
            <span className="font-black text-[9px] tracking-widest text-gray-500 uppercase">
              Linkedin
            </span>
          </a>
          <a
            href="#"
            className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl flex flex-col items-center gap-3 hover:border-teal-400 transition-all group backdrop-blur-sm"
          >
            <Twitter
              size={28}
              className="text-gray-400 group-hover:text-teal-400 transition-all"
            />
            <span className="font-black text-[9px] tracking-widest text-gray-500 uppercase">
              Twitter
            </span>
          </a>
        </div>
      </div>
    </div>
  </PageWrapper>
);
