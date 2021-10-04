import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
      <h1>Employee List</h1>
      <ul *ngFor="let employee of employees">
          <li>{{employee.name}}</li>
      </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = [];

  constructor(private _employeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeService.getEmployees()
        .subscribe(data => this.employees = data);
  }

}
