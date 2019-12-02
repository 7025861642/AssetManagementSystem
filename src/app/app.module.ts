import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetDefComponent } from './asset-def/asset-def.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AdminComponent } from './admin/admin.component';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{NgxPaginationModule} from 'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';

import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { PurchaseeditComponent } from './purchaseedit/purchaseedit.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { AssetMasterListComponent } from './assetmasterlist/assetmasterlist.component';
import { AssetmasterorderComponent } from './assetmasterorder/assetmasterorder.component';
import { AssetMasterComponent } from './assetmaster/assetmaster.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetDefComponent,
    AssetListComponent,
    AssetEditComponent,
    AdminComponent,
    PurchaseManagerComponent,
    LoginComponent,
    UserComponent,
    VendorEditComponent,
    VendorListComponent,
    VendorAddComponent,
    PurchaseeditComponent,
    PurchaselistComponent,
    AssetMasterListComponent,
    AssetmasterorderComponent,
    AssetMasterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
