import { Review } from './review';

export interface Book {
  _img: string;
  _title: string;
  _price: number;
  _author: string;
  _genre: string;
  _description: string;
  _soldCopies: number;
  _editors: string[];
  _id: string;
  _launchDate: string;
  _reviews: Review[];
}
