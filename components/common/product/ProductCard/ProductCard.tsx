import { Product } from "@/framework/common/types/products";
import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import s from "./ProductCard.module.css";

type Props = {
  product: Product;
};

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className={s.root}>
      <div className={s.productTag}>
        <h3 className={s.productTitle}>
          <span>{product!.name}</span>
        </h3>
        <span className={s.productPrice}>14 $</span>
      </div>
      {product.images && (
        <Image
          alt={product.name ?? "Product image"}
          src={product.images[0].url ?? placeholderImage}
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
