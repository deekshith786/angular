import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
      <h1>Employee Details</h1>
      <ul *ngFor="let employee of employees">
          <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
      </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeDetailComponent implements OnInit {

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
