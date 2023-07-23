import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../app/employee/employee.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent {

  myForm: FormGroup;
  result: any;

  constructor(private employeeservice: EmployeeService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      // Define your form controls and validators here
      Name: ['', Validators.required],
      City: ['', Validators.required],
      Address: ['', Validators.required],
      // Add other form fields as needed
    });
  }

  onSubmit() {
    //if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.callAddService(formData);
    //}
  }

  callAddService(formData: any) {
    this.employeeservice.addFormData(formData).subscribe(
      (response) => {
        this.result = response;
      },
      (error) => {
        console.error('Error adding form data:', error);
      }
    );
  }
}
