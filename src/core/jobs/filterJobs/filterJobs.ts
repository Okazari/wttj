const filterJobs = (jobList: Array<Job>, query: string) => {
  if (!query || query === "") return jobList;
  return jobList.filter((job) =>
    job.name.toLowerCase().includes(query.toLowerCase())
  );
};
export default filterJobs;
