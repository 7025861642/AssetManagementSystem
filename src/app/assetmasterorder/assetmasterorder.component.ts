import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Purchase } from '../purchase';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Assetmaster } from '../assetmaster';
import { PurchaseService } from '../purchase.service';
import { AssetMasterService } from '../asset-master.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assetmasterorder',
  templateUrl: './assetmasterorder.component.html',
  styleUrls: ['./assetmasterorder.component.scss']
})
export class AssetmasterorderComponent implements OnInit {
  purchases: Observable<Purchase[]>;
  
  constructor(private authService:AuthService, private toastr: ToastrService, private router:Router, private masterOrderService: AssetMasterService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.purchases=this.masterOrderService.getAssetOrders();
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}
  


