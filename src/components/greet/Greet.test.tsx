import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */
describe("Greet", () => {
  it("Greet renders hello when name is not passed", () => {
    render(<Greet />);

    const textElement = screen.getByText(/Hello/);

    expect(textElement).toBeInTheDocument();
  });

  // it("Greet render hello with name when name passed", () => {
  //   render(<Greet name="jhantu" />);

  //   const elem = screen.getByText(/hello jhantu/i);
  //   expect(elem).toBeInTheDocument();
  // });
});
