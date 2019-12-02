import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assetmaster } from './assetmaster';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class AssetMasterService {
  private baseUrl = 'http://localhost:50074/api'

  constructor(private http: HttpClient) { }
  getAssetOrders(): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_MasterOrder');
  }

  getAssetOrder(id:string): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_MasterOrder?ordno='+id);
  }

  postAsset(asset: Assetmaster){
    return this.http.post(this.baseUrl+'/Asset_Master',asset);
  }

  updatePurchase(id:number, purchase: Purchase): Observable<any>{
    return this.http.put(this.baseUrl+'/Asset_Master/'+ id, purchase);
  }

  getMasterList(): Observable<any>{
    return this.http.get(this.baseUrl+'/Asset_Master');
  }
  
  
  
  

}
