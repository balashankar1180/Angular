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
{ ID: 'std105', FirstName: 'Sambit', DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54 },
{ ID: 'std106', FirstName: 'Tarun', DOB: '4/10/1992', Gender: 'Male', CourseFee: 1278.55 }
]; // Closing Array
getTotalStudentsCount(): number
{ return this.students.length; }
getMaleStudentsCount(): number
{ return this.students.filter( std => std.Gender === 'Male').length; }
getFemaleStudentsCount(): number
{ return this.students.filter( std => std.Gender === 'Female').length; }
selectedStudentCountRadioButton: string = 'All';
/** This property will keep track of the radio button which is selected. We have set the default value to All, so all the students are displayed in the table by default. */
onStudentCountRadioButtonChange(selectedRadioButtonValue: string): void
{ this.selectedStudentCountRadioButton = selectedRadioButtonValue; }
/**  Depending on the radio button which is selected, this method updates the "selectedStudentCountRadioButton" property. This method will be called when the child component (StudentCountComponent) raises the custom event - (countRadioButtonSelectionChanged). The event binding is specified in StudentList.component.html
*/
}  // Closing Component
