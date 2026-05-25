import React from "react";
import { BsStarFill } from "react-icons/bs";
import { SlStar } from "react-icons/sl";

const testimonials = [
  {
    id: 1,
    name: "Rosario",
    review: "Amazing collection of books and easy borrowing system.",
  },
  {
    id: 2,
    name: "Clerk Smith",
    review: "The interface is clean and very user friendly.",
  },
  {
    id: 3,
    name: "Johnson Paul",
    review: "I found many helpful books for my studies.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What Readers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow">
              <div className="text-yellow-500 text-2xl flex mb-3">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />{" "}
              </div>

              <p className="text-gray-600 mb-4">{item.review}</p>

              <h4 className="font-bold">— {item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
