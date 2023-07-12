import { Component, OnInit } from '@angular/core';
import { Bookingwrapper } from 'src/app/common/bookingwrapper';
import { BookingDetailsService } from 'src/app/services/booking-details.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bookingForm!: FormGroup;
  bookingwrappers : Bookingwrapper[] = [];
  isBookingConfirmed: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private service: BookingDetailsService ) { }

  ngOnInit(): void {
    this.getAllBookings();
  }
  getAllBookings() {
    this.service.getAllBookings().subscribe(
      data => {
        console.log("data >> "+data);
        this.bookingwrappers = data;
      }
    );
  }  
  cancelBooking(bookingId:string){
    console.log("bookingId : "+bookingId);
    this.service.cancelBooking(bookingId).subscribe(
      data => {
        console.log("delete message >> "+data);
      }
    );    
  }  
}
