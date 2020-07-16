import React from "react";

import ProgressCircle from "./ProgressCircle";

const Report = ({ name, value, startDate, endDate }) => {
  return (
    <div className="report-container">
      <h1>{name}</h1>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <ProgressCircle percentage={value ? value : 0} size={150} />
    </div>
  );
};

export default Report;
