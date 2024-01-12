import { ApiConfig, Variables } from "@/framework/common/types/api";
import getProductQuery from "./utils/queries/getProduct";
import { Product as ShopifyProduct } from "./utils/schema";

type FetchType = {
  productByHandle: ShopifyProduct;
};

const getProduct = async (options: {
  config: ApiConfig;
  variables: Variables;
}): Promise<any> => {
  const { config, variables } = options;

  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });

  console.log(data);

  return {
    product: {
      name: "hi",
      slug: "hello",
    },
  };
};

export default getProduct;
