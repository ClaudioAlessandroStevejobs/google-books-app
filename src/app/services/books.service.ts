import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  uri = 'http://localhost:3001/';
  constructor(private httpClient: HttpClient) {}

  getBooks = () =>
    this.httpClient.get(this.uri + 'books').toPromise() as Promise<Book[]>;

  getBooksByIds = async (
    booksIds: string[] = [],
    exclude: boolean = false
  ): Promise<Book[]> => {
    try {
      const books = await this.getBooks();
      const filtered = books.filter((book) =>
        exclude ? !booksIds.includes(book._id) : booksIds.includes(book._id)
      );
      return filtered;
    } catch (err) {
      throw new Error(err);
    }
  };

  // getBooksByOccurence = async (
  //   booksIds: string[] = [],
  //   exclude: boolean = false
  // ): Promise<Book[]> => {
  //   try {
  //     const books = await this.getBooks();
  //     return books.filter((book) =>
  //       exclude ? !booksIds.includes(book._id) : booksIds.includes(book._id)
  //     );
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // };

  getAuthorName = (id: string) =>
    this.httpClient
      .get(this.uri + `writer-name/${id}`)
      .toPromise() as Promise<string>;
}
