type FetchParams = {
  query: string;
};

type FetcherResult<T> = { data: T };

// Fetch products aysnc function
const fetchApi = async <T>({
  query,
}: FetchParams): Promise<FetcherResult<T>> => {
  const url = "http://localhost:4000/graphql";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, errors } = await res.json();

  // Catch Errors for fetching products
  if (errors) throw new Error(errors[0].message ?? errors.message);

  return { data };
};

export default fetchApi;
