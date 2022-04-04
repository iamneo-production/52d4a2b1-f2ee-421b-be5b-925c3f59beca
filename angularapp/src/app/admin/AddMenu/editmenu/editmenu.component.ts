import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit {

  @ViewChild('form') MenuDetails:NgForm;
  menu:any;

  constructor(private menuService:MenuService) {
   }

  ngOnInit(): void {
    setInterval(() => {
      this.menu = this.menuService.GetMenuById(this.menuService.singleMenuId);
    }, 500);
  }

  EditMenu(){
    this.menuService.EditMenu(this.menu,this.MenuDetails.value);
  }
}
