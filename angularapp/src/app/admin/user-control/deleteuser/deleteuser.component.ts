import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserControlService } from 'src/app/Services/user-control.service';
@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  User: any;
  id: number;
  valid: boolean;

  constructor(private routeParams: ActivatedRoute, private userService: UserControlService) {
    this.valid = true;
   }

  ngOnInit(): void {
    setInterval(() => {
      if (this.valid) {
        this.User = this.userService.GetUserById(this.userService.singleUserId);
      }
    }, 500);
  }

  
  DeleteUser() {
    this.userService.DeleteUser(this.User);
    this.valid = false;
    this.User = null;
  }


}
