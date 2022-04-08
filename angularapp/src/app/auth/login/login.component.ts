import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user_service : LoginService,private http : HttpClient,private router: Router) { }

  model : any={}
  loginform: FormGroup;
  loggedin = false;
  isAdmin = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void {
    this.loginform = new FormGroup({

      email : new FormControl(null,[Validators.required, Validators.pattern(this.emailPattern)]),
      password : new FormControl(null, Validators.required)

    });

  }

  login()
  {
    this.user_service.loginUser(this.model).subscribe(response =>
      {
        if(this.loginform.controls['email'].value==="admin@gmail.com"){

          this.isAdmin=true;
          alert("admin login successful");
          this.loginform.reset();
          this.router.navigateByUrl('/admin');

        }
        else{
        this.loggedin = true;
        alert("Login Successfull");
        this.loginform.reset();
        this.router.navigateByUrl('/user');
      }
    },error =>{
        alert("Invalid Details! try again ");
       } )

  }
}
