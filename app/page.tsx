import getAllProducts from "../framework/shopify/product/get-all-products";
import { getConfig } from "@/framework/shopify/api/config";

import { Footer, NavBar } from "@/components/common";
import { Grid, Hero, Marquee } from "@/components/ui";
import { ProductCard } from "@/components/product";

export default async function Page() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return (
    <>
      <NavBar />
      <Grid layout="A">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
      <Hero headline="hi" description="hey" />
      <Marquee>
        {products.map((product) => (
          <ProductCard variant="slim" product={product} key={product.id} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.map((product) => (
          <ProductCard variant="slim" product={product} key={product.id} />
        ))}
      </Marquee>
      <Footer />
    </>
  );
}
