import { ApiConfig } from "@/framework/common/types/api";
import { Product } from "@/framework/common/types/products";
import getAllProductPathsQuery from "./utils/queries/getAllProductsPaths";
import { ProductConnection } from "./utils/schema";

type ReturnType = {
  products: Pick<Product, "slug">[];
};

const getAllProductPaths = async (config: ApiConfig): Promise<ReturnType> => {
  const { data } = await config.fetch<{ products: ProductConnection }>({
    query: getAllProductPathsQuery,
    url: config.apiUrl,
  });
  const products = data.products.edges.map(({ node: { handle } }) => {
    return {
      slug: handle,
    };
  });
  return { products };
};

export default getAllProductPaths;
