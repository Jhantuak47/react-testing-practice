import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["java", "php", "c++", "python"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElem = screen.getByRole("list");
    expect(listElem).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);

    const listElements = screen.getAllByRole("listitem");

    expect(listElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButtonElem = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButtonElem).toBeInTheDocument();
  });

  test("Start learning button is not render", () => {
    render(<Skills skills={skills} />);

    const loginButtonElem = screen.queryByRole("button", {
      name: "Start Learning..",
    });

    expect(loginButtonElem).not.toBeInTheDocument();
  });

  test("Start learning button eventually renders", async () => {
    render(<Skills skills={skills} />);
    const startLearningButtonElm = await screen.findByRole(
      "button",
      {
        name: "Start Learning..",
      },
      {
        timeout: 2000,
      }
    );

    expect(startLearningButtonElm).toBeInTheDocument();

    // debugging purpose
    // const view = render(<Skills skills={skills} />);
    // logRoles(view.container);
  });
});
