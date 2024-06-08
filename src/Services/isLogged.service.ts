import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductsInterface } from '../interface/products-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private isLogged = new BehaviorSubject<boolean>(false);

  getisLoggedStatus() {
    return this.isLogged.asObservable();
  }

  setisLoggedStatus(val: boolean) {
    this.isLogged.next(val);
  }
}
