import { Droplets, Shirt, Sun, Umbrella } from "lucide-react";
import React from "react";
const tips = [
  {
    icon: <Droplets />,
    title: "Stay Hydrated",
    text: "Drink enough water throughout the day to stay fresh in summer.",
  },
  {
    icon: <Sun />,
    title: "Use Sunscreen",
    text: "Apply sunscreen before going outside to protect your skin.",
  },
  {
    icon: <Shirt />,
    title: "Wear Light Clothes",
    text: "Choose breathable cotton outfits for hot weather.",
  },
  {
    icon: <Umbrella />,
    title: "Avoid Direct Sun",
    text: "Use hats or umbrellas during extreme sunny hours.",
  },
];

const SummerCareTips = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold">Summer Guide</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-950">
          Summer Care Tips
        </h2>
        <p className="mt-3 text-gray-600">
          Small habits that keep you cool, safe and stylish.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((tip) => (
          <div
            key={tip.title}
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-lg transition"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              {tip.icon}
            </div>

            <h3 className="text-xl font-bold text-yellow-950">{tip.title}</h3>

            <p className="mt-3 text-gray-600">{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummerCareTips;
