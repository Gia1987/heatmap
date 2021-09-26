import { render } from "@testing-library/react";
import ontoData from "../../assets/data/onto-transactions.json";
import dayjs from "dayjs";
import Timeline from "./";

const Component = (
  props = { range: [dayjs("2019-01-01"), dayjs("2019-12-31")], data: ontoData }
) => {
  return <Timeline {...props} />;
};

describe("<Timeline/>", () => {
  it("render", () => {
    const { container } = render(Component());

    expect(container).toMatchSnapshot();
  });
});
