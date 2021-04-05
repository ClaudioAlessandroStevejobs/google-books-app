import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  booksURI = 'http://localhost:3001/books';
  constructor(private httpClient: HttpClient) {}

  getBooks = () =>
    this.httpClient.get(this.booksURI).toPromise() as Promise<Book[]>;

  getBooksByIds = async (
    booksIds: string[] = [],
    exclude: boolean = false
  ): Promise<Book[]> => {
    try {
      const books = await this.getBooks();
      return books.filter((book) => {
        return exclude
          ? !booksIds.includes(book._id)
          : booksIds.includes(book._id);
      });
    } catch (err) {
      throw new Error(err);
    }
  };
}
