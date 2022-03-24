import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BookingComponent } from './components/booking/booking.component';
import { ViewbookingComponent } from './components/viewbooking/viewbooking.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    HomepageComponent,
    BookingComponent,
    ViewbookingComponent,
    HeaderComponent,
    FooterComponent,
    UserDashboardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
