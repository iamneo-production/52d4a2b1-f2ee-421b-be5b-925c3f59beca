import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private appService:AppService, private http:HttpClient) {
  }

  
  Theme:any;
  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products/').subscribe((response)=>{this.Theme=response});
  }
  BookEventToggle: boolean = false;
  HomeToggle: boolean = true;

  displayStyle = "none";
  
  PopupDetails:any;
  openPopup(card:any) {
    this.PopupDetails = card;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
