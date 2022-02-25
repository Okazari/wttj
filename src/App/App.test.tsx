import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should display an input", () => {
    expect(screen.getByLabelText("Your dream job ?")).toBeInTheDocument();
  });
});
