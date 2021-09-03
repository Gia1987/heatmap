import React, { ReactElement } from "react";

export const Cell = ({ score }: { score: number }): ReactElement => {
  let color: string = "";

  if (score <= -10000) {
    color = "#DC0808";
  } else if (score <= -5000) {
    color = "#E7555A";
  } else if (score <= -1000) {
    color = "#EB7378";
  } else if (score <= -500) {
    color = "#E96266";
  } else if (score < 0) {
    color = "#F8CCCD";
  } else if (score >= 10000) {
    color = "#02A004";
  } else if (score >= 5000) {
    color = "#59BD5B";
  } else if (score >= 1000) {
    color = "#6DC56E";
  } else if (score >= 500) {
    color = "#A4DBA5";
  } else if (score > 0) {
    color = "#96D598";
  }

  let style = {
    backgroundColor: color,
  };

  return (
    <>
      <div className="timeline-cells-cell" style={style}></div>
    </>
  );
};

export default Cell;
