import React from "react";
import { PlusCircle, Trash2, Star } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";
import { StarRating } from "../components/StarRating";

export const ReviewsList = ({ reviews, onDelete }) => (
  <PageWrapper title="Reviews" subtitle="Feedback">
    <div className="flex justify-between items-center mb-8">
      <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
        {reviews.length} Submission(s)
      </p>
      <a
        href="/reviews/new"
        className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-black text-[10px] hover:bg-teal-500 transition-all shadow-lg"
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
            className="bg-gray-900/60 border border-gray-800 p-6 rounded-3xl flex items-center gap-6 group backdrop-blur-md hover:border-teal-500/50 transition-all"
          >
            <img
              src={r.avatar}
              alt={r.name}
              className="w-12 h-12 rounded-xl border-2 border-teal-500/30"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-lg font-black text-white">{r.name}</h4>
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
  </PageWrapper>
);
