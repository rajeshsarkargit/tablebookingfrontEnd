import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerForm!: FormGroup;
  customers : Customer[] = [];
  customerConfirmedForm: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private customerService: CustomerService) { 
      this.customerForm = this.formBuilder.group({
        name: ['', Validators.required],
        phoneNo: ['', Validators.required],
        emailid: ['', Validators.required]       
      });
    }

  ngOnInit(): void {
    this.getAllCustomers();

    this.customerForm = new FormGroup({
      name : new FormControl(this.customerForm.value.name),
      phoneNo : new FormControl(this.customerForm.value.phoneNo),
      emailId : new FormControl(this.customerForm.value.emailId)
    });
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(
      data => {
        this.customers = data;
      }
    );
  }
  saveCustomer() {
    if (this.customerForm.valid) {
      const customer: Customer = this.customerForm.value;
      console.log(customer);
      console.log(this.customerForm.value);
      this.customerService.saveCustomer(this.customerForm.value)
    .subscribe(
      () => {
        this.customerConfirmedForm = true;

      },
      (error) => {
        console.error('Error saving customer:', error);
      }
      );
    }
  }
}
