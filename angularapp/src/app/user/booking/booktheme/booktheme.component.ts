import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { CartserviceService } from 'src/app/Services/cartservice.service';
@Component({
  selector: 'app-booktheme',
  templateUrl: './booktheme.component.html',
  styleUrls: ['./booktheme.component.css']
})
export class BookthemeComponent implements OnInit {

themeBooking:any;
id:string
themeId : number;
  constructor(private routeParams: ActivatedRoute,private themeService:ThemeService,private router:Router,private cartservice:CartserviceService) {
    
  }

  ngOnInit(): void {
    setInterval(() => {
        this.themeBooking = this.themeService.GetThemeById(this.themeService.singleThemeId);
    }, 500);
  }

  continuebooking(id:number){
   this.router.navigateByUrl("user/bookTheme");
   console.log(this.themeBooking);
   this.cartservice.addTheme(this.themeBooking);
   this.themeService.singleThemeId = id;

  }

  BackPage(){
    this.router.navigateByUrl("user/getAllThemes")
  }
}
