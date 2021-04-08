import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  inventory: string[] = [];
  books: Book[] = [];
  cartCoupon: string = '';

  constructor(
    private bService: BooksService,
    private rService: ReaderService,
    private router: Router
  ) {}

  async ionViewWillEnter() {
    if (!localStorage.getItem('role')) {
      this.router.navigate(['logged-out']);
    }
    this.inventory = JSON.parse(localStorage.getItem('inventory')!);
    this.books = await this.bService.getBooksByIds(this.inventory);
  }

  deleteFromInventory(id: string) {
    const inventory: string[] = JSON.parse(localStorage.getItem('inventory'));
    localStorage.setItem(
      'inventory',
      JSON.stringify(
        inventory.filter((bookId) => {
          return bookId !== id;
        })
      )
    );
    this.books = this.books.filter((book) => {
      return book._id !== id;
    });
  }

  getTotal = () => this.books?.map((b) => b._price).reduce((c, t) => c + t);
  buy = async () => {
    try {
      if (this.cartCoupon !== '')
        await this.rService.makeOrder(this.inventory, this.cartCoupon);
      else await this.rService.makeOrder(this.inventory);
      localStorage.setItem('inventory', JSON.stringify([]));
      this.router.navigate(['/books']);
    } catch (error) {
      throw new Error(error);
    }
  };
}
