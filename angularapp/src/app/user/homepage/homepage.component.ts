import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';
import { AppService } from 'src/app/user/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private appService:AppService, private themeService:ThemeService, private http:HttpClient,private router:Router) {
  }

  
  Themes:any;
  ngOnInit(): void {
    setInterval(() => {
      this.Themes = this.themeService.GetTheme();
    }, 500);
  }
  BookEventToggle: boolean = false;
  HomeToggle: boolean = true;
  searchBox:string;

  displayStyle = "none";
  
  PopupDetails:any; 

  UploadToApi(){
    this.http.post('http://localhost:8080/Employees',{
      "name":this.searchBox
    }).subscribe((data)=>{console.log(data)})
  }

  openPopup(card:any) {
    this.PopupDetails = card;
    this.displayStyle = "block";
  }

  selecttheme(id:number){
   this.router.navigate(['user/selecttheme/{'+id+'}']);
   this.themeService.singleThemeId = id;

  }
  closePopup() {
    this.displayStyle = "none";
  }

}
