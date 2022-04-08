import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/Services/cartservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  itemInCart:number;
  itemsInfoodmenu:number;
  itemsInAddon:number;
  constructor(private auth:LoginService,private router:Router,private cartservice:CartserviceService) { }

  ngOnInit(): void {
    setInterval(()=>{
     this.itemInCart=this.cartservice.count()
  },200);
}

  logout(): void {
    this.auth.logout();
    this.cartservice.setCartData('event',[])
    this.cartservice.setCartData('theme',[])
    this.cartservice.setCartData('foodmenu',[])
    this.cartservice.setCartData('addon',[])
  }

  gotocart(){
    this.router.navigateByUrl("user/cart");
  }

  
}
