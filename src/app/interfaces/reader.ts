import { Coupon } from './coupon';
import { Order } from './order';
export interface Reader {
  _email: string;
  _password: string;
  _nationality: string;
  _fund: number;
  _booksIds: string[];
  _orders: Order[];
  _coupons: Coupon[];
  _id: string;
  _token?: string;
}
