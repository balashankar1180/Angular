import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
selector: 'app-student-count',
templateUrl: './student-count.component.html',
styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent  {
@Input() all: number;
@Input() male: number;
@Input() female: number;
selectedRadioButtonValue: string = 'All'; // This variable holds the selected value of the radio button
@Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
/**
1. The Output decorator makes the property of a Component as an Output property.
2. The EventEmitter class in Angular is used to create the custom event
3. When the radio button selection changes, the selected radio button value which is a string gets passed to the event handler method. Hence, the event payload is string.
*/
onRadioButtonSelectionChange()
{ this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue); }
/**This method raises the custom event. We will bind this method to the change event of all the 3 radio buttons */
} // Closing Component
