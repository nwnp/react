import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("image tag", () => {
    const { container } = render(<App />);

    expect(container.getElementsByClassName("App-logo")).toHaveLength(1);
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "src",
      "logo.svg"
    );
    expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute(
      "alt",
      "logo"
    );
  });

  it("p tag", () => {
    const { container } = render(<App />);

    expect(container.getElementsByTagName("p")).toHaveLength(1);
    expect(container.getElementsByTagName("p")[0]).toHaveTextContent(
      "Edit src/App.js and save to reload."
    );
  });

  // snpapshot
  it("snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
