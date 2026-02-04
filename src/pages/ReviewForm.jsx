import React, { useState } from "react";
import { Send } from "lucide-react";
import { PageWrapper } from "../components/PageWrapper";
import { StarRating } from "../components/StarRating";

export const ReviewForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handlePost = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) return;
    onAdd({
      id: String(Date.now()),
      name,
      comment,
      rating,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D9488&color=fff&bold=true`,
      isPermanent: false,
    });
    window.location.href = "/reviews";
  };

  return (
    <PageWrapper title="Submit Review" subtitle="Share your experience">
      <div className="max-w-xl mx-auto bg-gray-900/80 border border-gray-800 p-8 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
        <form onSubmit={handlePost} className="space-y-6">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black/50 border border-gray-800 rounded-xl p-4 focus:border-teal-500 outline-none text-white text-sm"
            placeholder="Your Name"
          />
          <div className="bg-black/50 border border-gray-800 rounded-xl p-4 flex flex-col items-center gap-3">
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
              Select Rating
            </span>
            <StarRating
              rating={rating}
              size={28}
              editable={true}
              onRatingChange={setRating}
            />
          </div>
          <textarea
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-black/50 border border-gray-800 rounded-xl p-4 focus:border-teal-500 outline-none h-32 text-white text-sm"
            placeholder="Write your review here..."
          />
          <button
            type="submit"
            className="w-full bg-teal-600 py-4 rounded-xl font-black uppercase text-white hover:bg-teal-500 transition-all flex justify-center items-center gap-3 text-xs tracking-widest"
            disabled={rating === 0}
          >
            POST REVIEW <Send size={16} />
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};
