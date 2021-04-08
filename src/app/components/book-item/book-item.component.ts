import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  img;
  title: string;
  price: number;
  author: string;
  @Input() book: Book;
  @Input() isCard: boolean;
  @Input() inLibrary: boolean = false;
  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {
    this.title = this.book._title;
    this.price = this.book._price;
    this.img = {
      "background-image": `url(${this.book._img})`,
      "background-size": "cover",

    }
    this.booksService
      .getAuthorName(this.book._author)
      .then((res) => (this.author = res));
  }

  redirectToDetails = () => {
    this.router.navigate([`books/${this.book._id}`]);
  };
}
