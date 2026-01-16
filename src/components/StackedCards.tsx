interface StackedCardsProps {
  className?: string;
  size?: number;
}

export function StackedCards({ className, size = 70 }: StackedCardsProps) {
  const scale = size / 70;
  const height = 72 * scale;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 70 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id="stacked-grad-0"
          x1="44.7073"
          y1="44.2927"
          x2="8.70727"
          y2="44.2927"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7F7F7" stopOpacity="0.85" />
          <stop offset="1" stopColor="#3F3F3F" stopOpacity="0.83" />
        </linearGradient>
        <linearGradient
          id="stacked-grad-1"
          x1="44.2073"
          y1="43.7927"
          x2="2.57054"
          y2="45.4557"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#3F3F3F" />
        </linearGradient>
        <linearGradient
          id="stacked-grad-2"
          x1="43.2073"
          y1="42.7927"
          x2="2.57041"
          y2="44.4541"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#3F3F3F" />
        </linearGradient>
        <linearGradient
          id="stacked-grad-3"
          x1="44.1299"
          y1="44.8701"
          x2="1.41849"
          y2="45.4397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#3F3F3F" />
        </linearGradient>
        <linearGradient
          id="stacked-grad-4"
          x1="40.2073"
          y1="39.7927"
          x2="-0.0041671"
          y2="40.3619"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#3F3F3F" />
        </linearGradient>
      </defs>

      {/* Cards ordered bottom to top, each with staggered animation */}
      <g className="stacked-card" style={{ animationDelay: "0s" }}>
        <rect
          width="40"
          height="40"
          transform="matrix(0.866025 0.5 -0.866025 0.5 34.641 0)"
          fill="url(#stacked-grad-4)"
        />
      </g>
      <g className="stacked-card" style={{ animationDelay: "-0.6s" }}>
        <rect
          width="40"
          height="40"
          transform="matrix(0.866025 0.5 -0.866025 0.5 34.641 0)"
          fill="url(#stacked-grad-3)"
        />
      </g>
      <g className="stacked-card" style={{ animationDelay: "-1.2s" }}>
        <rect
          width="40"
          height="40"
          transform="matrix(0.866025 0.5 -0.866025 0.5 34.641 0)"
          fill="url(#stacked-grad-2)"
        />
      </g>
      <g className="stacked-card" style={{ animationDelay: "-1.8s" }}>
        <rect
          width="40"
          height="40"
          transform="matrix(0.866025 0.5 -0.866025 0.5 34.641 0)"
          fill="url(#stacked-grad-1)"
        />
      </g>
      <g className="stacked-card" style={{ animationDelay: "-2.4s" }}>
        <rect
          width="40"
          height="40"
          transform="matrix(0.866025 0.5 -0.866025 0.5 34.641 0)"
          fill="url(#stacked-grad-0)"
        />
      </g>
    </svg>
  );
}
