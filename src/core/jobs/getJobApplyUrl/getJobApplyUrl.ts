const getJobApplyUrl = (job: Job) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  job.websites_urls.find((website) => website.website_reference === "wttj_fr")!
    .url;

export default getJobApplyUrl;
