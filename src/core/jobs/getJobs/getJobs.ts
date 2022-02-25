import { DEMO_FULL_ENDPOINT } from "core/config";
import { fetchJson } from "core/network";

const getJobs = () =>
  fetchJson<Organization>(DEMO_FULL_ENDPOINT).then(
    (organization) => organization.jobs
  );

export default getJobs;
