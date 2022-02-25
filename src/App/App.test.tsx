import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  beforeAll(() => {
    render(<App />);
  });
  it("should display a welcome message", () => {
    expect(screen.getByRole("main")).toHaveTextContent("Welcome");
  });
});
