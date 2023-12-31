import { ImageEdge, MoneyV2, Product as ShopifyProduct } from "./schema";
import { Product } from "@/framework/common/types/products";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) => {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
};

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
  //  Creating function to normalize image Collection

  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageCollection,
    priceRange,
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
    images: normalizeProductImages(imageCollection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
};
