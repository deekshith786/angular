import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1>
      Welcome {{name}}
    </h1>
    <button (click)="onClick($event)">Greet</button>
    {{greeting}}
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  public name = "deekshith";
  public greeting= ""; 

  onClick(event){
    console.log(event);    
    this.greeting = "welcome to code evolution"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
