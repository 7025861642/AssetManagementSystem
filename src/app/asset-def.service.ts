import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetDef } from './asset-def';

@Injectable({
  providedIn: 'root'
})
export class AssetDefService {
  private baseUrl='http://localhost:50074/api'

  constructor(private http:HttpClient) { }
  getAssetList(): Observable<any> {
    return this.http.get(this.baseUrl + '/assetDefs');
  }
  deleteAsset(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/assetDefs/'+id);
  }
  getAsset(id: number):Observable<any>
  {
    return this.http.get(this.baseUrl+'/assetDefs/'+id);
  }
  updateAsset(id: number,AssetDef: AssetDef)
  {
    return this.http.put(this.baseUrl+'/assetDefs/'+id,AssetDef);
  }
  addAsset(asset:AssetDef)
  {
    return this.http.post(this.baseUrl+'/assetDefs',asset);
  }


}
