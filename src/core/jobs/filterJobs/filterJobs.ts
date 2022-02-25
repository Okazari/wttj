const filterJobs = (jobList: Array<Job>, query: string) => {
  if (!query || query === "") return jobList;
  return jobList.filter((job) => job.name.includes(query));
};
export default filterJobs;
