import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filterTerm: string;

  userRecords: any[] = [];
  fetchEmployeeSubscriber: any;
  collabcontent: any;
  _url = 'http://mspr2web.vlabsinc.com/';

  constructor(private _http: HttpClient,) { }


  
  ngOnInit(): void {
    
    this.fetchEmployee(); 
    this.fetchCollabcontent();
   
  }

  private fetchEmployee() {
    // debugger
    // Create - post API
    // Read - get
    // Update - put
    // Delete - delete
     this.fetchEmployeeSubscriber = this._http.get(this._url + 'api/doc')
    .subscribe((res: any) => {
        // console.log(res);
        this.userRecords.push(res);
        // console.log(this.userRecords);
        // debugger
        this.collabcontent = this.userRecords[0]._meta.url;
        console.log(this.collabcontent)

    });
  }

  fetchCollabcontent(){
    this.fetchEmployeeSubscriber = this._http.get(this._url + 'api/collabcontent/additionalproperty/collabcontent-property-list/1/1/1')
    .subscribe((res: any) => {
        console.log(res);
        // this.userRecords.push(res);
        // console.log(this.userRecords);
        
        // this.collabcontent = this.userRecords[0]._meta.url;
        // console.log(this.collabcontent)

    });
  }

}