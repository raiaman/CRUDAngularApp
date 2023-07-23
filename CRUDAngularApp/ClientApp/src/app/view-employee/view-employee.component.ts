import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../app/employee/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  public employees: EmpModel[] = [];

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<EmpModel[]>(baseUrl + 'employee').subscribe(result => {
  //    this.employees = result;
  //  }, error => console.error(error));
  //}
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.employeeservice.getAllEmployees().subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

interface EmpModel {
  empid: number;
  name: string;
  city: string;
  address: string;
}
