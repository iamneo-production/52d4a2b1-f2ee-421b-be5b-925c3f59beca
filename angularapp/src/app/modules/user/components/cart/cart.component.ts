import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  fooditems=[]
  addonitems=[]
  total:number 
  subtotal:number
  ThemeCost:number
  themedetails=[]
  eventdetails=[]
  userdetails:any

  constructor(private cartservice:CartService,private loginservice:AuthService,private router:Router) { }

  ngOnInit(): void {

    setInterval(()=>{
      this.cartservice.theme.subscribe(data=>{
        this.themedetails=data;
        if(this.fooditems || this.addonitems || this.themedetails)this.getsubTotal(this.fooditems,this.addonitems);
        if(this.fooditems || this.addonitems || this.themedetails)this.getTotal(this.fooditems,this.addonitems,this.themedetails);
      }) 
  
  
      this.cartservice.foodItems.subscribe(data=>{
        this.fooditems=data;
  
        if(this.fooditems || this.addonitems || this.themedetails)this.getsubTotal(this.fooditems,this.addonitems);
        if(this.fooditems || this.addonitems || this.themedetails)this.getTotal(this.fooditems,this.addonitems,this.themedetails);
      }) 
        this.cartservice.addonItems.subscribe(data=>{
        this.addonitems=data;
  
        if(this.fooditems || this.addonitems || this.themedetails)this.getsubTotal(this.fooditems,this.addonitems);
        if(this.fooditems || this.addonitems || this.themedetails)this.getTotal(this.fooditems,this.addonitems,this.themedetails);
      })
  
  
      this.cartservice.eventdetails.subscribe(data=>{
        this.eventdetails=data;
        console.log(this.eventdetails);
      }) 
      },500)
  
  }

  onDeletefoodmenu(i:number){
    this.fooditems.splice(i,1);
    this.cartservice.setCartData('foodmenu',this.fooditems);
  }
  onDeleteaddon(i:number){
    this.addonitems.splice(i,1);
    this.cartservice.setCartData('addon',this.addonitems);
  }


  validateInput(event:any,i:number){
    const qty = +event.target.value;
    if(qty<1){
      event.target.value=this.fooditems[i].qty;
      return;
    }

    this.QtyUpdated(qty,i)
  }
  private  QtyUpdated(qty: number, i: number) {
    this.fooditems[i].qty=qty;
    this.cartservice.setCartData('foodmenu',this.fooditems);

    this.getsubTotal(this.fooditems,this.addonitems)
    this.getTotal(this.fooditems,this.addonitems,this.themedetails)
  }


  getsubTotal(fooddata:any,addondata:any){
   let subs=0;
   let totalsubs=0;
   for(const item of fooddata){
     subs+=item.foodMenuCost*item.qty;
    // console.log(typeof(subs));
     this.subtotal=subs;
   }
   for(const item of addondata){
     totalsubs+=parseInt(item.addOnPrice);
    this.subtotal+=totalsubs;
  }
  }
   getTotal(fooddata:any,addondata:any,themes:any){
    console.log(themes); 
    console.log(themes[0]['themeCost']); 
    this.ThemeCost=themes[0]['themeCost'];
    this.total=this.subtotal+themes[0]['themeCost'];
  }
  
  onCheckout(){
   this.userdetails=(this.loginservice.getToken());
   console.log(this.userdetails)
   //this.appservice.AddEvent(this.themedetails,this.eventdetails,this.fooditems,this.addonitems,this.userdetails,this.total);
   this.router.navigateByUrl("user/getBookedTheme")
   
  }

  BackPage(){
    this.router.navigateByUrl("user/addon");
  }

  foodpage(){
    this.router.navigateByUrl("user/foodmenu")
  }

  addonpage(){
    this.router.navigateByUrl("user/addon")
  }


}
