import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const headingElem = screen.getByRole("heading");

    expect(headingElem).toBeInTheDocument();

    const buttonElem = screen.getByRole("button");
    expect(buttonElem).toBeInTheDocument();
  });

  test("renders with initial state", () => {
    render(<Counter />);
    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking increment button", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    const countElem = screen.getByRole("button", {
      name: "Increment",
    });
    expect(countElem).toBeInTheDocument();

    await user.click(countElem);

    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent("1");
  });

  test("renders a count of 2 after double clicking increment button", async () => {
    const user = userEvent.setup();

    render(<Counter />);
    const countElem = screen.getByRole("button", {
      name: "Increment",
    });
    expect(countElem).toBeInTheDocument();

    await user.dblClick(countElem);

    const headingElem = screen.getByRole("heading");
    expect(headingElem).toHaveTextContent("2");
  });
});
