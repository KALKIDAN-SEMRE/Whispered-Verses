import React from "react";

const Cat: React.FC = () => {
  return (
    <div className="pointer-events-none">
      <style>{`
        .cat-wrap { width: 96px; height: 80px; display:inline-block }
        .cat-bob { animation: cat-bob 3s ease-in-out infinite; }
        .cat-tail { transform-origin: 90% 60%; animation: tail-wag 1s ease-in-out infinite; }
        .cat-eye-lid { transform-origin: center; animation: blink 5s infinite; }

        @keyframes cat-bob {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
        }

        @keyframes tail-wag {
          0% { transform: rotate(0deg) }
          50% { transform: rotate(18deg) }
          100% { transform: rotate(0deg) }
        }

        @keyframes blink {
          0%, 92%, 100% { transform: scaleY(1) }
          94% { transform: scaleY(0.12) }
        }
      `}</style>

      <div className="cat-wrap cat-bob" aria-hidden>
        <svg
          viewBox="0 0 120 100"
          width="96"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* tail */}
          <path
            className="cat-tail"
            d="M92 50 C110 48, 116 66, 100 72"
            fill="none"
            stroke="#6b4f3a"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* body */}
          <ellipse
            cx="60"
            cy="62"
            rx="34"
            ry="22"
            fill="#f3d9c7"
            stroke="#d6b69c"
            strokeWidth="2"
          />

          {/* head */}
          <circle
            cx="60"
            cy="34"
            r="22"
            fill="#f7e6db"
            stroke="#d6b69c"
            strokeWidth="2"
          />

          {/* ears */}
          <path
            d="M46 20 L52 6 L60 26 Z"
            fill="#f7e6db"
            stroke="#d6b69c"
            strokeWidth="1"
          />
          <path
            d="M74 20 L68 6 L60 26 Z"
            fill="#f7e6db"
            stroke="#d6b69c"
            strokeWidth="1"
          />

          {/* eyes */}
          <g transform="translate(0,0)">
            <ellipse cx="52" cy="34" rx="4" ry="4" fill="#2b2b2b" />
            <ellipse cx="68" cy="34" rx="4" ry="4" fill="#2b2b2b" />
            <rect
              className="cat-eye-lid"
              x="48"
              y="31"
              width="8"
              height="8"
              rx="4"
              fill="#f7e6db"
            />
            <rect
              className="cat-eye-lid"
              x="64"
              y="31"
              width="8"
              height="8"
              rx="4"
              fill="#f7e6db"
            />
          </g>

          {/* nose + mouth */}
          <path d="M60 38 q-3 6 0 8 q3 -2 0 -8" fill="#e07b7b" />
          <path
            d="M55 44 q5 4 10 0"
            fill="none"
            stroke="#b76b6b"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* little paw (front) */}
          <circle
            cx="42"
            cy="68"
            r="4"
            fill="#f3d9c7"
            stroke="#d6b69c"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="70"
            r="4"
            fill="#f3d9c7"
            stroke="#d6b69c"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
};

export default Cat;
