import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  constructor(private appService : AppService) {}

  BookedEventDetails:any;

  ngOnInit(): void {
    this.BookedEventDetails = this.appService.GetBookedEvent();
  }

  displayStyle = "none";
  @ViewChild('form') EditEventDetails:any;
  PopupDetails:any;
  openPopup(item:any) {
    this.PopupDetails = item;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  EditEvent(){
    this.appService.EditEvent(this.PopupDetails,this.EditEventDetails.value);
    this.BookedEventDetails = this.appService.GetBookedEvent();
  }

  DeleteEvent(item:any){
    this.appService.DeleteBookedEvent(item);
    this.BookedEventDetails = this.appService.GetBookedEvent();
    console.log(this.appService.GetBookedEvent);
  }

}
