import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  fetchEmployeeSubscriber: any;

  constructor(private http: HttpClient,) { }

  filterTerm: string;
  userRecords: any;
  
  ngOnInit(): void {

    this.fetchEmployee();
   
  }

  private fetchEmployee() {
    this.fetchEmployeeSubscriber = this.http.get('http://127.0.0.1:8000/emp_details/')
    .subscribe((responseData: any) => {
        console.log(responseData);
        this.userRecords = responseData;
    });
  }

}
