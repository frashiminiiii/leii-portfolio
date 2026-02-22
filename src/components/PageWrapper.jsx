import React from "react";
import { SectionIntro } from "./SectionIntro";
import { SiteFooter } from "./SiteFooter";

export const PageWrapper = ({ children, title, subtitle }) => (
  <div className="max-w-6xl mx-auto px-6 py-6 h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
    <SectionIntro title={title} subtitle={subtitle} />
    {children}
    <SiteFooter />
  </div>
);
