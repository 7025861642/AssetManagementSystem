import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Assetmaster } from '../assetmaster';
import { Observable } from 'rxjs';
import { AssetMasterService } from '../asset-master.service';

@Component({
  selector: 'appassetmasterlist',
  templateUrl: './assetmasterlist.component.html',
  styleUrls: ['./assetmasterlist.component.scss']
})
export class AssetMasterListComponent implements OnInit {

  masters: Observable<Assetmaster[]>;

  constructor(private authService: AuthService, private router: Router, private masterService: AssetMasterService) { }

  ngOnInit() {
    this.reloadData();
  }


  reloadData(){
    this.masters=this.masterService.getMasterList();
    this.masters.forEach(x=>{
    console.log(x);
    })
  }

  Logout(){
    this.authService.logout();
    this.router.navigateByUrl('logout');
  }
}