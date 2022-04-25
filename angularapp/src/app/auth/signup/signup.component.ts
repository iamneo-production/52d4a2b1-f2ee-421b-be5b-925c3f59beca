import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl, AbstractControl, NgForm } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/Services/login.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http : HttpClient,private user_service : LoginService,private router:Router) { }

  
  model : any={}
  userform : FormGroup;
  loggedin = false
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonenumber_pattern = "^[6-9][0-9]{9}$";


  ngOnInit(): void {
    this.userform = new FormGroup({
      userrole : new FormControl('',Validators.required),
      email : new FormControl (null, [Validators.required, Validators.pattern(this.emailPattern)]),
      username : new FormControl (null, Validators.required),
      mobilenumber : new FormControl (null, [Validators.required, Validators.pattern(this.phonenumber_pattern)]),
      password : new FormControl (null, Validators.required),
      confirmpassword : new FormControl (null, Validators.required)
    });
  }

  onCheckPassword()
{
  if(this.userform.controls['password'].value== this.userform.controls['confirmpassword'].value)
  {
    this.userform.controls['confirmpassword'].setErrors(null);
  }
  else
  {
    this.userform.get('confirmpassword')?.setErrors({ mismatch: true})
  }
}

register()
{
        this.user_service.registerUser(this.model).subscribe((data : any) =>
          {
            alert('Successfully Registered! Login');
             this.userform.reset();
             this.router.navigate(['/auth/login']);
          },error =>
          {
            alert('User Exits');
          })
}

}
