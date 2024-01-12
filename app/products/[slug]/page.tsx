import { getConfig } from "@/framework/shopify/api/config";
import getAllProductPaths from "@/framework/shopify/product/get-all-product-paths";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
const config = getConfig();
const { products } = await getAllProductPaths(config);

export default function poductSlug({ params }: Props) {
  return (
    <div>
      {products.map((product) => product.slug).includes(params.slug) ? (
        <div>{params.slug}</div>
      ) : (
        notFound()
      )}
    </div>
  );
}
