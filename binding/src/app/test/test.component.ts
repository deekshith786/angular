import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
      Welcome {{name}}
    </h1>
    <h1 [class]="sucessClass">Deekshith </h1>
    <h1 class="text-special" [class]="sucessClass">Deekshith </h1>
    <h1 [class.text-danger]="hasError">Deekshith </h1>    
    <h1 [ngClass]="messageClasses">Deekshith</h1>
  `,
  styles: [`
  .text-sucess {
    color: green
  }
  .text-danger {
    color: red
  }
  .text-special {
    color: blue;
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "deekshith";

  // classs binding
  public sucessClass = "text-sucess";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-sucess": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
