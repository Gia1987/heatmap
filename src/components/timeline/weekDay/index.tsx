import React, { ReactElement } from "react";
import { DayNames } from "../typings";

export const WeekDay = ({ index }: { index: number }): ReactElement => {
  const dayNames: DayNames = {
    1: "Mon",
    3: "Wed",
    5: "Fri",
  };

  return <div className="timeline-weekdays-weekday">{dayNames[index]}</div>;
};

export default WeekDay;
