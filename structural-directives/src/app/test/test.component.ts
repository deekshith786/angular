import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <div [ngSwitch]="color">
      <div *ngSwitchCase = "'red'">You picked red</div>
      <div *ngSwitchCase = "'green'">You picked green</div>
      <div *ngSwitchCase = "'blue'">You picked blue</div>
      <div *ngSwitchDefault>pick again</div>
    </div>
  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  public color = 'red';
  constructor() { }

  ngOnInit(): void {
  }

}
