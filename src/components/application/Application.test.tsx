import { render, screen } from "@testing-library/react";
import Application from "./Application";
import { assert } from "console";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const heading = screen.getByRole("heading", {
      name: "Job application form",
    });
    expect(heading).toBeInTheDocument();

    const textElem = screen.getByRole("textbox", { name: "Name" });
    expect(textElem).toBeInTheDocument();

    const textBoxElem = screen.getByRole("textbox", { name: "Bio" });
    expect(textBoxElem).toBeInTheDocument();

    const roleElem = screen.getByRole("checkbox");
    expect(roleElem).toBeInTheDocument();

    const jobLocationElem = screen.getByRole("combobox");
    expect(jobLocationElem).toBeInTheDocument();

    const paraElem = screen.getByText("All fields are mandatory");
    expect(paraElem).toBeInTheDocument();

    const nameElemByValue = screen.getByDisplayValue("Jhantu Nandi");
    expect(nameElemByValue).toBeInTheDocument();

    // similarly check all possible element present in the dom.
  });
});
