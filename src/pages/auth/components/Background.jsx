import React from "react";

export const Background = ({ children }) => {
  return (
    <div className="auth">
      <div className="ball-1">
        <svg
          width="242"
          height="160"
          viewBox="0 0 242 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="92.5"
            cy="10.5"
            r="149.5"
            fill="url(#paint0_linear)"
            fill-opacity="0.61"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="242"
              y1="143"
              x2="-191.5"
              y2="-290.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00452904" stop-color="white" />
              <stop offset="0.626054" stop-color="#79ABFC" />
              <stop offset="1" stop-color="#606CFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="ball-2">
        <svg
          width="57"
          height="57"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="28.3534"
            cy="28.3536"
            r="27.8227"
            transform="rotate(-15.8189 28.3534 28.3536)"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="76.8427"
              y1="-16.8998"
              x2="-18.5757"
              y2="66.7576"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2DEEF9" />
              <stop offset="1" stop-color="#E084F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="main">{children}</div>
    </div>
  );
};
