import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Purchase} from './purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseUrl = 'http://localhost:50074/api';

  constructor(private http: HttpClient) { }
  getpurchaseList(): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseTbls');
  }
  postpurchase(purchase: Purchase) {
    console.log(purchase);
    return this.http.post(this.baseUrl + '/PurchaseTbls', purchase);
  }
  getAssetTypes(name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseTbls?name=' + name);
  }
  getallAssetTypes(): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetTypes');
  }
  getAsset(name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/AssetDefinition?ad_name=' + name);
  }
  getVendor(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseTbls/' + id);
  }
  getPurchase(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/PurchaseEdit/' + id);
  }
  updatePurchase(id: number, purchase: Purchase): Observable<any> {
    return this.http.put(this.baseUrl + '/PurchaseEdit/' + id, purchase);
  }
  cancelPurchase(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/PurchaseTbls/' + id);
  }
}
