import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Booking } from '../common/booking';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseurl = 'http://localhost:8080/api/v1/bookings/';
  constructor(private httpClient: HttpClient) { }

  getAllBookings(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(this.baseurl);
  }
  
  public saveBooking(booking: Booking): Observable<Booking> {
    return this.httpClient.post<Booking>(this.baseurl, booking);
  }
  
}
