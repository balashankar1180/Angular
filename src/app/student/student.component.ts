import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
name: string = "balu";
students: any[] = [
{ ID: 'std101', FirstName: 'Pranaya', DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56 },
{ ID: 'std102', FirstName: 'Anurag', DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00 },
{ ID: 'std103', FirstName: 'Priyanka', DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.15 },
{ ID: 'std104', FirstName: 'Hina', DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50 },
{ ID: 'std105', FirstName: 'Sambit', DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54 }
]; // Closing Array
}