import { ReaderService } from 'src/app/services/reader.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Reader } from 'src/app/interfaces/reader';
import { BooksService } from 'src/app/services/books.service';
import { Writer } from 'src/app/interfaces/writer';
import { WriterService } from 'src/app/services/writer.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage {
  book: Book = {
    _img: '',
    _title: '',
    _price: 0,
    _author: '',
    _genre:'',
    _description: '',
    _soldCopies: 0,
    _editors: [],
    _id: '',
    _launchDate: '',
    _reviews: [],
  };
  user: Reader | Writer;
  constructor(
    private activatedroute: ActivatedRoute,
    private booksService: BooksService,
    private readerService: ReaderService,
    private writerService: WriterService,
    private router: Router
  ) {}
  author: string;

  async ngOnInit() {
    this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    try {
      this.activatedroute.paramMap.subscribe(async (params) => {
        const [book] = await this.booksService.getBooksByIds([
          params.get('id'),
        ]);
        this.book = book;
        this.booksService
          .getAuthorName(this.book._author)
          .then((res) => (this.author = res));
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
    this.router.navigate(['/cart']);
  };

  isAddable = (): boolean => {
    localStorage.getItem('token') &&
      ({
        WRITER: async () => {
          this.user = await this.writerService.getWriter();
        },
        READER: async () => {
          this.user = await this.readerService.getReader();
        },
      }[localStorage.getItem('role')]());
    
    return (
      localStorage.getItem('token') &&
      !this.user?._booksIds.includes(this.book._id) &&
      !JSON.parse(localStorage.getItem('inventory')!)?.includes(this.book._id)
    );
  };
}
