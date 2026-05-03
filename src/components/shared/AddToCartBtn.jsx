"use client";
import { addToCart } from '@/lib/cart';
import React from 'react';
import toast from 'react-hot-toast';

const AddToCartBtn = ({product}) => {
    return (
         <button
      onClick={() => {
        addToCart(product);
        toast.success("Added to cart");
      }}
      className="w-full border border-orange-300 text-orange-500 py-2 rounded-full hover:bg-orange-500 hover:text-white transition"
    >
      Add to Cart
    </button>
    );
};

export default AddToCartBtn;