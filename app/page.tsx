import getAllProducts from "../framework/shopify/product/get-all-products";

export default async function Page() {
  const products = await getAllProducts();

  return (
    <div>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
