import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { StudentComponent } from './student/student.component';
import { StudentCountComponent } from './student-count/student-count.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SimpleComponent, StudentComponent, StudentCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
