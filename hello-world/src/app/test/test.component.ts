import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template:  `<div> Inline Template</div>
              <h1>Multiple lines</h1>`,
  // styleUrls: ['./test.component.css']
  styles: [`
        div {
          color: green;
        }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
