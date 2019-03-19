import React from "react";

export const Rating = ({ rating, onSelect }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value, index) => {
        if (index < rating)
          return (
            <svg
              onClick={() => onSelect(index + 1)}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5.744L8 0L6 5.744H0L4.89 9.572L2.968 15.488L8 11.832L13.032 15.488L11.11 9.572L16 5.744H10Z"
                fill="#FFD381"
              />
            </svg>
          );
        return (
          <svg
            onClick={() => onSelect(index + 1)}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <path
                d="M10 5.744L8 0L6 5.744H0L4.89 9.572L2.968 15.488L8 11.832L13.032 15.488L11.11 9.572L16 5.744H10Z"
                fill="#384F7D"
                fill-opacity="0.65"
              />
            </g>
          </svg>
        );
      })}
    </div>
  );
};
