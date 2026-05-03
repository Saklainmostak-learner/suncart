"use client";
import { clearCart, getCart, removeFromCart } from "@/lib/cart";
import { Box, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const load = () => setCart(getCart());

  useEffect(() => {
    load();
    window.addEventListener("cartUpdated", load);
    return () => window.removeEventListener("cartUpdated", load);
  }, []);

  const total = cart.reduce((t, i) => t + i.price * i.qty, 0);
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-yellow-900">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-orange-600 font-semibold flex gap-2">
          <Box/>
          Cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-xl"
              >
                <div>
                  <h2 className="font-bold text-yellow-900">{item.name}</h2>
                  <p className="text-yellow-600">
                    ${item.price} × {item.qty}
                  </p>
                </div>

                <button
                  onClick={() => {
                    removeFromCart(item.id);
                    load();
                  }}
                  className="text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xl font-bold text-yellow-900">
            Total: ${total}
          </div>

          <button
            onClick={() => {
              clearCart();
              load();
            }}
            className="btn btn-error mt-4"
          >
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
};

export default CartPage;
