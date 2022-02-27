import { Stack, Text, Card, Button } from "core/ui";
import { FunctionComponent } from "react";
interface JobRowProps {
  name: string;
  type: string;
  office: string;
  applyUrl: string;
  id: number;
}

const JobRow: FunctionComponent<JobRowProps> = ({
  name,
  type,
  office,
  applyUrl,
}) => {
  return (
    <Card role="section">
      <Card.Body>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack>
            <Text variant="h4" as="span">
              {name}
            </Text>
            <Text variant="body1" as="span">
              {type}
            </Text>
            <Text variant="body1" as="span">
              {office}
            </Text>
          </Stack>
          <Button as="a" href={applyUrl} target="_blank">
            Apply
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default JobRow;
