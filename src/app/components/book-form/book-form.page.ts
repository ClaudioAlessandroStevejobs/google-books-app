import { WriterService } from 'src/app/services/writer.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'src/app/utilities/toast';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.page.html',
  styleUrls: ['./book-form.page.scss'],
})
export class BookFormPage{
  bookForm = this.formBuilder.group({
    title: new FormControl('', Validators.compose([Validators.required])),
    genre: new FormControl('', Validators.compose([Validators.required])),
    editor: new FormControl('', Validators.compose([Validators.required])),
    description: new FormControl('', Validators.compose([Validators.required])),
    imageURL: new FormControl('', Validators.compose([Validators.required])),
    price: new FormControl('', Validators.compose([Validators.required])),
  });

  constructor(
    private writerService: WriterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  async onSubmit() {
    try {
      const addBookResponse = await this.writerService.addBook(
        this.bookForm.value.title,
        this.bookForm.value.price,
        this.bookForm.value.genre,
        this.bookForm.value.description,
        this.bookForm.value.editor,
        this.bookForm.value.imageURL
      );
      if(addBookResponse) toast('Book added successfully');
      this.bookForm.controls['title'].setValue('');
      this.bookForm.controls['price'].setValue('');
      this.bookForm.controls['genre'].setValue('');
      this.bookForm.controls['description'].setValue('');
      this.bookForm.controls['editor'].setValue('');
      this.bookForm.controls['imageURL'].setValue('');
      this.router.navigate(['/books']);
    } catch (err) {
      throw new Error(err);
    }
  }
}
