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
      if (localStorage.getItem('token')) 
        this.reader = await this.readerService.getReader();
    } catch (err) {
      throw new Error(err);
    }
  }

  ngOnChanges() {
    this.searchedBooks =
      this.search !== '' && this.search !== ' '
        ? this.books.filter(
            async (book) =>
              (
                (await this.booksService.getAuthorName(book._author)).includes(this.search) ||
                book._title.includes(this.search) ||
                String(book._price) === this.search
              ) &&
              !this.reader?._booksIds.includes(book._id) &&
              !JSON.parse(localStorage.getItem('inventory')!)?.includes(
                book._id
              )
        )
        : [];
  }
}
