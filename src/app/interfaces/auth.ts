export interface LoginResponse {
  id: string;
  token: string;
  message: string;
}

export interface RegisterResponse {
  message: string;
  role: 'READER' | 'WRITER';
}

export interface LogoutResponse {
  message: string;
}
