import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  LoginResponse,
  LogoutResponse
} from '../interfaces/auth';
import { customAlert } from '../utilities/alert';
import { toast } from '../utilities/toast';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginURI = 'http://localhost:3001/auth/login';
  registerURI = 'http://localhost:3001/auth/register';
  logoutURI = 'http://localhost:3001/auth/logout';
  statusCode: number | undefined;
  constructor(private httpClient: HttpClient) {}
  login = (
    email: string,
    password: string,
    role: string
  ): Promise<LoginResponse> => {
    localStorage.clear();
    return this.httpClient
      .post(this.loginURI, {
        email,
        password,
        role,
      })
      .toPromise()
      // .then(() => {toast('Successfully logged in')})
      .catch((err) => {
        switch (err.status) {
          case 401:
            customAlert(err.status, 'Missing email', 'Email address not found')
            break;
          case 403:
            customAlert(err.status, 'Wrong password', 'Wrong password for this account');
            break;
          case 400:
            alert('Bad request');
            break;
          case 500:
            alert('Server internal error');
            break;
        }
        return undefined;
      }) as Promise<LoginResponse>;
  };

  register = async (
    email: string,
    password: string,
    nationality: string,
    role: string
  ) => {
    return await this.httpClient
      .post(this.registerURI, {
        email,
        password,
        nationality,
        role,
      })
      .toPromise()
      .catch((err) => {
        switch (err.status) {
          case 409:
            customAlert(err.status, 'Already exists', 'This email has already registered')
            break;
          case 400:
            alert('Bad request');
            break;
          case 500:
            alert('Server internal error');
            break;
        }
        return undefined;
      });
  };

  logout = () => {
    const token = localStorage.getItem('token')!;
    localStorage.clear();
    const headers = new HttpHeaders().set('token', token);
    return this.httpClient
      .post(
        this.logoutURI,
        {},
        {
          headers,
        }
      )
      .toPromise() as Promise<LogoutResponse>;
  };
}
