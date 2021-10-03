import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h1>{{"hello " + name }}</h1>
  <button (click)="fireEvent()">send Button</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input ('parentData') public name: any;
  @Output() public  childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit("Hey deekshith how are you");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
