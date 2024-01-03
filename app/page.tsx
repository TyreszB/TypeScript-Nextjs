import getAllProducts from "../framework/shopify/product/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";

export default async function Page() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return (
    <div>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
