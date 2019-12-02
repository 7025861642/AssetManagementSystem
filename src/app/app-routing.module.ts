import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetDef } from './asset-def';
import {  AssetDefComponent } from './asset-def/asset-def.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { LoginComponent } from './login/login.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { PurchaselistComponent } from './purchaselist/purchaselist.component';
import { PurchaseManagerComponent } from './purchase-manager/purchase-manager.component';
import { PurchaseeditComponent } from './purchaseedit/purchaseedit.component';
import { AssetMasterComponent } from './assetmaster/assetmaster.component';
import { AssetMasterListComponent } from './assetmasterlist/assetmasterlist.component';
import { AssetmasterorderComponent } from './assetmasterorder/assetmasterorder.component';



const routes: Routes = [


  { path: 'create', component: AssetDefComponent },
  { path: 'Edit/:id', component: AssetEditComponent },
  { path: 'Assets', component: AssetListComponent },
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'vendor', component: VendorListComponent },
{path:'addvendor',component:VendorAddComponent},
{path:'admin',component:AdminComponent,canActivate:[AuthGuard]},
{path:'list',component:VendorListComponent,canActivate:[AuthGuard]},
{path:'vendoradd',component:VendorAddComponent},
{path:'vendors',component:VendorListComponent},
{path:'edits/:id',component:VendorEditComponent},
{path:'admin',component:AdminComponent},
{path:'purchaselist',component:PurchaselistComponent},
{path:'purchaseadd',component:PurchaseManagerComponent},
{path:'purchaseedit/:id',component:PurchaseeditComponent},
{path:'assetmaster/:id',component:AssetMasterComponent},
{path:'assetmasterlist',component:AssetMasterListComponent},
{path:'assetmasterorder',component:AssetmasterorderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
