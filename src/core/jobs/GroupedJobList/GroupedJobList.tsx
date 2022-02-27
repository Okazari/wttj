import { Stack, Text } from "core/ui";
import { FunctionComponent } from "react";
import { Dictionary } from "lodash";
import JobList from "../JobList";

interface GroupedJobListProps {
  jobsGroups: Dictionary<Array<Job>>;
}

const GroupedJobList: FunctionComponent<GroupedJobListProps> = ({
  jobsGroups,
}) => {
  return (
    <Stack dataTestId="grouped-job-list" flex={1}>
      {Object.entries(jobsGroups).map(([groupName, jobs]) => (
        <Stack key={groupName} role="section" dataTestId="job-group">
          <Text variant="h2">{groupName}</Text>
          <JobList jobs={jobs} />
        </Stack>
      ))}
    </Stack>
  );
};

export default GroupedJobList;
