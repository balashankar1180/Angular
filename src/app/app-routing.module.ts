import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SimpleComponent } from './simple/simple.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'simple', component: SimpleComponent },
  { path: 'student-count', component: StudentCountComponent },
 { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }