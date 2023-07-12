import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Restaurant } from '../common/restaurant';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseurl = 'http://localhost:8080/api/v1/restaurants/';
  constructor(private httpClient: HttpClient) { }

  getAllRestaurants(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.baseurl);
  }
  
  public saveRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>(this.baseurl, restaurant);
  }
}

