import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reader } from '../interfaces/reader';
import { customAlert } from '../utilities/alert';
@Injectable({
  providedIn: 'root',
})
export class ReaderService {
  readerURI = 'http://localhost:3001/reader';

  constructor(private httpClient: HttpClient) {}

  getReader = () => {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders().set('token', token);
    return this.httpClient
      .get(`${this.readerURI}/${localStorage.getItem('id')}/`, { headers })
      .toPromise()
      .catch((err) => {
        switch (err.status) {
          case 401:
            alert('Unauthorized');
            break;
          case 500:
            alert('Server internal error');
            break;
        }
      }) as Promise<Reader>;
  };

  generateCoupon = async (money: number) => {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders().set('token', token);
    return await this.httpClient
      .post(
        `${this.readerURI}/${localStorage.getItem('id')}/coupon`,
        { money },
        { headers }
      )
      .toPromise()
      .catch((err) => {
        switch (err.status) {
          case 403:
            customAlert(err.status, 'Not enough money', 'Your sold is not enough for buyng this coupon')
            break;
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
  };

  generateGift = async (money: number, email: string) => {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders().set('token', token);
    return await this.httpClient
      .post(
        `${this.readerURI}/${localStorage.getItem('id')}/gift`,
        {
          money,
          email,
        },
        { headers, observe: 'response' }
      )
      .toPromise()
      .catch((err) => {
        switch (err.status) {
          case 403:
            customAlert(err.status, 'Not enough money', 'Your sold is not enough for buyng this gift')
            break;
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
  };

  refill = async (money: number) => {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders().set('token', token);
    return await this.httpClient
      .post(
        `${this.readerURI}/${localStorage.getItem('id')}/refils`,
        { money },
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
      });
  };

  makeOrder = async (
    inventory: string[],
    couponId: string | undefined = undefined
  ) => {
    const token = localStorage.getItem('token')!;
    const headers = new HttpHeaders().set('token', token);
    return await this.httpClient
      .post(
        `${this.readerURI}/${localStorage.getItem('id')}/order`,
        { inventory, couponId },
        { headers }
      )
      .toPromise()
      .catch(({status}) => {
        switch (status) {
          case 403:
            customAlert(status, 'Not enough money', 'Your sold is not enough for this order')
            break;
          case 409:
            customAlert(status, 'Book already owned', 'One or more books are already in your library');
            break;
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
  };
}
