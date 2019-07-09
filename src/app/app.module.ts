import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { SettingsComponent } from 'src/app/Settings/settings.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    SettingsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
