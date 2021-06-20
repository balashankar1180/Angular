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

}
