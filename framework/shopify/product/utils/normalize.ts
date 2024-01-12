import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
} from "./schema";
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

const normalizeProcuctOption = ({
  id,
  values,
  name: displayName,
}: ProductOption) => {
  const normalized = {
    id,
    displayName,
    values: values.map((val) => {
      let output: any = {
        label: val,
      };

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: val,
        };
      }

      return output;
    }),
  };
  return normalized;
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
    options,
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
    options: options
      ? options
          .filter((o) => o.name !== "Title")
          .map((o) => normalizeProcuctOption(o))
      : [],
    ...rest,
  };

  return product;
};
