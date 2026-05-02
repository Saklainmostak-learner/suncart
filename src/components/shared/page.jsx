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
      className="btn btn-warning rounded-full mt-8 px-10"
    >
      Add to Cart
    </button>
    );
};

export default AddToCartBtn;