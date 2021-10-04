import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

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

  public employees:any[] = [];
  
  constructor(private _employeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeService.getEmployees();
  }

}
