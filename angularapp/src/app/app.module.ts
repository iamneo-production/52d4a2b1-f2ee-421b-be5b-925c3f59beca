import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './user/homepage/homepage.component';
import { BookingComponent } from './user/booking/booking.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { AppService } from './app.service';
import { AddthemeComponent } from './admin/AddMenu/addtheme/addtheme.component';
import { AdminComponent } from './admin/admin.component';
import { AddmenuComponent } from './admin/AddMenu/addmenu/addmenu.component';
import { AddonComponent } from './admin/AddMenu/addon/addon.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    BookingComponent,
    ViewbookingComponent,
    UserComponent,
    AuthComponent,
    NavbarComponent,
    AddthemeComponent,
    AdminComponent,
    AddmenuComponent,
    AddonComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
