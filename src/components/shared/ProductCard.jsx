import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm hover:shadow-xl transition">
      <div className="relative h-56 overflow-hidden bg-orange-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-orange-500 font-medium">
          {product.category}
        </p>

        <h3 className="mt-1 text-xl font-bold text-yellow-950">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star size={22} className="font-semibold text-gray-700" />
            <span className="font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>
          <span className="text-lg font-bold text-orange-500">
            ${product.price}
          </span>
        </div>
        <div className="mt-2 space-y-2">
          <AddToCartBtn product={product} />

          <Link
            href={`/products/${product.id}`}
            className="btn btn-warning w-full rounded-full mt-5"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
