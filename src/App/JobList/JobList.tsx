import { getJobApplyUrl } from "core/jobs";
import { Stack } from "core/ui";
import { FunctionComponent } from "react";
import JobRow from "./JobRow";

interface JobListProps {
  jobs: Array<Job>;
}

const JobList: FunctionComponent<JobListProps> = ({ jobs }) => {
  return (
    <Stack dataTestId="job-list" flex={1}>
      {jobs.map((job, index) => (
        <JobRow
          id={job.id}
          aria-rowindex={index}
          name={job.name}
          type={job.contract_type.en}
          office={job.office.name}
          applyUrl={getJobApplyUrl(job)}
          key={job.id}
        />
      ))}
    </Stack>
  );
};

export default JobList;
