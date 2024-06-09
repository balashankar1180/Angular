import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { StudentComponent } from './student/student.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { AppRoutingModule } from './app-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, SimpleComponent, StudentComponent, StudentCountComponent, NavMenuComponent, CustomerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
