import { ApiConfig, Variables } from "@/framework/common/types/api";
import getProductQuery from "./utils/queries/getProduct";
import { Product as ShopifyProduct } from "./utils/schema";
import { normalizeProduct } from "./utils";
import { Product } from "@/framework/common/types/products";

type FetchType = {
  productByHandle: ShopifyProduct;
};

type ReturnType = {
  product: Product | null;
};

const getProduct = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<ReturnType> => {
  const { config, variables } = options;

  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });

  const { productByHandle } = data;

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  };
};

export default getProduct;
