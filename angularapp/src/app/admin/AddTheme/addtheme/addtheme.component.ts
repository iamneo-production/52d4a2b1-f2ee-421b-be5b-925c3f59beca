import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent implements OnInit {

  @ViewChild('form') themeBookingDetails: NgForm;
  constructor(private themeService:ThemeService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.themeService.AddTheme(this.themeBookingDetails.value);
    this.themeBookingDetails.resetForm();
  }

}
