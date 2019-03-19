import React from "react";

export const Background = ({ children, screenId }) => {
  const screens = {
    1: (
      <>
        <div className="ball-1">
          <svg
            width="54"
            height="75"
            viewBox="0 0 54 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16.5" cy="37.5" r="37.5" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="10.1581"
                y1="10.2022"
                x2="62.6029"
                y2="92.4265"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FEB665" />
                <stop offset="1" stop-color="#F66EB4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="ball-3">
          <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="44.9013"
              cy="44.9012"
              r="36.3654"
              transform="rotate(-15.8189 44.9013 44.9012)"
              fill="url(#paint1_linear)"
            />
            <defs>
              <linearGradient
                id="paint1_linear"
                x1="108.279"
                y1="-14.2467"
                x2="-16.437"
                y2="95.0968"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6CC9F6" />
                <stop offset="1" stop-color="#A9A5F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </>
    ),
    2: (
      <>
        <div className="ball-4">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="19" fill="url(#paint4_linear)" />
            <defs>
              <linearGradient
                id="paint4_linear"
                x1="15.7868"
                y1="5.16912"
                x2="42.3588"
                y2="46.8294"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FEB665" />
                <stop offset="1" stop-color="#F66EB4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="ball-5">
          <svg
            width="133"
            height="63"
            viewBox="0 0 133 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="66.6696"
              cy="-3.33189"
              r="66.1429"
              transform="rotate(-15.8189 66.6696 -3.33189)"
              fill="url(#paint5_linear)"
            />
            <defs>
              <linearGradient
                id="paint5_linear"
                x1="181.943"
                y1="-110.913"
                x2="-44.895"
                y2="87.966"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2DEEF9" />
                <stop offset="1" stop-color="#E084F1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </>
    )
  };
  return (
    <div className="onboarding">
      <div className="ball-2">
        <svg
          width="252"
          height="145"
          viewBox="0 0 252 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="84.2011"
            cy="167.9"
            r="135.533"
            transform="rotate(-15.8189 84.2011 167.9)"
            fill="url(#paint2_linear)"
            fill-opacity="0.15"
          />
          <defs>
            <linearGradient
              id="paint2_linear"
              x1="320.408"
              y1="-52.5435"
              x2="-144.406"
              y2="354.979"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2DEEF9" />
              <stop offset="1" stop-color="#E084F1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {screens[screenId]}
      <div className="main">{children}</div>
    </div>
  );
};
