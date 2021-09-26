import React, { ReactElement } from "react";
import Cell from "./cell";
import Month from "./month";
import WeekDay from "./weekDay";
import "./style/index.scss";
import { OntoData } from "./typings";
import dayjs, { Dayjs } from "dayjs";

export const Timeline = ({
  range,
  data,
}: {
  range: Dayjs[];
  data: OntoData[];
}): ReactElement => {
  let startDate: Dayjs = range[0];

  let days: number = Math.abs(range[0].diff(range[1], "days"));

  let cells: undefined[] = Array.from(new Array(days + dayjs(startDate).day()));
  let weekDays: undefined[] = Array.from(new Array(7));
  let months: undefined[] = Array.from(new Array(Math.floor(days / 7)));

  return (
    <div className="timeline">
      <div className="timeline-body">
        <div className="timeline-weekdays">
          {weekDays.map(
            (_, index: number): ReactElement => (
              <WeekDay key={index} index={index} />
            )
          )}
        </div>
        <div className="timeline-cells">
          {cells.map(
            (_, index: number): ReactElement => (
              <Cell
                key={index}
                startDate={startDate}
                index={index}
                data={data}
              />
            )
          )}
        </div>
      </div>
      <div className="timeline-months">
        {months.map(
          (_, index: number): ReactElement => (
            <Month key={index} index={index} startDate={startDate} />
          )
        )}
      </div>
    </div>
  );
};

export default Timeline;
