import {
  ApiFetcherOptions,
  ApiFetcherResults,
} from "@/framework/common/types/api";

type FetchParams = {
  query: string;
};

type FetcherResult<T> = { data: T };

// Fetch products aysnc function
const fetchApi = async <T>({
  url,
  query,
  variables,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await res.json();

  // Catch Errors for fetching products
  if (errors) throw new Error(errors[0].message ?? errors.message);

  return { data };
};

export default fetchApi;
