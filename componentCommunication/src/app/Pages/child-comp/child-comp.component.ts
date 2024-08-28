import { Component } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {
  message: string = 'hello from child component';
  constructor() {

  }
  onChangeMessage() {
    return this.message = "message changed";
  }
}
