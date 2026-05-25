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
// export async function getAllBooks() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

//   const res = await fetch(new URL("/books.json", baseUrl));
//   return res.json();
// }
import fs from "fs";
import path from "path";

export async function getAllBooks() {
  const filePath = path.join(process.cwd(), "public", "books.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}
