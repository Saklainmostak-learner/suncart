import React from "react";
import products from "@/data/products.json";
import Image from "next/image";
import Link from "next/link";
import { PackageOpenIcon, Star } from "lucide-react";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import AddToCartBtn from "@/components/shared/page";

const ProductsPage = async ({ params }) => {
  const { id } = await  params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/login?redirect=/products/${id}`);
  }

  const product = products.find((item) => item.id === Number(id));
  

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PackageOpenIcon size={60} className="text-red-400" />
        <h2 className="text-3xl font-bold text-red-500">Product not found</h2>
      </div>
    );
  }
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <Link href="/" className="btn btn-outline rounded-full mb-8 bg-[#e5a600]">
        ← Back Home
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-orange-100 shadow-sm p-6 md:p-10">
        <div className="relative h-[360px] md:h-[500px] rounded-3xl overflow-hidden bg-orange-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-orange-500 font-semibold">{product.category}</p>

          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-yellow-950">
            {product.name}
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Brand: <span className="font-semibold">{product.brand}</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Star size={25} className="font-semibold text-gray-700" />
              <span className="font-semibold text-gray-700">
                {product.rating}
              </span>
            </div>
            <span className="badge badge-success badge-lg">
              Stock: {product.stock}
            </span>
            <span className="badge badge-outline badge-lg">
              ${product.price}
            </span>
          </div>

          <p className="mt-6 text-gray-600 leading-7">{product.description}</p>

          <AddToCartBtn product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
