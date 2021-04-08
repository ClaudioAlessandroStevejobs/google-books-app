import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Order } from 'src/app/interfaces/order';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order: Order;
  books: Book[] = [];
  constructor(private booksService: BooksService) {}

  async ngOnInit() {
    this.books = await this.booksService.getBooksByIds(this.order.inventory);
  }
}
