import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserMgmtComponent} from './user-mgmt/user-mgmt.component'




const appRoutes: Routes = [
  
  {
    path: '',
    redirectTo: 'home', 
    pathMatch:'full'   
  }, 
  {
    path:"home",
    component:UserMgmtComponent
  }, 
  {
    path:"userDetailslazy",
    loadChildren:"app/user-details/user-details.module#UserDetailsModule"
  }  
      
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
       //preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { }