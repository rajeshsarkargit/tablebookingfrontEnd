import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { HttpClientModule } from '@angular/common/http'
import { RestaurantService } from './services/restaurant.service';
import { AppRoutingModule } from './app-routing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingService } from './services/booking.service';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    CustomerListComponent,
    BookingListComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantService,CustomerService,BookingService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
