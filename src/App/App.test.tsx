import App from "./App";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("when app is loading", () => {
    it("should show a loader", () => {
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });

  describe("when app is loaded", () => {
    let jobList: HTMLElement;
    beforeEach(async () => {
      await waitForElementToBeRemoved(() => screen.getByRole("status"));
      jobList = screen.getByTestId("job-list");
    });
    it("should show a list of jobs", () => {
      const sections = within(jobList).getAllByRole("section");
      expect(sections).toHaveLength(3);
    });

    it("should show jobs' names", () => {
      expect(jobList).toHaveTextContent("Communications Manager");
      expect(jobList).toHaveTextContent("Backend Developer (apprenticeship)");
      expect(jobList).toHaveTextContent("Frontend Developer (apprenticeship)");
    });

    it("should show jobs' types", () => {
      expect(jobList).toHaveTextContent("Full-Time");
      expect(jobList).toHaveTextContent("Apprenticeship");
    });

    it("should show jobs' location", () => {
      expect(jobList).toHaveTextContent("Paris");
    });

    describe("when user search for a job", () => {
      let searchBox: HTMLElement;
      beforeEach(() => {
        searchBox = screen.getByRole("searchbox");
        userEvent.click(within(searchBox).getByRole("textbox"));
        userEvent.keyboard("end");
      });
      it("should filter jobs' list", () => {
        expect(jobList).not.toHaveTextContent("Communications Manager");
        expect(jobList).toHaveTextContent("Backend Developer (apprenticeship)");
        expect(jobList).toHaveTextContent(
          "Frontend Developer (apprenticeship)"
        );
      });

      describe("when user clear search input", () => {
        beforeEach(() => {
          const searchBoxClearButton = within(searchBox).getByRole("button");
          userEvent.click(searchBoxClearButton);
        });
        it("should show full jobs' list", () => {
          expect(jobList).toHaveTextContent("Communications Manager");
          expect(jobList).toHaveTextContent(
            "Backend Developer (apprenticeship)"
          );
          expect(jobList).toHaveTextContent(
            "Frontend Developer (apprenticeship)"
          );
        });
      });
    });
  });
});