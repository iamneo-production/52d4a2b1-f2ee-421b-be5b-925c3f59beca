import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-editaddon',
  templateUrl: './editaddon.component.html',
  styleUrls: ['./editaddon.component.css']
})
export class EditaddonComponent implements OnInit {

  @ViewChild('form') AddOnDetails:NgForm;
  addOn:any;

  constructor(private addOnService:AddonService) {
   }

  ngOnInit(): void {
    setInterval(() => {
      this.addOn = this.addOnService.GetAddOnById(this.addOnService.singleAddOnId);
    }, 500);
  }

  EditMenu(){
    this.addOnService.EditAddOn(this.addOn,this.AddOnDetails.value);
  }

}
