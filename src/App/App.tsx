import { useJobs } from "core/jobs";
import { Box, Field, WuiProvider, theme, SearchInput } from "core/ui";
import PageContent from "core/ui/PageContent";
import { FunctionComponent } from "react";
import JobList from "./JobList";

const AppContainer: FunctionComponent = ({ children }) => (
  <Box
    display="grid"
    gridTemplateRows="min-content 1fr"
    padding="xxl"
    h="100vh"
  >
    {children}
  </Box>
);

const App = () => {
  const { query, setQuery, jobs, loading } = useJobs();
  return (
    <WuiProvider theme={theme}>
      <AppContainer>
        <Field label="Your dream job ?">
          <SearchInput
            ariaLabel="search for your dream job"
            onChange={setQuery}
            value={query}
            placeholder="Operations & Strategy, Communications Manager..."
          />
        </Field>
        <PageContent loading={loading}>
          <JobList jobs={jobs} />
        </PageContent>
      </AppContainer>
    </WuiProvider>
  );
};

export default App;
