import { getAllBooks } from "@/lib/data";
import AllBooksClient from "./AllBooksClient";

export default async function AllBooksPage() {
  const books = await getAllBooks();

  return <AllBooksClient books={books || []} />;
}
