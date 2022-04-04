import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent, SignupComponent } from './auth/signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { GetuserComponent } from './admin/user-control/getuser/getuser.component';
import { AdduserComponent } from './admin/user-control/adduser/adduser.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    GetuserComponent,
    AdduserComponent,
    EdituserComponent,
    AuthComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
