import { HttpClient } from '@angular/common/http';
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

  BookedEventDetails: any = []
  singleEventDetails:any
  DeletionId: number;
  EditingId: number;
  tempEditDetails: BookedEventDesc;
  BookEventThemeName : any;
  eventId:number;

  constructor(private http: HttpClient) { }
  // GetTheme(){
  //   return this.Theme;
  // }
  GetBookedEvent() {
    (this.http.get('http://localhost:8081/user/getAllThemes').subscribe(result => { this.BookedEventDetails = result }));
    return this.BookedEventDetails;
  }

  GetBookedEventById(eventId:number){
    (this.http.get('http://localhost:8081/user/getBookedTheme/'+eventId).subscribe(result => { this.singleEventDetails = result }));
    return this.singleEventDetails;
  }
  DeleteBookedEvent(item: any) {
    if (confirm("Are you sure want to delete this event ??")) {
      this.http.delete('http://localhost:8081/user/deleteTheme/' + item.eventId).subscribe(res => console.log(res));
    }
  }

  AddEvent(theme:any[],event: any[], food: any[],addon:any[],user:any,total:number) {
    console.log(food)
    console.log(addon)
    console.log(user)
    var eventmenuIds:string
    var addOnIds:string
    if(food.length==1){
      eventmenuIds=food[0]['foodMenuId'];
    }
    else{

    for(let i=0;i<food.length -1;i++){
        
         eventmenuIds=food[i]['foodMenuId']+',';
      }
      eventmenuIds+=food[food.length-1]['foodMenuId'];
    }

    if(addon.length==1){
      addOnIds=addon[0]['addOnId'];
    }
    else{
      for(let i=0;i<addon.length;i++){

           addOnIds=addon[i]['addOnId']+',';
      }
      addOnIds+=addon[addon.length-1]['addOnId'];
    }
  
    this.http.post(
      'http://localhost:8081/user/bookTheme',
      {
        "applicantAddress": event[0]['applicantAddress'],
        "applicantEmail": event[0]['applicantEmail'],
        "applicantMobile": event[0]['applicantMobile'],
        "applicantName": event[0]['applicantName'],
        "eventAddress": theme[0]['themeAddress'],
        "eventDate": event[0]['eventDate'],
        "eventTime": event[0]['eventTime'],
        "eventmenuIds": eventmenuIds,
        "themeId": (theme[0]['themeId']),
        "addOnIds": addOnIds.toString(),
        "EventCost": total.toString(),
        "userId": parseInt(user[10])
      }).subscribe(res => console.log(res));
    alert('Event Booked')
  }
  /*EditEvent(Item: any, themeId: number) {
    if (confirm("Are you sure want to delete '" + Item.eventName + "'")) {
      this.http.put('http://localhost:8081/user/editTheme/' + themeId, {
        "id": themeId,
        "applicantAddress": Item.applicantAddress,
        "applicantEmailId": Item.applicantEmailId,
        "applicantMobileNo": Item.applicantMobileNo,
        "applicantName": Item.applicantName,
        "eventAddress": Item.eventAddress,
        "eventName": Item.eventName,
        "eventDate": Item.eventDate,
        "eventTime": Item.eventTime,
        "noOfPeople": Item.noOfPeople,
        "foodType": Item.selectFoodCategory,
        "vegCount": Item.quantityOfVeg,
        "nonVegCount": Item.quantityOfNonVeg
      }).subscribe(res => console.log(res));
    }
  }*/
}

