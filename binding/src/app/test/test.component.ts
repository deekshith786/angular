import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
      Welcome {{name}}
    </h1>
    <h1 [style.color]="hasError ? 'red' : 'green' ">Color Binding</h1>
    <h1 [style.color]="highlightColor">Color Binding</h1>
    <h1 [ngStyle]="titleStyles">Color Binding</h1>
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  public name = "deekshith";
  public hasError = false;
  public highlightColor = "blue";
  public titleStyles = {
    color:"grey",
    fontStyle:"italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
