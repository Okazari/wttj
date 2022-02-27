import { filterJobs, getJobs } from "core/jobs";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import { useAsync } from "react-use";
import { groupBy } from "lodash/fp";

interface Option {
  value: string;
  label: string;
}

const groupJobsByOptions = [
  { value: "department.name", label: "Department name" },
  { value: "office.name", label: "Office name" },
  { value: "contract_type.en", label: "Job type" },
];

const useJobs = () => {
  const { loading, value = [] } = useAsync(getJobs);
  const [groupedJobsBy, _groupJobsBy] = useState<Option | undefined>(
    groupJobsByOptions[0]
  );
  const groupJobsBy = useCallback(
    (value) => {
      _groupJobsBy(groupJobsByOptions.find((option) => option.value === value));
    },
    [groupJobsByOptions]
  );
  const [query, setQuery] = useState("");
  const jobs = useMemo(() => {
    const filteredJobs = filterJobs(value, query);
    return groupedJobsBy
      ? groupBy(groupedJobsBy.value, filteredJobs)
      : filteredJobs;
  }, [query, loading, groupedJobsBy, groupBy]);

  return {
    query,
    setQuery,
    jobs,
    loading,
    groupedJobsBy,
    groupJobsBy,
    groupJobsByOptions,
  };
};

export default useJobs;
