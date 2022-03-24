import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public searchForm !: FormGroup;
  constructor(private formbuilder: FormBuilder){}
  ngOnInit(): void {
    this.searchForm = this.formbuilder.group({
      searchkeyword:['']
    })
  }
  showMsg: boolean = false;
  name :any;
  submit(){
    if (this.searchForm.value.searchkeyword != "" ) {
     this.name = this.searchForm.value.searchkeyword;
     this.showMsg = true;
    }
    else{
      this.showMsg = false;
    }
 }

}
