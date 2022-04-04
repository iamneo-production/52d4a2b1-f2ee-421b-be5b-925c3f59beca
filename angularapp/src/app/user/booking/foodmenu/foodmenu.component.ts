import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/admin/AddMenu/menu.service';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/Services/cartservice.service';
import { FoodMenuModel } from 'src/app/shared/foodmenumodel';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {

  BookedEventDetails: any = [
  ];
  fooditem:FoodMenuModel
  menu :any 
  searchBox:string;
  fooditems=[]
  qty:number
  constructor(private menuservice:MenuService,private router:Router,private cartservice:CartserviceService) { }
  ngOnInit(): void {
    setInterval(() => {
      this.BookedEventDetails = this.menuservice.GetMenu();
      this.cartservice.cartcount=this.cartservice.count();
      this.cartservice.foodItems.subscribe(data=>{
        this.fooditems=data;
      })
    }, 500);
  
  }

  NextPage(){
    this.router.navigateByUrl("user/addon");
  }

  BackPage(){
    this.router.navigateByUrl("user/bookTheme");
    this.cartservice.setCartData('event',[])
  }

  closeClick(){
    this.menuservice.GetMenu();
  }

  addtocart(item){
    this.fooditem=item
    this.fooditem.qty=1;
    this.cartservice.addItem(this.fooditem);
    this.cartservice.cartcount=this.cartservice.count();
    

  }


}
