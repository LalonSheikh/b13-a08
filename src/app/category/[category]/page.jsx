import books from "@/data/books.json";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const CategoryPage = async ({ params }) => {
  const { category } = await params;

  const filteredBooks = books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase(),
  );

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {filteredBooks.map((books) => (
        <div key={books.id} className="card bg-base-100 shadow-md p-4">
          <Image
            src={books.image_url}
            alt={books.title}
            width={200}
            height={200}
            className="w-full h-60 object-cover rounded"
            unoptimized
          />

          <h2 className="text-xl font-bold mt-3">{books.title}</h2>

          <p>{books.author}</p>

          <p className="mt-2 text-sm">Category: {books.description}</p>
          <div className="flex justify-between items-center gap-2">
            <Link className="p-3" href={`/books/${books.id}`}>
              <button className="btn">
                {" "}
                Details <FaAngleDoubleRight />{" "}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
