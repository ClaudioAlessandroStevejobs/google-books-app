import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})

export class BookItemComponent implements OnInit {
  img : string;
  title : string;
  price : string;
  author : string;
  @Input() book: Book;
  @Input() isCard: boolean;
  @Input() inLibrary: boolean = false;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.title = this.book._title
    this.price = this.book._price
    this.booksService.getAuthorName(this.book._author).then(res => this.author = res);
    console.log("soso")
    // console.log(this.title)
  }

}
