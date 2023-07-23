import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmpModel[]> {
    return this.http.get<EmpModel[]>(this.baseApiUrl + '/employee');
  }

  addFormData(formData: EmpModel[]): Observable<EmpModel[]> {
    return this.http.post<EmpModel[]>(this.baseApiUrl + '/employee', formData);
  }
}

interface EmpModel {
  empid: number;
  name: string;
  city: string;
  address: string;
}

