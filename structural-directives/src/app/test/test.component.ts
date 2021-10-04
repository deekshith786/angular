import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h1>{{ name}}</h1>
  <h1>{{ name | lowercase }}</h1>
  <h1>{{ name | uppercase }}</h1>
  <h1>{{ name | slice:3:7 }}</h1>
  <h1>{{ person | json }}</h1>
  <h1>{{ message | titlecase }}</h1>


  <h1>{{ 5.678 | number:'1.2-3' }}</h1>
  <h1>{{ 5.678 | number:'3.4-5' }}</h1>
  <h1>{{ 5.678 | number:'3.1-2' }}</h1>

  <h1>{{ 0.25 | percent }}</h1>

  <h1>{{ 5.678 | currency }}</h1>
  <h1>{{ 5.678 | currency: 'GBP' }}</h1>
  <h1>{{ 5.678 | currency: 'GBP' : 'code' }}</h1>

  <h1>{{ date | date: }}</h1>
  <h1>{{ date | date: 'short' }}</h1>
  <h1>{{ date | date: 'shortDate' }}</h1>
  <h1>{{ date | date: 'shortTime' }}</h1>

  `,
  styles: []
})
export class TestComponent implements OnInit {

public name= "DeeKshith";
public message= "welcome to the codeEvolution";

public person = {
  "firstName": "John",
  "lastName": "Doe"
}

public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
