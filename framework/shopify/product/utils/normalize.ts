import { ImageEdge, Product as ShopifyProduct } from "./schema";

const normalizeProduct = (productNode: ShopifyProduct): any => {
  //  Creating function to normalize image Collection
  function normalizeImages({ edges }: { edges: Array<ImageEdge> }) {
    return edges.map(({ node: { originalSrc: url, ...rest } }) => {
      return {
        url: `/images/${url}`,
        ...rest,
      };
    });
  }

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
    images: normalizeImages(ImageCollection),
    ...rest,
  };

  return product;
};

export default normalizeProduct;
