import {Component} from 'angular2/core';
import {MdCheckbox} from '@angular2-material/checkbox';

@Component({
    selector: 'my-app',
    directives: [MdCheckbox],
    template:`
	<div>Angular 2 Material</div>
	<md-checkbox [(ngModel)]="isChecked">Check box</md-checkbox>
      `
})
export class AppComponent {
	checkboxVal = false;
}

