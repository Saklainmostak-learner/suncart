import React from "react";
const brands = [
  "SunShade",
  "GlowCare",
  "SunnyWear",
  "AquaFresh",
  "CoolFit",
  "WaveCarry",
  "FreshGlow",
  "ShadePro",
];

const TopBrands = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold">Trusted Partners</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-950">
          Trusted by 2000+ Customers
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="brand-slide flex gap-10 w-max">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="min-w-44 rounded-2xl border border-orange-100 bg-yellow-50 px-8 py-5 text-center shadow-sm"
            >
              <h3 className="text-xl font-extrabold text-yellow-950">
                {brand}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
