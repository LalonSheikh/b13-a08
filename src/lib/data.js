export async function getAllBooks() {
  const res = await fetch("http://localhost:3000/books.json");
  const data = await res.json();

  return data;
}
