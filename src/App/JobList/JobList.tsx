import { Stack } from "core/ui";
import { FunctionComponent } from "react";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: Array<Job>;
}

const JobList: FunctionComponent<JobListProps> = ({ jobs }) => {
  return (
    <Stack as="ul" dataTestId="job-list">
      {jobs.map((job, index) => (
        <JobCard
          id={job.id}
          aria-rowindex={index}
          name={job.name}
          type={job.contract_type.en}
          office={job.office.name}
          key={job.id}
        />
      ))}
    </Stack>
  );
};

export default JobList;
