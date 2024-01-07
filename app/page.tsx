import { ProductCard } from "@/components/common/product";
import getAllProducts from "../framework/shopify/product/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";
import { Grid, Hero, Marquee } from "@/components/common/ui";

export default async function Page() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return (
    <>
      <Grid>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
      <Hero headline="hi" description="hey" />
      <Marquee>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Marquee>
    </>
  );
}
