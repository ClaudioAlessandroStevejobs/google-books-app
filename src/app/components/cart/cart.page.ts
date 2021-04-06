import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
import { ReaderService } from 'src/app/services/reader.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  ionViewDidEnter() {
    if (!localStorage.getItem('role')) {
      this.router.navigate(['logged-out']);
    }
  }

  constructor(
    private bService: BooksService,
    private rService: ReaderService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (!localStorage.getItem('role')) {
      this.router.navigate(['logged-out']);
    }
    this.inventory = JSON.parse(localStorage.getItem('inventory')!);
    this.books = await this.bService.getBooksByIds(this.inventory);
    console.log(this.books);
  }

  inventory: string[] = [];
  books: Book[] | undefined;

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
  // cartForm = new FormGroup({
  //   coupon: new FormControl('', []),
  // });

  // get cartCoupon() {
  //   return this.cartForm.get('coupon');
  // }

  // getTotal = () => this.books?.map((b) => b._price).reduce((c, t) => c + t);
  buy = async () => {
    try {
      // if (this.cartCoupon?.value != '')
      //   await this.rService.makeOrder(this.inventory, this.cartCoupon?.value); else
      await this.rService.makeOrder(this.inventory);

      this.router.navigate(['/books']);
      localStorage.setItem('inventory', JSON.stringify([]));
    } catch (error) {
      throw new Error(error);
    }
  };
}
