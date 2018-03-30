
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.css']
})
export class ChildAppComponent  {

  @Output() valueChange = new EventEmitter();
    counter = 0;
    valueChanged() { // You can give any function name
        this.counter = this.counter + 1;
        this.valueChange.emit(this.counter);
    }
  constructor() { }

  ngOnInit() {
  }

}
