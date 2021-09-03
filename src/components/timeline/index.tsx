import React, { ReactElement } from "react";
import Cell from "./cell";
import Month from "./month";
import WeekDay from "./weekDay";
import "./style/index.scss";
import { OntoData } from "./typings";
import dayjs, { Dayjs } from "dayjs";
import lodash from "lodash";

export const Timeline = ({
  range,
  data,
}: {
  range: Dayjs[];
  data: OntoData[];
}): ReactElement => {
  let days: number = Math.abs(range[0].diff(range[1], "days"));
  let cells: object[] = Array.from(new Array(365));
  let weekDays: object[] = Array.from(new Array(7));
  let months: object[] = Array.from(new Array(Math.floor(days / 7)));
  let startDate: Dayjs = range[0];

  const dayFormat: string = "YYYY-MM-DD";

  return (
    <div className="timeline">
      <div className="timeline-body">
        <div className="timeline-weekdays">
          {weekDays.map((_, index: number) => (
            <WeekDay key={index} index={index} />
          ))}
        </div>

        <div className="timeline-cells">
          {cells.map((_, index: number) => {
            let score: number = 0;
            let date: Dayjs = dayjs(startDate).add(index, "day");

            const dataPoint: OntoData[] = lodash.filter(data, {
              date: dayjs(date).format(dayFormat),
            });

            dataPoint.map((item: OntoData) =>
              item.transactionType === "success"
                ? (score += item.amount)
                : (score -= item.amount)
            );

            return <Cell key={index} score={Math.trunc(score)} />;
          })}
        </div>
      </div>
      <div className="timeline-months">
        {months.map((_, index: number) => (
          <Month key={index} index={index} startDate={startDate} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
