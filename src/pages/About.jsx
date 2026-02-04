import React from "react";
import { Briefcase, Globe } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";

export const About = ({ profile }) => (
  <PageWrapper title="About Me" subtitle="Background & Ambition">
    <div className="bg-gray-900/60 p-8 md:p-12 rounded-4xl border border-gray-800 backdrop-blur-md shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 relative z-10">
        {profile.about}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-800 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
            <Briefcase size={20} />
          </div>
          <div>
            <h4 className="text-teal-500 font-black text-[10px] uppercase tracking-widest">
              Education
            </h4>
            <p className="text-white font-bold text-sm">{profile.education}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
            <Globe size={20} />
          </div>
          <div>
            <h4 className="text-teal-500 font-black text-[10px] uppercase tracking-widest">
              Major
            </h4>
            <p className="text-white font-bold text-sm">{profile.major}</p>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);
