import { sampleBooks } from "@/constants";
import { Book } from "@/lib/definitions";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getBookForId(id: number): Promise<Book | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      sampleBooks.forEach((book) => {
        console.log(book.id == id)
        if (book.id == id) {
            resolve(book)
            return
        }
    
      });

      reject(`Could not find book with id: ${id}`)
    }, 1000);
  });
}

export default axiosInstance;
