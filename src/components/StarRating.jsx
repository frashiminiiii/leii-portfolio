import React, { useState } from "react";
import { Star } from "lucide-react";

export const StarRating = ({
  rating,
  size = 16,
  editable = false,
  onRatingChange,
}) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hover || rating);
        return (
          <button
            key={star}
            type="button"
            disabled={!editable}
            onMouseEnter={() => editable && setHover(star)}
            onMouseLeave={() => editable && setHover(0)}
            onClick={() => editable && onRatingChange(star)}
            className={`${editable ? "cursor-pointer hover:scale-125" : "cursor-default"} transition-all duration-200`}
          >
            <Star
              size={size}
              fill={isFilled ? "#FACC15" : "none"}
              className={isFilled ? "text-yellow-400" : "text-gray-600"}
              strokeWidth={isFilled ? 0 : 2}
            />
          </button>
        );
      })}
    </div>
  );
};
