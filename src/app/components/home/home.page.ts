import { Component, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  constructor(private booksService: BooksService) {}
  books: Book[] = [];
  newBooks: Book[] = [];
  bestBooks: Book[] = [];
  async ngOnInit () {
    try {
      const books = await this.booksService.getBooks();
      this.books = books;
      this.newBooks = books.filter(book =>{
         console.log('data libro: ', moment(book._launchDate, 'DD/MM/YYYY').toDate(), 'data agg: ',  moment().subtract(3000, 'days').toDate())
        return moment(book._launchDate, 'DD/MM/YYYY').toDate() > moment().subtract(3, 'days').toDate()
      })
      this.bestBooks = books.sort((a: Book, b: Book) => 
        b._soldCopies - a._soldCopies
      )
    } catch (err) {
      alert(err.err);
    }
  }
  // getAuthorName = async (id: string) : Promise<string> => {
  //   try {
  //     return await this.booksService.getAuthorName(id)
  //   }
  //   catch (err) {
  //     alert(err.err);
  //     return "fweniofew"
  //   }
  // };
}
