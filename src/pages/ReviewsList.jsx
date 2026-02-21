import React from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { StarRating } from "../components/StarRating";

export const ReviewsList = ({ reviews, onDelete }) => (
  <div className="relative flex flex-col min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] px-6 overflow-hidden pt-2 md:pt-4">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
    </div>

    <div className="text-center mb-6">
      <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
        Reviews
      </h2>
      <p className="text-teal-400 font-bold text-sm uppercase tracking-widest mt-1">
        Feedback
      </p>
    </div>

    <div className="w-full max-w-5xl mx-auto rounded-[2rem] border border-gray-800 bg-gray-900/60 backdrop-blur-md shadow-2xl p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
          {reviews.length} Submission(s)
        </p>
        <a
          href="/reviews/new"
          className="flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-full font-black text-[10px] hover:bg-teal-500 transition-all shadow-lg"
        >
          <PlusCircle size={16} /> ADD REVIEW
        </a>
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center py-20 bg-gray-900/30 rounded-3xl border border-dashed border-gray-800 text-gray-500 text-[10px] font-black uppercase">
            No reviews yet.
          </div>
        ) : (
          reviews.map((r) => (
            <div
              key={r.id}
              className="bg-gray-900/60 border border-gray-800 p-6 rounded-3xl flex items-start sm:items-center gap-4 sm:gap-6 group backdrop-blur-md hover:border-teal-500/50 transition-all"
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-xl border-2 border-teal-500/30"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-base sm:text-lg font-black text-white">{r.name}</h4>
                  <StarRating rating={r.rating || 0} size={10} />
                </div>
                <p className="text-gray-400 text-sm italic">"{r.comment}"</p>
              </div>
              {!r.isPermanent && (
                <button
                  onClick={() => onDelete(r.id)}
                  className="p-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/10 rounded-full"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>

    {/* Footer for Reviews */}
    <div className="mt-auto border-t border-gray-900 text-center flex flex-col items-center gap-3 pt-8 pb-8">
      <div className="text-lg font-black uppercase tracking-tighter">
        FRANCIS PASCUA <span className="text-teal-500">/</span> ENGINEER
      </div>
      <p className="text-teal-400 font-black italic text-sm tracking-widest uppercase opacity-80">
        "Rise even when the world tells you to stay down."
      </p>
    </div>
  </div>
);
