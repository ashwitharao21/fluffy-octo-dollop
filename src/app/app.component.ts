import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deleteMsg: boolean;
  updateMsg: boolean;
  success: boolean;
  msg: boolean;
  allPosts = [];

  constructor(private _http: HttpClient,) { }
  
  ngOnInit(): void {

    this.getPost();
    
  }

  updatePost(form: NgForm) {
    const value = form.value;
    const data = {
      title: value.title,
      body: value.body,
      userId: 1
    }
    let headers = new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
    })
    this._http.put('https://jsonplaceholder.typicode.com/posts/1', data, {headers: headers})
    .subscribe((res: any) => {
        console.log(res);
        this.allPosts.pop();
        this.allPosts.push(res);
        this.updateMsg = true;
        this.msg = false;
        this.success = false;
        this.deleteMsg = false;
    });
  }

  deletePost() {
    this._http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: any) => {
        console.log(res);
        this.allPosts.pop();
        this.deleteMsg = true;
        this.msg = false;
        this.success = false;
        this.updateMsg = false;

    });
  }

  createPost(form: NgForm) {
    const value = form.value;
    const data = {
      title: value.title,
      body: value.body,
      userId: 1
    }
    let headers = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    })
  this._http.post('https://jsonplaceholder.typicode.com/posts/', data, {headers: headers})
    .subscribe((res: any) => {
        this.allPosts.push(res)
        console.log(res);
        this.success = true;
        this.deleteMsg = false;
        this.updateMsg = false;
        this.msg = false;
    }, (err) => {
      this.msg = true;
      this.success = false;
      this.deleteMsg = false;
      this.updateMsg = false;
     });
  }

  getPost() {
    this._http.get('https://jsonplaceholder.typicode.com/posts/')
    .subscribe((res: any) => {
      this.allPosts = res;
        console.log(res);
        this.msg = false;
        this.success = false;
        this.deleteMsg = false;
        this.updateMsg = false;
    });
  }
}