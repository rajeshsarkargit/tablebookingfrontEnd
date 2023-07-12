import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Bookingwrapper } from '../common/bookingwrapper';
@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {  
  
  private baseurl = 'http://localhost:8080/api/v1/bookings/';
  constructor(private httpClient: HttpClient) { }
  
  getAllBookings(): Observable<Bookingwrapper[]>{
    return this.httpClient.get<Bookingwrapper[]>(this.baseurl);
  }
  public cancelBooking(bookingId: String): Observable<string> {
    const cancelurl = this.baseurl+bookingId
    return this.httpClient.delete<string>(cancelurl);
  }
}
