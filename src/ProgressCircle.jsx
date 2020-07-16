import React from "react";

const ProgressCircle = ({ percentage, size }) => {
  const radius = (size - 10) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * 3.14 * 2;
  const dashOffset = dashArray - dashArray * (percentage / 100);

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${10}px`}
      />
      <circle
        className="circle-progress"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${10}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }}
      />
      <text
        className="circle-text"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default ProgressCircle;
