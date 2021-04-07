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
  img: string;
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
    this.booksService
      .getAuthorName(this.book._author)
      .then((res) => (this.author = res));
    // console.log(this.title)
  }

  redirectToDetails = () => {
    this.router.navigate([`books/details/${this.book._id}`]);
  };
}
