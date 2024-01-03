import { Product } from "@/framework/common/types/products";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

type Props = {
  product: Product;
};

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div>
        <h3>{product!.name}</h3>
        <span>14 $</span>
      </div>
      {product.images && (
        <Image
          alt={product.name ?? "Product imaage"}
          src={placeholderImage}
          height={540}
          width={540}
          quality="85"
          layout="responsive"
        />
      )}
    </Link>
  );
};

export default ProductCard;
