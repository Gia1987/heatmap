import React, { ReactElement } from "react";
import dayjs, { Dayjs } from "dayjs";
import { OntoData } from "../typings";
import lodash from "lodash";

export const Cell = ({
  startDate,
  index,
  data,
}: {
  startDate: Dayjs;
  index: number;
  data: OntoData[];
}): ReactElement => {
  let score: number = 0;
  let color: string = "";
  const startingDay = dayjs(startDate).day();
  const className = index >= startingDay ? "" : "hide";
  const dayFormat: string = "YYYY-MM-DD";

  if (index >= startingDay) {
    let date: Dayjs = dayjs(startDate).add(index - startingDay, "day");

    const dataPoint: OntoData[] = lodash.filter(data, {
      date: dayjs(date).format(dayFormat),
    });

    dataPoint.map((item: OntoData): number =>
      item.transactionType === "success"
        ? (score += item.amount)
        : (score -= item.amount)
    );
  }

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
      <div className={`timeline-cells-cell ${className}`} style={style}></div>
    </>
  );
};

export default Cell;
