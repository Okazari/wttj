import { Stack } from "core/ui";
import { FunctionComponent } from "react";

interface JobCardProps {
  name: string;
  type: string;
  office: string;
  id: number;
}

const JobCard: FunctionComponent<JobCardProps> = ({ name, type, office }) => {
  return (
    <Stack as="ul" role="section">
      <div>{name}</div>
      <div>{type}</div>
      <div>{office}</div>
    </Stack>
  );
};

export default JobCard;
