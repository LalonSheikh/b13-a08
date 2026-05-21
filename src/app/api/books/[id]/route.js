import books from "@/data/books.json";

export async function GET(req, { params }) {
  const { id } = await params;

  const singleBook = books.find(
    (book) => book.id === parseInt(id)
  );

  return Response.json(singleBook);
}