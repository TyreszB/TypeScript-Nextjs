import { Product as ShopifyProduct } from "./schema";

const normalizeProduct = (productNode: ShopifyProduct): any => {
  const { id, title: name, handle, vendor, description, ...rest } = productNode;
  // Creating a new product that I want to normalize
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    ...rest,
  };

  return product;
};

export default normalizeProduct;
