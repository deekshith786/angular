import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
      Welcome {{name}}
    </h1>
    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button>
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  public name = "deekshith";
  logMessage(value: any){
    console.log(value);    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
