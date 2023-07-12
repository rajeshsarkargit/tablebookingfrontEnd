import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/common/booking';
import { BookingService } from 'src/app/services/booking.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/common/restaurant';
import { Customer } from 'src/app/common/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  loggedInCustomerId : string = "64ac8a82cbe61d010b52a927";
  bookingForm!: FormGroup;
  bookings : Booking[] = [];
  restaurants : Restaurant[] = [];
  customers : Customer [] = [];
  isBookingConfirmed: boolean = false;
  bookingResp : Booking | undefined ;
  errorMesage : string = '';
  constructor(private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private customerService: CustomerService,
    private restaurantService: RestaurantService
    ) { 
      this.bookingForm = this.formBuilder.group({
        restaurantId: ['', Validators.required],
        customerId: ['', Validators.required],
        bookingDate: ['', Validators.required],
        bookingTime: ['', Validators.required],
        persons: ['', Validators.required]      
      });
    }

  ngOnInit(): void {
    this.getAllRestaurants();
    this.getAllCustomers();
  }
  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurants = data;
      }
    );
  }
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(
      data => {
        this.customers = data;
      }
    );
  }
  saveBooking() {
    if (this.bookingForm.valid) {
      const booking: Booking = this.bookingForm.value;
      console.log(booking)
      this.bookingService.saveBooking(booking)
    .subscribe(
      (response: any) => {
        console.log("response >> "+response)
        this.isBookingConfirmed = true;
        this.bookingResp = response;
        this.errorMesage = '';
      },
      (error) => {
        console.error('Error saving booking:', error);
        this.isBookingConfirmed = false;
        this.errorMesage = error.error.message;
      }
      );
    }
  }
}

