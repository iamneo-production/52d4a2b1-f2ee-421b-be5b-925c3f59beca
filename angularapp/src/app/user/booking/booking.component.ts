import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { NumberLiteralType } from 'typescript';

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
  BookingFirstForm: {
    applicantAddress: string,
    applicantEmailId: string,
    applicantMobileNo: string,
    applicantName: string,
    eventAddress: string,
    eventDate: string,
    eventName: string,
    eventTime: string,
    noOfPeople: number
  };
  BookingSecondForm: {
    FoodType: string,
    VegCount: number,
    NonVegCount: number,
    //CheckBoxes:{name:string,price:number,check:boolean}
  }
  CombinedBookingForm: any = {};

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.CheckAmount();
    // }, 500);
  }

  CheckAmount() {
    // for (let item of this.checkBoxes) {
    //   console.log(item.name+" "+item.price+" "+item.check);
    //   if (item.check) {
    //     this.sum = this.sum + item.price;
    //   }
    // }
    console.log(this.CheckBoxDetails.nativeElement);
  }

  sum: number = 0;

  checkBoxes: { name: string, price: number, check: boolean }[] = [
    { name: "MagicShow", price: 2300, check: false },
    { name: "DjParty", price: 2500, check: false },
    { name: "Mehandi", price: 2600, check: false },
    { name: "GameShow", price: 3000, check: false },
  ];


  ChangeToNextPage() {
    if (this.bookFirstFormDetails.valid) {
      this.currentPage = false;
      this.nextPage = true;
    }
  }
  ChangeToCurrentPage() {
    this.currentPage = true;
    this.nextPage = false;
  }
  uploadDetails() {
    this.BookingSecondForm = this.bookSecondFormDetails.value;
    console.log(this.BookingFirstForm);
    console.log(this.BookingSecondForm);
    this.CombinedBookingForm.applicantAddress = this.BookingFirstForm.applicantAddress;
    this.CombinedBookingForm.applicantMobileNo = this.BookingFirstForm.applicantMobileNo;
    this.CombinedBookingForm.applicantEmailId = this.BookingFirstForm.applicantEmailId;
    this.CombinedBookingForm.applicantName = this.BookingFirstForm.applicantName;
    this.CombinedBookingForm.eventAddress = this.BookingFirstForm.eventAddress;
    this.CombinedBookingForm.eventName = this.BookingFirstForm.eventName;
    this.CombinedBookingForm.eventDate = this.BookingFirstForm.eventDate;
    this.CombinedBookingForm.eventTime = this.BookingFirstForm.eventTime;
    this.CombinedBookingForm.noOfPeople = this.BookingFirstForm.noOfPeople;
    this.CombinedBookingForm.NonVegCount = this.BookingSecondForm.NonVegCount;
    this.CombinedBookingForm.VegCount = this.BookingSecondForm.VegCount;
    this.CombinedBookingForm.FoodType = this.BookingSecondForm.FoodType;
    this.appService.AddEvent(this.CombinedBookingForm);
    console.log('<----- ' + Object.values(this.CheckBoxDetails) + ' ----->' + this.sum);
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

}
