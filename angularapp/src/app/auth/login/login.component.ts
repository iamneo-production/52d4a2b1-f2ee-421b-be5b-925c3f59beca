import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
//import { UserService } from '../_Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor(private user_service : UserService,private http : HttpClient,private router: Router) { }

  model : any={}
  loginform: FormGroup;
  loggedin = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void {

    this.loginform = new FormGroup({

      email : new FormControl(null,[Validators.required, Validators.pattern(this.emailPattern)]),
      password : new FormControl(null, Validators.required)

    });

    //this.getCurrentUser();
  }

  login()
  {

    /*this.user_service.loginUser(this.model).subscribe(response =>
      {
        console.log(response);
        this.loggedin = true;
        alert("Login Successfull");
        this.loginform.reset();
        this.router.navigateByUrl('/home');
      },error =>{
        alert("Invalid Details");
      })*/

  }
  /*
  getCurrentUser(){
    this.user_service.currentUser.subscribe(user =>
      {
        this.loggedin = !!user;
      },error =>
      {
        console.log(error);
      })
  }*/

}
