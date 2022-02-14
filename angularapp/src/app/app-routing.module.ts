import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './user/booking/booking.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './user/user.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/getAllThemes', pathMatch: 'full' },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/signup', component: SignupComponent },
  {
    path: 'user', component: UserComponent, children: [
      { path: '', redirectTo: 'getAllThemes', pathMatch: 'full' },
      { path: 'getAllThemes', component: HomepageComponent },
      { path: 'bookTheme', component: BookingComponent },
      { path: 'getBookedTheme', component: ViewbookingComponent },
    ]
  },
  {
    path: 'admin', component: UserComponent, children: [
      { path: '', redirectTo: 'getAllThemes', pathMatch: 'full'},
      { path: 'getAllThemes', component: HomepageComponent },
      { path: 'bookTheme', component: BookingComponent },
      { path: 'getBookedTheme', component: ViewbookingComponent },
    ]
  },
  { path: '**', redirectTo: 'user/getAllThemes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
