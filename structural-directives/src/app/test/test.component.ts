import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <div *ngFor="let color of colors; index as i">
      <h1>{{i}} {{color}}</h1>
    </div>
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  public colors = ['red', 'blue', 'grey', 'orange'];
  constructor() { }

  ngOnInit(): void {
  }

}
