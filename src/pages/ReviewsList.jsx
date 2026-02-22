import React, { useEffect, useState } from "react";
import {
  PlusCircle,
  Trash2,
  Pencil,
  Check,
  ThumbsUp,
  MessageSquareText,
  Star,
  TrendingUp,
} from "lucide-react";
import { StarRating } from "../components/StarRating";
import { SectionIntro } from "../components/SectionIntro";
import { SiteFooter } from "../components/SiteFooter";

export const ReviewsList = ({ reviews, onDelete, onEdit, onVoteHelpful }) => {
  const [editingId, setEditingId] = useState(null);
  const [draftComment, setDraftComment] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const beginEdit = (review) => {
    setEditingId(review.id);
    setDraftComment(review.comment);
  };

  const saveEdit = (id) => {
    const next = draftComment.trim();
    if (!next) return;
    onEdit(id, next);
    setEditingId(null);
    setDraftComment("");
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + (review.rating || 0), 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";
  const totalHelpful = reviews.reduce(
    (sum, review) => sum + (review.helpful || 0),
    0
  );
  const totalPages = Math.max(1, Math.ceil(reviews.length / pageSize));
  const visibleReviews = reviews.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <div className="relative flex flex-col h-full px-6 overflow-hidden pt-2 md:pt-4">
      <SectionIntro title="Reviews" subtitle="Community Feedback" />

      <div className="w-full max-w-6xl mx-auto rounded-[2rem] glass-card p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <div className="rounded-xl border border-slate-700/80 bg-slate-950/50 px-4 py-2.5">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                Submissions
              </p>
              <p className="text-sm font-extrabold text-white mt-0.5">{reviews.length}</p>
            </div>
            <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-2.5">
              <p className="text-[9px] font-black uppercase tracking-widest text-cyan-200/85">
                Average Rating
              </p>
              <p className="text-sm font-extrabold text-white mt-0.5">{averageRating} / 5</p>
            </div>
            <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-2.5">
              <p className="text-[9px] font-black uppercase tracking-widest text-emerald-200/90">
                Helpful Votes
              </p>
              <p className="text-sm font-extrabold text-white mt-0.5">{totalHelpful}</p>
            </div>
          </div>

          <a
            href="/reviews/new"
            className="inline-flex items-center justify-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-full font-black text-[10px] tracking-widest hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-500/20"
          >
            <PlusCircle size={16} /> ADD REVIEW
          </a>
        </div>

        <div className="space-y-4">
          {reviews.length === 0 ? (
            <div className="text-center py-20 bg-slate-950/40 rounded-3xl border border-dashed border-slate-700">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-cyan-300/25 bg-cyan-300/10 mb-3 text-cyan-200">
                <MessageSquareText size={20} />
              </div>
              <p className="text-slate-300 text-sm font-bold">No reviews yet.</p>
              <p className="text-slate-400 text-xs mt-1">
                Be the first to share your feedback.
              </p>
            </div>
          ) : (
            visibleReviews.map((r) => (
              <div
                key={r.id}
                className="bg-slate-950/60 border border-slate-700 p-5 md:p-6 rounded-3xl group backdrop-blur-md hover:border-cyan-300/45 transition-all"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-12 h-12 rounded-xl border-2 border-cyan-300/35"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-black text-white">{r.name}</h4>
                      <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 border border-slate-700 px-2 py-1">
                        <Star size={11} className="text-cyan-200" />
                        <span className="text-[10px] font-black text-slate-200">
                          {r.rating || 0}.0
                        </span>
                      </div>
                      <StarRating rating={r.rating || 0} size={10} />
                    </div>

                    {editingId === r.id ? (
                      <textarea
                        value={draftComment}
                        onChange={(e) => setDraftComment(e.target.value)}
                        className="w-full bg-black/45 border border-gray-700 rounded-xl p-3 text-sm text-gray-200 outline-none focus:border-cyan-300"
                        rows={3}
                      />
                    ) : (
                      <p className="text-slate-300 text-sm leading-relaxed italic">"{r.comment}"</p>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onVoteHelpful(r.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyan-300/30 text-cyan-100 hover:border-cyan-300 transition-all"
                      >
                        <ThumbsUp size={12} />
                        Helpful ({r.helpful || 0})
                      </button>

                      {!r.isPermanent && editingId !== r.id && (
                        <button
                          type="button"
                          onClick={() => beginEdit(r)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-700 text-slate-300 hover:border-cyan-300 hover:text-cyan-200 transition-all"
                        >
                          <Pencil size={12} />
                          Edit
                        </button>
                      )}

                      {!r.isPermanent && editingId === r.id && (
                        <button
                          type="button"
                          onClick={() => saveEdit(r.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyan-300/40 text-cyan-100 hover:bg-cyan-300/10 transition-all"
                        >
                          <Check size={12} />
                          Save
                        </button>
                      )}

                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-auto">
                        <TrendingUp size={12} />
                        Community Driven
                      </span>
                    </div>
                  </div>

                  {!r.isPermanent && (
                    <button
                      onClick={() => onDelete(r.id)}
                      className="p-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/10 rounded-full shrink-0"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {reviews.length > pageSize && (
          <div className="mt-5 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 text-[10px] font-black uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:border-cyan-300 hover:text-cyan-200 transition-all"
            >
              Prev
            </button>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-2">
              Page {page} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 text-[10px] font-black uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:border-cyan-300 hover:text-cyan-200 transition-all"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
};
