import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserControlService } from 'src/app/Services/user-control.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @ViewChild('form') UserDetails:NgForm;
  constructor(private userService:UserControlService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.userService.AddUser(this.UserDetails.value);
    this.UserDetails.resetForm();
  }

}
