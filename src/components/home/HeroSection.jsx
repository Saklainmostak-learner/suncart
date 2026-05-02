"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Summer Collection 2026",
    desc: "Upgrade your lifestyle with trending products.",
    img: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
  },
  {
    title: "Hot Deals 🔥",
    desc: "Get best discounts before stock ends.",
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
  },
  {
    title: "Premium Accessories",
    desc: "Style meets comfort.",
    img: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];
  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      <Image
        key={slide.img}
        src={slide.img}
        alt="hero"
        fill
        className="object-cover transition-opacity duration-1000"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn">
            {slide.title}
          </h1>

          <p className="mt-4 text-lg md:text-xl opacity-90">{slide.desc}</p>

          <Link
            href="/products"
            className="inline-block mt-6 bg-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
