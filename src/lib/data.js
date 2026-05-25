// export async function getAllBooks() {
//   const res = await fetch("http://localhost:3000/books.json");
//   const data = await res.json();

//   return data;
// }
// export async function getAllBooks() {
//   const res = await fetch("/books.json");
//   const data = await res.json();

//   return data;
// }
export async function getAllBooks() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(new URL("/books.json", baseUrl));
  return res.json();
}
