import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  ThemeDetails: any=[];
  singleThemeDetail:any;
  singleThemeId:number;
  constructor(private http: HttpClient) { }

  AddTheme(ThemeDetail: any) {
    if (confirm('Confirmed the details and are sure want to add the Theme?')) {
      (this.http.post('http://localhost:8081/admin/addTheme', ThemeDetail).subscribe(Response => {
        alert("The theme got added");
      }));
    }
    // this.ThemeDetails.push(ThemeDetail);
  }
  GetTheme() {
    (this.http.get('http://localhost:8081/admin/getTheme').subscribe((response) => { this.ThemeDetails = response; }));
    return this.ThemeDetails;
  }
  GetThemeById(themeId:number){
    console.log(themeId);
    (this.http.get('http://localhost:8081/admin/getTheme/'+themeId).subscribe(result => { this.singleThemeDetail = result;}));
    console.log(this.singleThemeDetail)
    return this.singleThemeDetail;
    
  }

  EditTheme(ActualThemeDetails: any, EditedThemeDetails: any) {
    if (confirm('Confirmed the details and are sure want to add the Theme?')) {
      (this.http.put('http://localhost:8081/admin/editTheme/' + ActualThemeDetails.themeId,
        {
          "themeId": ActualThemeDetails.themeId,
          "themeName": EditedThemeDetails.themeName,
          "themeImageURL": EditedThemeDetails.themeImageURL,
          "themeDescription": EditedThemeDetails.themeDescription,
          "themePhotographer": EditedThemeDetails.themePhotographer,
          "themeVideographer": EditedThemeDetails.themeVideographer,
          "themeReturnGift": EditedThemeDetails.themeReturnGift,
          "themeCost": EditedThemeDetails.themeCost,
          "themeAddress":EditedThemeDetails.themeAddress
        }
      ).subscribe(response => {
        alert("The theme got edited");
      }));
    }
    // this.ThemeDetails.splice(this.ThemeDetails.indexOf(ActualThemeDetails),1,EditedThemeDetails)
  }
  DeleteTheme(ThemeDetails: any) {
    if(confirm('Are you sure want to delete '+ThemeDetails.themeName)+'?'){
      this.http.delete('http://localhost:8081/admin/deleteTheme/'+ThemeDetails.themeId).subscribe(response => {
        alert("The theme got deleted");
      })
    }
  }
}