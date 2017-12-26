import { NgModule }             from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';
import {EditUserComponent} from './edit-user/edit-user.component';


const userRoutes: Routes = [
  
  {
    path: '',
    redirectTo: 'userList', 
    pathMatch:'full'   
  }, 
  {
    path:"userList",
    component:UserListComponent
  }, 
  {
    path:"edit:/id",
    loadChildren:"EditUserComponent"
  }  
      
 
];

export const routing: ModuleWithProviders = RouterModule.forChild(userRoutes);