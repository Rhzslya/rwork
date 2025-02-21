import React from "react";
import CoolMarqueeBox from "."; // <-- Benar
import { BRANDS } from "./Brands/brand";

const Marquee = () => {
  return (
    <div className="bg-amber-400">
      <CoolMarqueeBox>
        {BRANDS.map((brand, index) => (
          <img
            key={index}
            src={`src/assets/brands/${brand}.svg`}
            alt={brand}
            className="h-[100px] filter grayscale mx-8"
          />
        ))}
      </CoolMarqueeBox>
    </div>
  );
};

export default Marquee;
