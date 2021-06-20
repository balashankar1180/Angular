import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
selector: 'app-simple',
templateUrl: './simple.component.html',
styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnChanges{  // OnChanges : Interface
@Input() simpleInput: string;
ngOnChanges(changes: SimpleChanges) // Method to handle the changes ; changes(arbitary) : object 
{
for (let PropertyName in changes) // PropertyName(arbitary) : simpleInput
{
let change = changes[PropertyName];  // change(arbitary) : "variable"
let current = JSON.stringify(change.currentValue);
let previous = JSON.stringify(change.previousValue);
console.log(PropertyName+": Current Value = "+current+" Previous Value ="+previous) // String Concatination
// console.log(`${PropertyName}: Current Value = ${current} Previous Value =${previous}`) //  Placeholder Syntax
}
}
}
