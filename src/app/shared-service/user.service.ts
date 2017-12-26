import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from './models/user'

@Injectable()
export class UserService {

  //to store the user data which will be shared across the application
  userData: User[];

  constructor(private http: HttpClient) { }

  //reusable method to handle all http request method "GET"
  //Pass url along with path/query patrameters if any
  getRequest(url): Observable<User[]> {
    return this.http.get(url).map(response => {
      return response;
    }, error => {
      this.handleError("unable to process your request, please try after sometime");
    })
  }

  //reusable  method to handle all http request method "POST"
  //Pass url along with request data object if any
  postRequest(url, data): Observable<any> {
    return this.http.post(url, data).map(response => {
      return response;
    }, error => {
      this.handleError("unable to process your request, please try after sometime");
    })

  }

  //reusable method to handle all http request method "DELETE"
  //Pass url along with path/query patrameters if any
  deleteRequest(url): Observable<any> {
    return this.http.delete(url).map(response => {
      return response;
    }, error => {
     this.handleError("unable to process your request, please try after sometime");
    })

  }

  private handleError(message:String){
     console.log(message);
  }


}
