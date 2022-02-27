import { Stack, Text, Card, Button } from "core/ui";
import JobDetailModal from "../../JobDetailModal";
import { FunctionComponent } from "react";
interface JobRowProps {
  name: string;
  type: string;
  office: string;
  applyUrl: string;
  description: string;
  profile: string;
  process: string;
}

const JobRow: FunctionComponent<JobRowProps> = ({
  name,
  type,
  office,
  applyUrl,
  description,
  profile,
  process,
}) => {
  return (
    <div data-aos="fade-up" data-aos-duration="200" data-aos-offset="0">
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
              <JobDetailModal
                name={name}
                office={office}
                type={type}
                applyUrl={applyUrl}
                description={description}
                profile={profile}
                process={process}
              >
                See more...
              </JobDetailModal>
            </Stack>
            <Button as="a" href={applyUrl} target="_blank">
              Apply
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobRow;
