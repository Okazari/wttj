declare type Contract = {
  en: string;
};

declare type Office = {
  name: string;
};

declare type WebsitesUrl = {
  website_reference: string;
  url: string;
};

declare type Job = {
  id: number;
  name: string;
  contract_type: Contract;
  office: Office;
  websites_urls: Array<WebsitesUrl>;
};

declare type Organization = {
  jobs: Array<Job>;
};
