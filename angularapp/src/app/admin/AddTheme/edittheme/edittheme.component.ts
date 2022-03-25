import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-edittheme',
  templateUrl: './edittheme.component.html',
  styleUrls: ['./edittheme.component.css']
})
export class EditthemeComponent implements OnInit {

  @ViewChild('form') themeBookingDetails: NgForm;
  themeBooking:any;
  themeId : number;
  id : string;
  constructor( private routeParams:ActivatedRoute, private themeService: ThemeService) { 
    this.id = this.routeParams.snapshot.params['id'];
    this.themeId = Number(this.id.substring(1,this.id.length-1));
  }

  ngOnInit(): void {
    setInterval(() => {
      this.themeBooking = this.themeService.GetThemeById(this.themeService.singleThemeId);
    }, 500);
  }

  EditTheme(){
    this.themeService.EditTheme(this.themeBooking,this.themeBookingDetails.value);
  }
}
