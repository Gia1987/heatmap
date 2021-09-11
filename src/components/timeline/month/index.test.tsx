import { render } from "@testing-library/react";
import Month from "./";
import dayjs from "dayjs";

const Component = (props = { startDate: dayjs("2019-01-01"), index: 5 }) => {
  return <Month {...props} />;
};

describe("<Month />", () => {
  it("renders Feb", () => {
    const { container } = render(Component());

    expect(container).toMatchSnapshot();
  });
});
