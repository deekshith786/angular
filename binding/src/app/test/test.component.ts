import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
        <h1>
          Inside the test.component.ts so welcome {{name}}
        </h1>
        <h1>{{2+2}}</h1>
        <h1>{{"welcome" + "codeEvolution"}}</h1>
        <h1>{{name.length}}</h1>
        <h1>{{name.toUpperCase()}}</h1>
        <h1>{{greetUser()}}</h1>

        // these are not possible
        <h1>{{a=2+2}}</h1>
        <h1>{{siteUrl}}</h1>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "deekshith";
  public siteUrl = window.location.href;

  greetUser()
  {
    return "Greeting" + this.name;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
