import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-deleteaddon',
  templateUrl: './deleteaddon.component.html',
  styleUrls: ['./deleteaddon.component.css']
})
export class DeleteaddonComponent implements OnInit {

  AddOn: any;
  id: string;
  valid: boolean;
  constructor(private routeParams: ActivatedRoute, private AddOnService: AddonService) {
    this.valid = true;
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.valid) {
        this.AddOn = this.AddOnService.GetAddOnById(this.AddOnService.singleAddOnId);
      }
    }, 500);
  }

  DeleteAddOn() {
    this.AddOnService.DeleteAddOn(this.AddOn);
    this.valid = false;
    this.AddOn = null;
  }

}
