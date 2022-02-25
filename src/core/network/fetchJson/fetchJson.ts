const fetchJson = <T>(input: RequestInfo, options?: RequestInit) =>
  fetch(input, options).then((res): Promise<T> => res.json());

export default fetchJson;
