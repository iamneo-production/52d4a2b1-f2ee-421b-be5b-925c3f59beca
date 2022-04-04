import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/user/app.service';
import { MenuService } from 'src/app/admin/AddMenu/menu.service';
import { NumberLiteralType } from 'typescript';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/admin/AddTheme/theme.service';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @ViewChild('form') bookFirstFormDetails: NgForm;
  @ViewChild('subform') bookSecondFormDetails: NgForm;
  @ViewChild('CheckBox') CheckBoxDetails: ElementRef;

  nextPage: boolean = false;
  currentPage: boolean = true;
  BookingFirstForm: any;
  BookingSecondForm: any;
  CombinedBookingForm: any = {};

  BookedEventDetails: any = [
  ];

themeBooking:any;
id:string
themeId : number;

  constructor(private appService: AppService,private menuservice:MenuService,private router:Router,private themeservice:ThemeService,private cartservice:CartserviceService) {
    
  }
  
  
  ngOnInit(): void {
    this.getDate();
    setInterval(() => {
      this.themeBooking = this.themeservice.GetThemeById(this.themeservice.singleThemeId);
  }, 500);
  }


  sum: number = 0;

  checkBoxes: { name: string, price: number, check: boolean }[] = [
    { name: "MagicShow", price: 2300, check: false },
    { name: "DjParty", price: 2500, check: false },
    { name: "Mehandi", price: 2600, check: false },
    { name: "GameShow", price: 3000, check: false },
  ];


  uploadDetails() {
    this.BookingSecondForm = this.bookSecondFormDetails.value;
    console.log(this.BookingFirstForm);
    console.log(this.BookingSecondForm);
    this.nextPage = false;
    this.currentPage = true;
  }
  onSubmit() {
    this.BookingFirstForm = this.bookFirstFormDetails.value;
    console.log(this.BookingFirstForm);
    if (this.bookFirstFormDetails.valid) {
      this.nextPage = true;
      this.currentPage = false;
    }
  }

  BackPage(){
    this.router.navigateByUrl("user/getAllThemes")
    this.cartservice.setCartData('theme',[])
  }

  nextpage(){
    this.BookingFirstForm = this.bookFirstFormDetails.value;
    console.log(this.BookingFirstForm);
    this.router.navigateByUrl("user/foodmenu");
    this.cartservice.addevent(this.BookingFirstForm);

  }

  minDate:any="";
  getDate(){
    var date:any=new Date();
    var toDate:any=date.getDate();
    if(toDate<10){
      toDate='0'+toDate;
    }

    var month:any=date.getMonth()+1;
    if(month<10){
      month='0'+month;
    }

    var year=date.getFullYear();
    this.minDate=year+"-"+month+"-"+toDate;

  }

}
