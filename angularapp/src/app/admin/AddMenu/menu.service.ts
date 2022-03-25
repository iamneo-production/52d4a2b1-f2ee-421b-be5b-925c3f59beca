import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  MenuDetails: any =[];
  singleMenuDetail:any=[];
  singleMenuId:number;
  constructor(private http: HttpClient) { }

  AddMenu(MenuDetail: any) {
    if (confirm('Confirmed the details and are sure want to add the Menu?')) {
      (this.http.post('http://localhost:8081/admin/addMenu', MenuDetail).subscribe(Response => {
        alert("The Menu got added");
      }));
    }
    // this.MenuDetails.push(ThemeDetail);
  }
  GetMenu() {
    (this.http.get('http://localhost:8081/admin/getMenu').subscribe((response) => { this.MenuDetails = response; }));
    return this.MenuDetails;
  }
  /*GetMenuById(menuId:number){
    (this.http.get('http://localhost:8081/admin/getMenu/'+menuId).subscribe((response) => { this.singleMenuDetail = response;},(error:HttpErrorResponse)=>{console.error}));
    return this.singleMenuDetail;
  }*/
  GetMenuById(menuId:number){
    (this.http.get('http://localhost:8081/admin/getMenu/'+menuId).subscribe((response) => { this.singleMenuDetail = response;}));
    return this.singleMenuDetail;
  }

  EditMenu(ActualMenuDetails: any, EditedMenuDetails: any) {
    if (confirm('Confirmed the details and are sure want to add the food menu?')) {
      (this.http.put('http://localhost:8081/admin/editMenu/' + ActualMenuDetails.foodMenuId,
        {
          "foodMenuId":ActualMenuDetails.foodMenuId,
          "foodMenuImageURL":EditedMenuDetails.foodMenuImageURL,
          "foodMenuItems":EditedMenuDetails.foodMenuItems,
          "foodMenuType":EditedMenuDetails.foodMenuType,
          "foodMenuCost":EditedMenuDetails.foodMenuCost
        }
      ).subscribe(response => {
        alert("The Menu got edited");
      }));
    this.MenuDetails.splice(this.MenuDetails.indexOf(ActualMenuDetails),1,EditedMenuDetails)
    }
  }
  DeleteMenu(MenuDetails: any) {
    if(confirm('Are you sure want to delete '+MenuDetails.foodMenuItems)+'?'){
      this.http.delete('http://localhost:8081/admin/deleteMenu/'+MenuDetails.foodMenuId).subscribe(response => {
        alert("The Menu got deleted");
      })
    }
  }
}
