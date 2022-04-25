import { Component, OnInit } from '@angular/core';
import { AddonService } from 'src/app/admin/AddOn/addon.service';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookaddon',
  templateUrl: './bookaddon.component.html',
  styleUrls: ['./bookaddon.component.css']
})
export class BookaddonComponent implements OnInit {
  AddOns:any;
  constructor(private addOnService:AddonService,private cartservice:CartserviceService,private router:Router) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.AddOns = this.addOnService.GetAddOn();
    },500);
  }

  selectaddon(AddOn){
    this.cartservice.addAddOn(AddOn);
  }
  gotocart(){
   this.router.navigateByUrl("user/cart");
  }

  BackPage(){
    this.router.navigateByUrl("user/foodmenu");
  }
}
