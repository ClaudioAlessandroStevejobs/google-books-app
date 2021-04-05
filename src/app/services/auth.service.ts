import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
	LoginResponse,
	LogoutResponse,
	RegisterResponse,
} from '../interfaces/auth';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	loginURI = 'http://localhost:3001/auth/login';
	registerURI = 'http://localhost:3001/auth/register';
	logoutURI = 'http://localhost:3001/auth/logout';
	statusCode: number | undefined;
	constructor(private httpClient: HttpClient) { }

	login = (email: string, password: string, role: string): Promise<LoginResponse | undefined> => {
		localStorage.clear();
		return this.httpClient
			.post(this.loginURI, {
				email,
				password,
				role,
			}).toPromise().catch(err => {
				switch (err.status) {
					case 401: alert('Email not found'); break;
					case 403: alert('Wrong password'); break;
					case 400: alert('Bad request'); break;
					case 500: alert('Server internal error'); break;
				}
				return undefined;
			}) as Promise<LoginResponse>
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
			.toPromise().catch(err => {
				switch (err.status) {
					case 409: alert('Account already exists'); break;
					case 400: alert('Bad request'); break;
					case 500: alert('Server internal error'); break;
				}
				return undefined;
			})
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
