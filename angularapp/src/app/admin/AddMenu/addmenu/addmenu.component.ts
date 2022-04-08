import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {

  @ViewChild('form') MenuDetails:NgForm;
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.menuService.AddMenu(this.MenuDetails.value);
    this.MenuDetails.resetForm();
  }

}
