import { Injectable } from '@angular/core';

class BookedEventDesc {
  applicantAddress: string;
  applicantEmailId: string;
  applicantMobileNo: string;
  applicantName: string;
  eventAddress: string;
  eventDate: string;
  eventName: string;
  eventTime: string;
  noOfPeople: number;
  FoodType: string;
  VegCount: number;
  NonVegCount: number;
  constructor(
    applicantAddress: string,
    applicantEmailId: string,
    applicantMobileNo: string,
    applicantName: string,
    eventAddress: string,
    eventDate: string,
    eventName: string,
    eventTime: string,
    noOfPeople: number,
    FoodType: string,
    VegCount: number,
    NonVegCount: number,) {
    this.applicantAddress = applicantAddress;
    this.applicantEmailId = applicantEmailId;
    this.applicantMobileNo = applicantMobileNo;
    this.applicantName = applicantName;
    this.eventAddress = eventAddress;
    this.eventDate = eventDate;
    this.eventName = eventName;
    this.eventTime = eventTime;
    this.noOfPeople = noOfPeople;
    this.FoodType = FoodType;
    this.VegCount = VegCount;
    this.NonVegCount = NonVegCount;
  }
}

@Injectable()
export class AppService {

  BookedEventDetails: BookedEventDesc[] = [
    {
    applicantAddress : "Coimbatore",
    applicantEmailId : 'kvasan2610@gmail.com',
    applicantMobileNo : '8012353609',
    applicantName : 'Keerthivasan',
    eventAddress : 'Coimbatore',
    eventDate : '2000-02-01',
    eventName : 'SS Birthday Event',
    eventTime : '12:23',
    noOfPeople : 12,
    FoodType : 'Vegetarian',
    VegCount : 21,
    NonVegCount : 32,
    },{
      applicantAddress : "Coimbatore",
    applicantEmailId : 'kvasan2610@gmail.com',
    applicantMobileNo : '8012353609',
    applicantName : 'Keerthivasan',
    eventAddress : 'Coimbatore',
    eventDate : '2000-02-01',
    eventName : 'KK Birthday Event',
    eventTime : '12:23',
    noOfPeople : 12,
    FoodType : 'Vegetarian',
    VegCount : 21,
    NonVegCount : 32,}
  ]

  DeletionId: number;
  EditingId: number;
  tempEditDetails: BookedEventDesc;
  // GetTheme(){
  //   return this.Theme;
  // }
  GetBookedEvent() {
    return this.BookedEventDetails;
  }
  DeleteBookedEvent(item: any) {
    if (confirm("Are you sure want to delete '" + item.eventName + "'")) {
      this.DeletionId = this.BookedEventDetails.indexOf(item);
      this.BookedEventDetails.splice(this.DeletionId, 1);
    }
  }
  AddEvent(item:any){
    this.BookedEventDetails.push(item);
  }
  EditEvent(ActualItem: any, EditedItem: any) {
    this.EditingId = this.BookedEventDetails.indexOf(ActualItem);
    // this.BookedEventDetails[this.EditingId]=item;
    this.BookedEventDetails.splice(this.EditingId, 1, EditedItem);
  }
  constructor() { }
}
