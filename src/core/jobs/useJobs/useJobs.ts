import { filterJobs, getJobs } from "core/jobs";
import { useMemo } from "react";
import { useState } from "react";
import { useAsync } from "react-use";

const useJobs = () => {
  const { loading, value = [] } = useAsync(getJobs);
  const [query, setQuery] = useState("");
  const jobs = useMemo(() => filterJobs(value, query), [query, loading]);
  return {
    query,
    setQuery,
    jobs,
    loading,
  };
};

export default useJobs;
