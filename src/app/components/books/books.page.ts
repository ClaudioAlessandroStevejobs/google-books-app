import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { Reader } from 'src/app/interfaces/reader';
import { Writer } from 'src/app/interfaces/writer';
import { BooksService } from 'src/app/services/books.service';
import { ReaderService } from 'src/app/services/reader.service';
import { WriterService } from 'src/app/services/writer.service';
import { drawAccImg } from 'src/app/utilities/drawAccImg';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  constructor(private router: Router, private readerService: ReaderService, private writerService: WriterService, private booksService: BooksService) {}
  // ss = drawAccImg('sss')
  user: Reader | Writer;
  myBooks: Book[];
  async ngOnInit() {
    this.myBooks = await this.booksService.getBooksByIds((await this.readerService.getReader())._booksIds)
  }

  ionViewDidEnter() {
    if (!localStorage.getItem('role')) {
      this.router.navigate(['logged-out']);
    }
  }
}
