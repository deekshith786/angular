import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1 *ngIf="displayName; else elseBlock">
      CodeEvolution
    </h1>
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
    <h1>
      Name is displayed
    </h1>
    </ng-template>

    <ng-template #thenBlock>
      <h1>
        Hiddem
      </h1>
    </ng-template>

    <ng-template #elseBlock>
      <h1>
        Hiddem
      </h1>
    </ng-template>



  `,
  styles: [`
  
  `]
})
export class TestComponent implements OnInit {

  displayName = false;
  constructor() { }

  ngOnInit(): void {
  }

}
