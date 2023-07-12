import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Customer } from '../common/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseurl = 'http://localhost:8080/api/v1/customers/';
  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.baseurl);
  }
  
  public saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseurl, customer);
  }
}
