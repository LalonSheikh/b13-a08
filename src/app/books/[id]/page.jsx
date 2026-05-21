import Image from "next/image";
import React from "react";

const BookDetailsPage = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/books/${params.id}`, {
    cache: "no-store",
  });

  const book = await res.json();
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div>
          <Image
            src={book.image_url}
            width={500}
            height={700}
            alt={book.title}
            className="rounded-xl w-full"
            unoptimized
          />
        </div>

        {/* Right Side Details */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{book.title}</h1>

          <p className="text-xl text-green-600 font-semibold">
            By {book.author}
          </p>

          <p className="text-gray-600">{book.description}</p>

          <div className="badge badge-success text-white p-4">
            {book.available_quantity} copies left
          </div>

          <button className="btn btn-primary mt-4">Borrow This Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
