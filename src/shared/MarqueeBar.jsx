import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeBar = () => {
  return (
    <div className="flex justify-between px-2 items-center gap-4 bg-gray-200 py-4 container mx-auto">
      <button className="btn bg-red-500  text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <p>New Arrivals: [Book Name] | Special Discount on Memberships...</p>
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
