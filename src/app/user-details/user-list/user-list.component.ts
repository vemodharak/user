import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../shared-service/user.service'
import { User } from './../../shared-service/models/user'
import { environment } from './../../../environments/environment'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //used to render the list of users i view part
  userList: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    //on component init initializing user list
    this.getUserList()
  }

  // fetching complete users list for the first time when user landed on this page
  //assigns user list to shared variable declared in the userService which will be used across the application 
 private getUserList() {  
      //invoke rest service to fetch the list of users
      this.userService.getRequest(environment.findall).subscribe(response => {
        //assign response to shared varible
        this.userService.userData = response;
        //to render the users list in view template
        this.userList = response;
      },
        error => {
          //display error
          alert("unable to process your request");
        });
     

  }

  //removing user 
  removeUser(userId) {
    // servvice request to remove the user
    this.userService.deleteRequest(environment.remove + "/" + userId).subscribe(response => {
      if (response["status"] == 1 && this.userService.userData && this.userService.userData.length > 0) {
        //check the index of requested user to be deleted
        var index = this.userService.userData.findIndex(i => i.id == +userId);
        //remove user fro shared service
        this.userService.userData.splice(index, 1);
        // re-assign the updated user list to instance varible 
        //which will be processed and rendered in the view 
        this.userList = this.userService.userData;
      }
    },
      error => {
        //display error
        alert("user not deleted due to service falilure, please try again after some time");
      });
  }

  //update all users
  submitUserChanges(updateAll: String) {
    //update the name of each user with updated All at the end of the name
    if (updateAll && this.userService.userData && this.userService.userData.length > 0) {
      for (var i = 0; i < this.userService.userData.length; i++) {
        this.userService.userData[i].name = this.userService.userData[i].name + " " + "updated All";
      }
    }
    //invoke service to save the updated user list   
    this.userService.postRequest(environment.edit, this.userService.userData).subscribe(response => {
      //if response status is equql to 1 then user list is successfully updated
      if (response["status"] == 1) {
        alert("User list is successfully updated");
      }
    },
      error => {
        //display alert
        alert("unable to process your request due to service failure");
      });

  }
}
