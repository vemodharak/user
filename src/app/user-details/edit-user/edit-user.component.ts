import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../../shared-service/user.service';
import { User } from './../../shared-service/models/user'
import { environment } from './../../../environments/environment'


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  //to populate input elements with user details
  user: User;
  //to know the user index from global user list
  index: number;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //read route parameters
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (this.userService.userData && this.userService.userData.length > 0) {
        //find index of the user in user lidt from shared service
        this.index = this.userService.userData.findIndex(i => i.id == +paramMap.get("id"));
        //read the used by index
        this.user = this.userService.userData[this.index];
      }

    })
  }

  //update individual user
  //if the response status from service is equal to 1  user updated successfully
  submitUserChanges() {
    //invoke service to update the individual user details
    this.userService.postRequest(environment.edit, this.user).subscribe(response => {
      if (response["status"] == 1) {
        //assign the user modified details into shared service
        this.userService.userData[this.index] = this.user;
        //after successfully updated navigate to user list page where we will see the user updated details
        this.router.navigate(['/', 'userList']);
      }
    },
      error => {
        //display alert messgae
        alert("unable to update user due to service failure");
      });

  }

}
