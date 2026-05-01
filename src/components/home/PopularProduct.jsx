import React from "react";
import products from "@/data/products.json";
import ProductCard from "@/components/shared/ProductCard";
import Image from "next/image";

const PopularProduct = () => {
  const popularProducts = products.slice(0, 3);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <Image
            src="/hot-deals.png"
            alt="Hot Deals"
            width={200}
            height={80}
            className="h-12 md:h-16 object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-950 ">
          Popular Summer Products
        </h2>
        <p className="mt-3 text-gray-600">
          Pick your favorite summer essentials before the stock runs out.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
