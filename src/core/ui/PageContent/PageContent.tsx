import { Box, Loader } from "core/ui";
import { FunctionComponent } from "react";

interface PageContentProps {
  loading?: boolean;
}

const PageContent: FunctionComponent<PageContentProps> = ({
  loading,
  children,
}) => {
  return (
    <Box display="flex" paddingTop="xl" paddingBottom="xl">
      {loading ? (
        <div data-testid="loader">
          <Box
            flex={1}
            display="flex"
            role="status"
            alignItems="center"
            justifyContent="center"
          >
            <Loader size="md" color="primary.500" />
          </Box>
        </div>
      ) : (
        children
      )}
    </Box>
  );
};

export default PageContent;
