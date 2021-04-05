import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Writer } from '../interfaces/writer';

@Injectable({
  providedIn: 'root',
})
export class WriterService {
  writerURI = 'http://localhost:3001/writer';

  constructor(private httpClient: HttpClient) {}

  getWriter = () => {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders().set('token', token);

    return this.httpClient
      .get(`${this.writerURI}/${localStorage.getItem('id')}/`, { headers })
      .toPromise() as Promise<Writer>;
  };

  addBook = async (
    title: string,
    price: number,
    genre: string,
    description: string,
    editor: string
  ) => {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders().set('token', token);
    const editors = [editor];
    try {
      await this.httpClient
        .post(
          `${this.writerURI}/${localStorage.getItem('id')}/book`,
          {
            title,
            price,
            genre,
            description,
            editors,
          },
          { headers }
        )
        .toPromise()
        .catch((err) => {
          switch (err.status) {
            case 400:
              alert('Bad request');
              break;
            case 401:
              alert('Unauthorized');
              break;
            case 500:
              alert('Server internal error');
              break;
          }
          return undefined;
        });
    } catch (error) {
      // this.status = error.status;
      if (error.status == 500) throw new Error(error);
    }
  };
}
