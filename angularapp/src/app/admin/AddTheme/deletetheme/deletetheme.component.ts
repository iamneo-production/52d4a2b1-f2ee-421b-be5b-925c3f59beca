import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-deletetheme',
  templateUrl: './deletetheme.component.html',
  styleUrls: ['./deletetheme.component.css']
})
export class DeletethemeComponent implements OnInit {

  themeBooking: any;
  id: string;
  valid: boolean;
  constructor(private routeParams: ActivatedRoute, private themeService: ThemeService) {
    this.valid = true;
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.valid) {
        this.themeBooking = this.themeService.GetThemeById(this.themeService.singleThemeId);
      }
    }, 500);
  }

  DeleteTheme() {
    this.themeService.DeleteTheme(this.themeBooking);
    this.valid = false;
    this.themeBooking = null;
  }

}
