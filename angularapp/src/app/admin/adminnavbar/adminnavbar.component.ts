import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private auth : LoginService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }
}
