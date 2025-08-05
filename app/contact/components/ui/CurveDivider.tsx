import { useId } from 'react';

interface CurveDividerProps {
  height?: number
  topColor?: string
  bottomColor?: string
  inverted?: boolean
}

export default function CurveDivider({
  height = 120,
  topColor = "#ebecf0",
  bottomColor = "#ffffff",
  inverted = false,
}: CurveDividerProps) {
  const gradientId = useId();

  return (
    <div className="w-full overflow-hidden" style={{ height: `${height}px` }}>
      <svg
        className={`w-full h-full ${inverted ? "rotate-180" : ""}`}
        viewBox="10 -20 1870 210"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="10%" stopColor={topColor} />
            <stop offset="70%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradientId})`}
          d="M977.9,76.2 C475.2,-17.4 0.2,132.5 0.2,132.5 L0.2,275.5 L1891.3,275.5 L1891.3,0.7 C1891.3,0.7 1480.6,169.8 977.9,76.2 Z"
        />
      </svg>
    </div>
  )
}
