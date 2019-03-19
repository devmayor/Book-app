import React from "react";

export const Background = ({ children }) => {
  return (
    <div className="books">
      <div className="curve-1">
        <svg
          width="100%"
          height="250"
          viewBox="0 0 375 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="50%"
            cy="-720"
            rx="1500"
            ry="850"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="187"
              y1="-63"
              x2="63.0824"
              y2="149.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FEB665" />
              <stop offset="1" stop-color="#F66EB4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="main">{children}</div>
    </div>
  );
};
