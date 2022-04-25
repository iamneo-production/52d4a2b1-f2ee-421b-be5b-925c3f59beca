import { Component, OnInit } from '@angular/core';
import { UserControlService } from 'src/app/Services/user-control.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/User';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

  }
}
