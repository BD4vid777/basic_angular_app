import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interfaces';
import { Observable } from "rxjs";

@Injectable()
export class DataService {
    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) {
    }

    getCustomers(): Observable<ICustomer[]> {
      // @ts-ignore
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          catchError(this.handleError)
        );
    }

    getCustomer(id: number) : Observable<ICustomer> {
      // @ts-ignore
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          // @ts-ignore
          map(customers => {
            let customer = customers.filter((customer: ICustomer) => customer.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    getOrders(id: number) : Observable<IOrder[]> {
      // @ts-ignore
      return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
        .pipe(
          map(orders => {
            let customerOrders = orders.filter((order: IOrder) => order.customerId === id);
            return customerOrders;
          }),
          catchError(this.handleError)
        );
    }

    private handleError(error: any) {
      console.error('server error', error);
      if (error.error instanceof Error) {
        const errMsg = error.error.message;
        return Observable.throw(errMsg);
      }
      return Observable.throw(error || 'Node.js server error');
    }
}
