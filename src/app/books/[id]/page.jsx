import BorrowButton from "@/components/BorrowButton";
import Image from "next/image";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/books/${id}`, {
    cache: "no-store",
  });
if (!res.ok) {
  throw new Error(`Failed to fetch book: ${res.status}`);
}

  const book = await res.json();

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <Image
            src={book.image_url}
            width={400}
            height={500}
            alt={book.title}
            className="rounded-xl w-full"
            unoptimized
          />
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{book.title}</h1>

          <p className="text-xl text-green-600">By {book.author}</p>

          <p className="text-gray-600">{book.description}</p>

          <div className=" text-green-600">
            {book.available_quantity} copies left
          </div>
           <BorrowButton bookId={book.id} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
