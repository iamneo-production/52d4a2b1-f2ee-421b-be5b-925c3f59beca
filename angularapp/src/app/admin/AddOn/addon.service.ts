import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  AddOnDetails: any;
  singleAddOnDetail:any;
  singleAddOnId:number;
  constructor(private http: HttpClient) { }

  AddAddOn(AddOnDetail: any) {
    if (confirm('Confirmed the details and are sure want to add the AddOn?')) {
      (this.http.post('http://localhost:8081/admin/addAddOn', AddOnDetail).subscribe(Response => {
        alert("The AddOn got added");
      }));
    }
    // this.AddOnDetails.push(ThemeDetail);
  }
  GetAddOn() {
    (this.http.get('http://localhost:8081/admin/getAddOn').subscribe((response) => { this.AddOnDetails = response; }));
    return this.AddOnDetails;
  }
  GetAddOnById(AddOnId:number){
    (this.http.get('http://localhost:8081/admin/getAddOn/'+AddOnId).subscribe((response) => { this.singleAddOnDetail = response;}));
    return this.singleAddOnDetail;
  }

  EditAddOn(ActualAddOnDetails: any, EditedAddOnDetails: any) {
    if (confirm('Confirmed the details and are sure want to add the food AddOn?')) {
      (this.http.put('http://localhost:8081/admin/editAddOn/' + ActualAddOnDetails.addOnId,
        {
          "addOnId":ActualAddOnDetails.addOnId,
          "addOnImageURL":EditedAddOnDetails.addOnImageURL,
          "addOnName":EditedAddOnDetails.addOnName,
          "addOnDescription":EditedAddOnDetails.addOnDescription,
          "addOnPrice":EditedAddOnDetails.addOnPrice
        }
      ).subscribe(response => {
        alert("The AddOn got edited");
      }));
    this.AddOnDetails.splice(this.AddOnDetails.indexOf(ActualAddOnDetails),1,EditedAddOnDetails)
    }
  }
  DeleteAddOn(AddOnDetails: any) {
    if(confirm('Are you sure want to delete '+AddOnDetails.foodAddOnItems)+'?'){
      this.http.delete('http://localhost:8081/admin/deleteAddOn/'+AddOnDetails.addOnId).subscribe(response => {
        alert("The AddOn got deleted");
      })
    }
  }
}
