import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
      Welcome {{name}}
    </h1>
    <input [id]="myId" type="text" value= "ram">
    <input [disabled]= "isDisabled" [id]="myId" type="text" value= "ram">
    <input bind-disabled= "isDisabled" [id]="myId" type="text" value= "ram">
    // line 10 & 11 are both the same but just different way of representation

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "deekshith";
  public myId = "testId";
  public isDisabled= false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
