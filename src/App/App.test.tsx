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
    let groupResults: HTMLElement;
    let jobsGroup: Array<HTMLElement>;
    let jobs: Array<HTMLElement>;

    beforeEach(async () => {
      await waitForElementToBeRemoved(() => screen.getByRole("status"));
      jobList = screen.getByTestId("grouped-job-list");
      jobsGroup = within(jobList).getAllByTestId("job-group");
      jobs = within(jobList).getAllByRole("section");
      groupResults = screen.getByRole("combobox");
    });

    it("should show a list of department", () => {
      expect(jobsGroup).toHaveLength(2);
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

    describe("when user clear group by input", () => {
      beforeEach(() => {
        const clearGroupResult = within(groupResults).getByRole("button", {
          name: "Clear",
        });
        userEvent.click(clearGroupResult);
      });
      it("should display jobs as a flat list", () => {
        expect(jobList).not.toBeInTheDocument();
        expect(screen.getAllByRole("section")).toHaveLength(3);
      });
    });

    describe("when user apply to a job", () => {
      let applyBtn: HTMLElement;
      beforeEach(() => {
        const jobToApply = jobs[0];
        applyBtn = within(jobToApply).getByText("Apply");
      });
      it("should open job page in new tab", () => {
        expect(applyBtn).toHaveAttribute(
          "href",
          "https://www.welcometothejungle.com/companies/wttj/jobs/communications-manager_paris"
        );
        expect(applyBtn).toHaveAttribute("target", "_blank");
      });
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
