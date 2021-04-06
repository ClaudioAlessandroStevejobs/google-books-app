import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
  book: Book;
  constructor(
    private activatedroute: ActivatedRoute,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('sì');
    try {
      this.activatedroute.paramMap.subscribe(async (params) => {
        const [book] = await this.booksService.getBooksByIds([
          params.get('id')!,
        ]);
        this.book = book;
        console.log(book);
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  addToCart = () => {
    const inventory = JSON.parse(
      localStorage.getItem('inventory')!
    ) as string[];
    inventory.push(this.book?._id!);
    localStorage.setItem('inventory', JSON.stringify(inventory));
    this.router.navigate(['/books']);
  };
}
