import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';

const routes: Routes = [
    { path: 'restaurants', component: RestaurantListComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'bookings', component: BookingListComponent },
    { path: 'allbookings', component: BookingDetailsComponent }   
  ]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }