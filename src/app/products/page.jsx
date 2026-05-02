import ProductCard from '@/components/shared/ProductCard';
import products from "@/data/products.json";
import React from 'react';

const page = () => {
    return (
       <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold">All Summer Items</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-950">
          Explore Our Products
        </h1>
        <p className="mt-3 text-gray-600">
          Browse all summer essentials from SunCart.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    );
};

export default page;