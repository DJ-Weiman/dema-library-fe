import { Book, BookType, BookPageResponse } from "./definitions";
import axiosInstance from "./getAxiosInstance";

export async function getBooks(
  page: number,
  size: number
): Promise<{
  books: BookType[];
  numberOfPages: number;
}> {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  params.set("size", size.toString());

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosInstance.get(
        `/library/books?${params.toString()}`
      );
      const bookPageData = BookPageResponse.safeParse(res.data);

      if (bookPageData.success)
        resolve({
          books: bookPageData.data.content,
          numberOfPages: bookPageData.data.totalPages,
        });
      else reject(bookPageData.error);

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getBookForId(id: number): Promise<BookType | null> {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosInstance.get(`/library/books/id/${id}`);
      const parsedBook = Book.safeParse(res.data);

      if (parsedBook.success) resolve(parsedBook.data);
      else reject(parsedBook.error);

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getBooksForSearch(
  query: string,
  page: number,
  size: number
): Promise<{
  books: BookType[];
  numberOfPages: number;
}> {
  const params = new URLSearchParams();
  params.set("searchParam", query.toString())
  params.set("page", page.toString());
  params.set("size", size.toString());

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosInstance.get(
        `/library/books/search?${params.toString()}`
      );
      const bookPageData = BookPageResponse.safeParse(res.data);

      if (bookPageData.success)
        resolve({
          books: bookPageData.data.content,
          numberOfPages: bookPageData.data.totalPages,
        });
      else reject(bookPageData.error);

      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
}
