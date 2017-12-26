import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedServiceModule} from './shared-service/shared-service.module';
import {UserDetailsModule} from './user-details/user-details.module';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,    
    UserMgmtComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedServiceModule,
    UserDetailsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
