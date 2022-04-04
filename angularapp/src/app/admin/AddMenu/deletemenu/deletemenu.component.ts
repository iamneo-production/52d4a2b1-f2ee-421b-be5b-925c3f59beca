import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-deletemenu',
  templateUrl: './deletemenu.component.html',
  styleUrls: ['./deletemenu.component.css']
})
export class DeletemenuComponent implements OnInit {
  Menu: any;
  id: string;
  valid: boolean;
  constructor(private routeParams: ActivatedRoute, private menuService: MenuService) {
    this.valid = true;
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.valid) {
        this.Menu = this.menuService.GetMenuById(this.menuService.singleMenuId);
      }
    }, 500);
  }

  DeleteMenu() {
    this.menuService.DeleteMenu(this.Menu);
    this.valid = false;
    this.Menu = null;
  }

}
