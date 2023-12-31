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

  //  Extracting the products from the api into an array of products
  const products =
    data.products.edges.map(({ node: product }) => {
      return product;
    }) ?? [];
  return products;
};

export default getAllProducts;
