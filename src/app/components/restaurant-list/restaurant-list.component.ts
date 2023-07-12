import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/common/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurantForm!: FormGroup;
  restaurants : Restaurant[] = [];
  isRestaurantSaved: boolean = false;
  constructor(  private formBuilder: FormBuilder,
      private restaurantService: RestaurantService) { 
      this.restaurantForm = this.formBuilder.group({
        name: ['', Validators.required],
        phoneNo: ['', Validators.required],
        category: ['', Validators.required],
        totalTables: ['', Validators.required], 
        address: ['', Validators.required]       
      });
    }

  ngOnInit(): void {
    this.getAllRestaurants();

    this.restaurantForm = new FormGroup({
      name : new FormControl(this.restaurantForm.value.name),
      phoneNo : new FormControl(this.restaurantForm.value.phoneNo),
      category : new FormControl(this.restaurantForm.value.category),
      totalTables : new FormControl(this.restaurantForm.value.totalTables),
      address : new FormControl(this.restaurantForm.value.address)
    });
  }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurants = data;
      }
    );
  }
  saveRestaurant() {
    if (this.restaurantForm.valid) {
      const restaurant: Restaurant = this.restaurantForm.value;
      console.log(restaurant)
      console.log(this.restaurantForm.value)
      this.restaurantService.saveRestaurant(this.restaurantForm.value)
    .subscribe(
      () => {
        this.isRestaurantSaved = true;

      },
      (error) => {
        console.error('Error saving restaurant:', error);
        this.isRestaurantSaved = false;
      }
    );
  }
}

  

}
