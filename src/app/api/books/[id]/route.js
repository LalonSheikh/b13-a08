import books from "@/data/books.json";

export async function GET(req, { params }) {
  const { id } = await params;

  const singleBook = books.find((book) => book.id === parseInt(id));

  if (!singleBook) {
    return Response.json({ message: "Book not found" }, { status: 404 });
  }

  return Response.json(singleBook);
}