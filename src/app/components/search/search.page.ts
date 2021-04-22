import { Component, OnChanges, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Reader } from 'src/app/interfaces/reader';
import { BooksService } from 'src/app/services/books.service';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnChanges {
  books: Book[] | undefined = [];
  searchedBooks: Book[] | undefined = [];
  search: string;
  reader: Reader;
  constructor(
    private booksService: BooksService,
    private readerService: ReaderService
  ) {}

  async ngOnInit() {
    try {
      this.books = await this.booksService.getBooks();
      if (
        localStorage.getItem('token') &&
        localStorage.getItem('role') === 'READER'
      )
        this.reader = await this.readerService.getReader();
    } catch (err) {
      throw new Error(err);
    }
  }

  ngOnChanges() {
    const authorNames = [];
    this.books.map(async (book) => {
      authorNames.push(
        (await this.booksService.getAuthorName(book._author)).includes(
          this.search
        )
      );
    });

    this.searchedBooks =
      this.search.length > 1
        ? this.books.filter(
            (book) =>
              authorNames.includes(this.search) ||
              book._title.includes(this.search) ||
              (String(book._price) === this.search &&
                !this.reader?._booksIds.includes(book._id) &&
                !JSON.parse(localStorage.getItem('inventory')!)?.includes(
                  book._id
                ))
          )
        : [];
  }
}
