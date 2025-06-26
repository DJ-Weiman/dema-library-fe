import { Book, BookType } from "./definitions";
import axiosInstance from "./getAxiosInstance";

export async function getBooks(): Promise<BookType[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosInstance.get("/library/books");
      const bookData = Book.array().safeParse(res.data);

      if (bookData.success) resolve(bookData.data);
      else reject(bookData.error);

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getBookForId(id: number): Promise<BookType | null> {
  return new Promise(async (resolve, reject) => {
   try {
      const res = await axiosInstance.get(`/library/books/${id}`);
      const parsedBook = Book.safeParse(res.data);

      if (parsedBook.success) resolve(parsedBook.data);
      else reject(parsedBook.error);

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}
