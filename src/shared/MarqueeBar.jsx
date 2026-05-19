import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: ".  Atomic Habit  |  ",
  },
  {
    _id: "2",
    title: ".  Deep Work |",
  },
  {
    _id: "3",
    title: ".  Alchemist  |  .",
  },
];

const MarqueeBar = () => {
  return (
    <div className="flex justify-between px-2 items-center gap-4 bg-gray-200 py-4 container mx-auto">
      <button className="btn bg-red-500  text-white">New Arrival</button>
      <Marquee
        className="font-black text-2xl text-blue-400"
        pauseOnHover={true}
        speed={100}
      >
        {news.map((n) => {
          return (
            <span className="" key={n._id}>
              {n.title}
            </span>
          );
        })}
        <p className="text-green-500 text-2xl">
          Special Discount on Memberships...!!! Limited TIme Only{" "}
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeBar;
