declare type Contract = {
  en: string;
};

declare type Office = {
  name: string;
};

declare type Job = {
  id: number;
  name: string;
  contract_type: Contract;
  office: Office;
};

declare type Organization = {
  jobs: Array<Job>;
};
