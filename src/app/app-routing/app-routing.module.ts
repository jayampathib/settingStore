import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from '../product/product-detail.component';
import { SettingsComponent } from '../Settings/settings.component';

const routes : Routes=[
  { path:'product', component: ProductDetailComponent},
  { path:'settings', component: SettingsComponent}  
]

@NgModule({
  //declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
  //,bootstrap: [ ]
})
export class AppRoutingModule { }
