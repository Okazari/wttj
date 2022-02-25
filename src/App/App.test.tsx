import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  it("should display a welcome message", () => {
    expect(screen.getByRole("main")).toHaveTextContent("Welcome");
  });

  it("should display a button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
