import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {


  
  private baseUrl = 'http://localhost:50074/api'

  constructor(private http: HttpClient) { }
  getvendorList(): Observable<any> {
    return this.http.get(this.baseUrl + '/VendorTbls');
  
  }
  addVendor(pdt:Vendor){
    return this.http.post(this.baseUrl+'/VendorTbls',pdt)
  }
  getAssetType(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/AssetTypes/'+id);
  }
getAssetTypes():Observable<any>{
  return this.http.get(this.baseUrl+'/AssetTypes');
}
updateVendor(id: number,vendor: Vendor)
  {
   return this.http.put(this.baseUrl+'/VendorTbls/'+id,Vendor);
  }
  getVendor(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/VendorTbls/'+id);
  }
  putVendor(id: number,vendor: Vendor)
  {
    return this.http.put(this.baseUrl+'/VendorTbls/'+id,vendor);
  }
  deleteVendor(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/VendorTbls/'+id);
  }
}

