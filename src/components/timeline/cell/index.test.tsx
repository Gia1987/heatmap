import { render } from "@testing-library/react";
import ontoData from "../../../assets/data/onto-transactions.json";
import dayjs from "dayjs";
import Cell from "./";

const Component = (
  props = { startDate: dayjs("2019-01-01"), index: 1, data: ontoData }
) => {
  return <Cell {...props} />;
};

describe("<Cell/>", () => {
  it("render rgb(235, 115, 120)", () => {
    const { container } = render(Component());

    expect(container).toMatchSnapshot();
  });
});
