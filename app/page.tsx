import { ProductCard } from "@/components/common/product";
import getAllProducts from "../framework/shopify/product/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";

export default async function Page() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return (
    <div className="fit">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
