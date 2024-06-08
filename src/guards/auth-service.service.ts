import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  wrongLogin: boolean = false;
  LoggedIn: boolean = false;

  isAuthenticated(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(this.LoggedIn);
      }, 50);
    });
    return promise;
  }

  login() {
    this.LoggedIn = true;
  }

  logout() {
    this.LoggedIn = false;
  }
}
