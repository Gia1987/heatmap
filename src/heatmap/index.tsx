import React, { ReactElement } from "react";
import Timeline from "../components/timeline";
import ontoData from "../assets/data/onto-transactions.json";
import dayjs, { Dayjs } from "dayjs";

export const Heatmap = (): ReactElement => {
  let startDate: Dayjs = dayjs(new Date("2019, 1, 1"), "days");
  let endDate: Dayjs = dayjs(new Date("2019, 12, 31"), "days");

  let dateRange: Dayjs[] = [startDate, endDate];

  return (
    <div className="heatmap">
      <Timeline range={dateRange} data={ontoData} />
      <div className="description">
        {"Fail transaction"}
        <div className="redder"></div>
      </div>
      <div className="description">
        {" Success transaction"}
        <div className="greener"></div>
      </div>
    </div>
  );
};

export default Heatmap;
