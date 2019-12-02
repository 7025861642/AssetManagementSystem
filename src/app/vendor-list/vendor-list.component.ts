import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
    vendor: Observable<Vendor>;
  vendors: Observable<Vendor[]>;


  constructor(private vendordefService: VendorService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.vendor = this.vendordefService.getvendorList();
    this.vendors = this.vendordefService.getvendorList();
  }

  deleteAsset(id: number){
    this.vendordefService.deleteVendor(id).subscribe(x=>{
      this.toastr.success('Deleted');
      this.reloadData();
    })
  }



}
