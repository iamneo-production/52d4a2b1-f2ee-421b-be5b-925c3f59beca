import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserControlService } from 'src/app/Services/user-control.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  @ViewChild('form') UserDetails:NgForm;
  user:any;

  constructor(private userService:UserControlService) { }

  userform : FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonenumber_pattern = "^[6-9][0-9]{9}$";

  ngOnInit(): void {
    this.userform = new FormGroup({
      email : new FormControl (null, [Validators.required, Validators.pattern(this.emailPattern)]),
      username : new FormControl (null, Validators.required),
      mobilenumber : new FormControl (null, [Validators.required, Validators.pattern(this.phonenumber_pattern)]),
      password : new FormControl (null, Validators.required)
    });
    setInterval(() => {
      this.user = this.userService.GetUserById(this.userService.singleUserId);
    }, 500);
  }

  EditUser(){
    this.userService.EditUser(this.user,this.UserDetails.value);
  }

}
