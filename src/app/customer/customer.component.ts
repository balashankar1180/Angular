import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit
{
customerForm: FormGroup;
data: any;
name : any;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      id : ["101"],
      name : ["", Validators.required],
      address : this.fb.group({
        city : [""],
        pincode: [""],
        street : [""]
      }),
      contact : ["",Validators.required],
      email : ["", Validators.required]
    })
  }
// d
  onSubmit(){
   console.log("CUSTOMER DETAILS-->",this.customerForm.value);
   this.data = this.customerForm.value;
this.name = this.customerForm.get("name").value;
  }

}