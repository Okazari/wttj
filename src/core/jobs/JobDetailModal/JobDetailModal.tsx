import { Link, Modal, useModalState, Text, Button, Box } from "core/ui";
import { FunctionComponent } from "react";
interface JobDetailModal {
  name: string;
  type: string;
  office: string;
  applyUrl: string;
  description: string;
  profile: string;
  process: string;
}

const JobDetailModal: FunctionComponent<JobDetailModal> = ({
  name,
  type,
  office,
  applyUrl,
  children,
  description,
  profile,
  process,
}) => {
  const modal = useModalState();
  return (
    <>
      <Modal.Trigger as={Link} {...modal}>
        {children}
      </Modal.Trigger>
      <Modal {...modal} ariaLabel="Jobs detail">
        <span data-testid="modal">
          <Modal.Title>
            {name} - {type} - {office}
          </Modal.Title>
          <Box overflow="auto" h="70vh">
            <Modal.Content>
              <section>
                <Text variant="h3">Description</Text>
                <Text variant="body1" as="span">
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </Text>
              </section>
              <section>
                <Text variant="h3">Profile</Text>
                <Text variant="body1" as="span">
                  <p dangerouslySetInnerHTML={{ __html: profile }} />
                </Text>
              </section>
              <section>
                <Text variant="h3">Process</Text>
                <Text variant="body1" as="span">
                  <p dangerouslySetInnerHTML={{ __html: process }} />
                </Text>
              </section>
            </Modal.Content>
          </Box>
          <Modal.Footer>
            <Button as="a" href={applyUrl} target="_blank">
              Apply
            </Button>
          </Modal.Footer>
        </span>
      </Modal>
    </>
  );
};

export default JobDetailModal;
