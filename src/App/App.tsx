import { useJobs, JobList, GroupedJobList } from "core/jobs";
import { Box, Field, WuiProvider, theme, SearchInput, Select } from "core/ui";
import PageContent from "core/ui/PageContent";
import { FunctionComponent } from "react";

const AppContainer: FunctionComponent = ({ children }) => (
  <Box
    display="grid"
    gridTemplateRows="min-content 1fr"
    gridTemplateColumns="1fr"
    padding="xxl"
    h="100vh"
  >
    {children}
  </Box>
);

const App = () => {
  const {
    query,
    setQuery,
    jobs,
    loading,
    groupedJobsBy,
    groupJobsBy,
    groupJobsByOptions,
  } = useJobs();
  return (
    <WuiProvider theme={theme}>
      <AppContainer>
        <Box display="flex">
          <Box flex={2} marginRight="sm">
            <Field label="Your dream job ?">
              <SearchInput
                ariaLabel="search for your dream job"
                onChange={setQuery}
                value={query}
                placeholder="Operations & Strategy, Communications Manager..."
              />
            </Field>
          </Box>
          <Box flex={1}>
            <Field label="Group results by">
              <Select
                name="group-by"
                id="group-by"
                placeholder="None"
                value={groupedJobsBy}
                onChange={groupJobsBy}
                options={groupJobsByOptions}
                isClearable
              />
            </Field>
          </Box>
        </Box>
        <PageContent loading={loading}>
          {Array.isArray(jobs) && <JobList jobs={jobs} />}
          {!Array.isArray(jobs) && <GroupedJobList jobsGroups={jobs} />}
        </PageContent>
      </AppContainer>
    </WuiProvider>
  );
};

export default App;
