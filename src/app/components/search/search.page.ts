import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private booksService: BooksService,
    private router: Router,
    private readerService: ReaderService
  ) {}

  async ngOnInit() {
    try {
      const books = await this.booksService.getBooks();
      this.books = books;
    } catch (err) {
      throw new Error(err);
    }
  }

  searchBooks() {}

  ngOnChanges() {
    this.searchedBooks =
      this.search !== '' && this.search !== ' '
        ? this.books.filter(
            (book) =>
              book._author.includes(this.search) ||
              book._title.includes(this.search) ||
              String(book._price) == this.search
          )
        : [];
  }
}
