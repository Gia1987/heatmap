import { render } from "@testing-library/react";
import WeekDay from "./";

const Component = (props = { index: 3 }) => {
  return <WeekDay {...props} />;
};

describe("<WeekDay/>", () => {
  it("render Wed)", () => {
    const { container } = render(Component());

    expect(container).toMatchSnapshot();
  });
});
