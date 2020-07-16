import React from "react";

const Report = ({ name, value, startDate, endDate }) => {
  return (
    <div className="report-container">
      <h1>{name}</h1>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <div className="value-container">{value}%</div>
    </div>
  );
};

export default Report;
