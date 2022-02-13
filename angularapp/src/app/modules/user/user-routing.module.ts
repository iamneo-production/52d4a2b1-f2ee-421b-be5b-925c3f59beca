import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewbookingComponent } from './components/viewbooking/viewbooking.component';

const routes: Routes = [
    {path : '' ,component : UserDashboardComponent ,children :[
    {path : 'getAllThemes' ,component : HomepageComponent},
    {path : 'bookTheme' ,component : BookingComponent },
    {path : 'getBookedTheme' ,component : ViewbookingComponent},
    {path : '' , redirectTo : '/user/getAllThemes',pathMatch:'full'},
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
