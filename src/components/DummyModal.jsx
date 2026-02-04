import React from "react";
import { X, Globe } from "lucide-react";

export const DummyModal = ({ isOpen, onClose, projectTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-gray-900 border border-teal-500/30 p-8 rounded-4xl max-w-md w-full text-center shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Globe className="text-teal-400" size={40} />
        </div>
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">
          {projectTitle}
        </h3>
        <p className="text-gray-400 mb-8 font-medium italic">
          "This link is for demo purposes only!"
        </p>
        <button
          onClick={onClose}
          className="w-full bg-teal-600 hover:bg-teal-500 text-white font-black py-4 rounded-xl transition-all uppercase tracking-widest text-xs"
        >
          Close
        </button>
      </div>
    </div>
  );
};
