import { ApiConfig } from "@/framework/common/types/api";
import { normalizeProduct, getAllProductsQuery } from "./utils";
import { ProductConnection } from "./utils/schema";
import { Product } from "@/framework/common/types/products";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  //  Extracting the products from the api into an array of products
  const products =
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];
  return products;
};

export default getAllProducts;
