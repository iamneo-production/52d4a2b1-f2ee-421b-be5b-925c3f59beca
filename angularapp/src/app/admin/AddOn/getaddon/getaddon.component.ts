import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddonService } from '../addon.service';

@Component({
  selector: 'app-getaddon',
  templateUrl: './getaddon.component.html',
  styleUrls: ['./getaddon.component.css']
})
export class GetaddonComponent implements OnInit {

  AddOns:any;
  id : number;
    // {addOnName:"Magic Show",addOnPrice:"1200",addOnImageURL:"https://img2.exportersindia.com/product_images/bc-full/2021/8/2766184/magic-show-organisers-1630419637-5967547.jpeg",addOnDescription:"Best Magic Show ever you have seen",addOnId:1},
    // {addOnName:"Mehandi Art",addOnPrice:"1200",addOnImageURL:"https://i.pinimg.com/736x/58/95/7c/58957c89d507d3da1f8b6273c49729a3.jpg",addOnDescription:"Best Magic Show ever you have seen",addOnId:2},
    // {addOnName:"Face Painting",addOnPrice:"1200",addOnImageURL:"https://mymodernmet.com/wp/wp-content/uploads/2021/09/face-painting-ideas-kids-2.jpg",addOnDescription:"Best Magic Show ever you have seen",addOnId:4},
    // {addOnName:"DJ party",addOnPrice:"1200",addOnImageURL:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2015/03/mhu-dj-1446023701.jpg",addOnDescription:"Best Magic Show ever you have seen",addOnId:3}
  constructor(private route:Router,private addOnService:AddonService) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.AddOns = this.addOnService.GetAddOn();
    },500);
  }

  AddNav(){
    this.route.navigate(['admin/addAddon'])
  }
  EditNav(id:number){
    this.route.navigate(['admin/editAddOn/{'+id+'}']);
    this.addOnService.singleAddOnId = id;
  }
  DeleteNav(id:number){
    this.route.navigate(['admin/deleteAddOn/{'+id+'}']);
    this.addOnService.singleAddOnId = id;
  }


}
