import { db } from "@/db";
import { products } from "@/db/schema";
import ProductList from "@/components/product-list";

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Nike Store
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Explore our collection of premium Nike products
        </p>
      </div>

      {allProducts.length === 0 ? (
        <p className="text-center text-zinc-500">
          No products found. Run the seed script to add sample products.
        </p>
      ) : (
        <ProductList products={allProducts} />
      )}
    </section>
  );
}
