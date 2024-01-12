import { getConfig } from "@/framework/shopify/api/config";
import getAllProductPaths from "@/framework/shopify/product/get-all-product-paths";
import getProduct from "@/framework/shopify/product/get-product";
import { notFound, useParams } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const config = getConfig();
const { products } = await getAllProductPaths(config);

export default async function poductSlug({ params }: Props) {
  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug },
  });

  return (
    <div>
      {products.map((product) => product.slug).includes(params.slug) ? (
        <div>
          {product.name}
          {product.slug}
        </div>
      ) : (
        notFound()
      )}
    </div>
  );
}
