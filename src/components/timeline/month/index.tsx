import React, { ReactElement } from "react";
import dayjs, { Dayjs } from "dayjs";

export const Month = ({
  startDate,
  index,
}: {
  startDate: Dayjs;
  index: number;
}): ReactElement => {
  let date: Dayjs = dayjs(startDate).add(index * 7, "day");
  let monthName: string = date.format("MMM");

  return (
    <div className={`timeline-months-month ${monthName}`}>{monthName}</div>
  );
};

export default Month;
