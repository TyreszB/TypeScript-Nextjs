import { ImageEdge, Product as ShopifyProduct } from "./schema";
import { Product } from "@/framework/common/types/products";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) => {
  edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
};

const normalizeProduct = (productNode: ShopifyProduct): Product => {
  //  Creating function to normalize image Collection

  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageCollection,
    ...rest
  } = productNode;
  // Creating a new product that I want to normalize
  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(ImageCollection),
    ...rest,
  };

  return product;
};

export default normalizeProduct;
