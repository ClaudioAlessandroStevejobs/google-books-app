import { Component } from '@angular/core';
import * as moment from 'moment';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private booksService: BooksService) {}
  newBooks: Book[] = [];
  bestBooks: Book[] = [];
  async ionViewWillEnter() {
    try {
      const books = await this.booksService.getBooks();
      this.newBooks = books
        .map((b) => b)
        .sort(
          (bookA: Book, bookB: Book) =>
            moment(bookB._launchDate, 'DD/MM/YYYY').unix() -
            moment(bookA._launchDate, 'DD/MM/YYYY').unix()
        );
      this.bestBooks = books
        .map((b) => b)
        .sort(
          (bookA: Book, bookB: Book) => bookB._soldCopies - bookA._soldCopies
        );
    } catch ({ err }) {
      alert(err);
    }
  }
}
