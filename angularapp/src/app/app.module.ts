import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { GetuserComponent } from './admin/user-control/getuser/getuser.component';
import { DeleteuserComponent } from './admin/user-control/deleteuser/deleteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GetuserComponent,
    DeleteuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
