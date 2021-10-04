import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
      <h1>Employee List</h1>
      <ul *ngFor="let employee of employees">
          <li>{{employee.id}}</li>
      </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Brandon", "age": 25},
    {"id": 3, "name": "Christina", "age": 26},
    {"id": 4, "name": "Elena", "age": 28}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
