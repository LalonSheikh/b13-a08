import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/book.webp')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find Your Next Read</h1>
            <p className="mb-5">
              Discover Stories, Fuel Your Imagination and Expand Your Knowledge.
            </p>
            <button className="btn bg-orange-500 ">Browse Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
