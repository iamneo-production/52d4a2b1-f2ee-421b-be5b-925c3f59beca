import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  
  UserDetails: any =[];
  singleUserDetail:any;
  singleUserId:number;

  constructor(private http:HttpClient) { }

  AddUser(UserDetail: any) {
    if (confirm('Confirmed the details and are sure want to add the User?')) {
      (this.http.post('http://localhost:8081/admin/addUser', UserDetail).subscribe(Response => {
        alert("The User got added");
      }));
    }
  }
  GetUser() {
    (this.http.get('http://localhost:8081/admin/getUser').subscribe((response) => { this.UserDetails = response; }));
    return this.UserDetails;
  }
  GetUserById(userId:number){
    (this.http.get('http://localhost:8081/admin/getUser/'+userId).subscribe((response) => { this.singleUserDetail = response;},(error:HttpErrorResponse)=>{console.error}));
    return this.singleUserDetail;
  }

  EditUser(ActualUserDetails: any, EditedUserDetails: any) {
    if (confirm('Confirmed the details and are sure want to add the User?')) {
      (this.http.put('http://localhost:8081/admin/editUser/' + ActualUserDetails.userId,
        {
          "userId":ActualUserDetails.userId,
          "userName":EditedUserDetails.userName,
          "email":EditedUserDetails.email,
          "password":EditedUserDetails.password,
          "mobileNumber":EditedUserDetails.mobileNumber,
          "userRole":EditedUserDetails.userRole
        }
      ).subscribe(response => {
        alert("The User Details got edited");
      }));
    this.UserDetails.splice(this.UserDetails.indexOf(ActualUserDetails),1,EditedUserDetails)
    }
  }
  DeleteUser(UserDetails: any) {
    if(confirm('Are you sure want to delete '+UserDetails.userName)+'?'){
      this.http.delete('http://localhost:8081/admin/deleteUser/'+UserDetails.userId).subscribe(response => {
        alert("The User got deleted");
      })
    }
  }

}
