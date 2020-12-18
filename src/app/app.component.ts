import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg: boolean;
  success: boolean;


  userRecords: any[] = [];
  fetchEmployeeSubscriber: any;
  collabcontent: any;
  _url = 'http://mspr2web.vlabsinc.com/';

  constructor(private _http: HttpClient,) { }


  
  ngOnInit(): void {
    
    this.fetchEmployee();
   
  }

  private fetchEmployee() {
    // debugger
    // Create - post API
    // Read - get
    // Update - put
    // Delete - delete
    // 
     this.fetchEmployeeSubscriber = this._http.get(this._url + 'api/doc')
    .subscribe((res: any) => {
        // console.log(res);
        this.userRecords.push(res);
        // console.log(this.userRecords);
        // debugger
        this.collabcontent = this.userRecords[0]._meta.url;
        console.log(this.collabcontent)

    });
   /*  let id = 0;
    this._http.get(this._url + '/api/tenant/details/' + id)
    .subscribe((res: any) => {
        // console.log(res);
        this.userRecords.push(res);
        // console.log(this.userRecords);
        // debugger

    }); */
  }

  fetchCollabcontent(form: NgForm){
    const value = form.value;
    console.log(value);
    
    const data = {
      company_type: value.company_type,
      segment_id: value.segment_id,
      industry_category: value.industry_category,
      industry_subcategory: value.industry_subcategory,
      service_type: value.service_type,
      revenue_range: value.revenue_range,
      employee_range: value.employee_range,
      years_in_business: value.years_in_business,
      lifestage: value.lifestage,
      country_code: value.country_code,
      active: value.active,
      name: value.name,
      website_url: value.website_url,
      address_line1: value.address_line1,
      address_line2: value.address_line2,
      city: value.city,
      state: value.state,
      country: value.country,
      zip: value.zip,
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.fetchEmployeeSubscriber = this._http.post(this._url + 'api/company/company-create', data,  { headers: headers })
    .subscribe((res: any) => {
        console.log(res);
        // this.userRecords.push(res);
        // console.log(this.userRecords);
        
        // this.collabcontent = this.userRecords[0]._meta.url;
        // console.log(this.collabcontent)

    },(err: any) => {console.log(err)});
  }

}