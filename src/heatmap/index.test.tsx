import { render } from "@testing-library/react";
import Heatmap from "./";

const Component = () => {
  return <Heatmap />;
};

describe("<Heatmap/>", () => {
  it("render", () => {
    const { container } = render(Component());

    expect(container).toMatchSnapshot();
  });
});
