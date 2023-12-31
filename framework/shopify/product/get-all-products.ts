import getAllProductsQuery from "./utils/queries/getAllProducts";
import fetchApi from "./utils/fetch-api";
import { ProductConnection } from "./utils/schema";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  });
  //   returning all products
  return data.products;
};

export default getAllProducts;
