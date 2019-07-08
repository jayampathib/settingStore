import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../Shared/app-settings.service';
import { Product } from './product';
import { AppSettings } from 'src/app/Shared/app-settings';

@Component({
  selector: 'stt-product-detail',
  templateUrl: './product-detail.component.html' 
})
export class ProductDetailComponent implements OnInit {

  product :Product;
  appSettings : AppSettings;
  constructor(private appSettingsService  :AppSettingsService) { }

  ngOnInit(): void {
     this.appSettingsService.getSettings()
     .subscribe(settings => this.appSettings =settings
                ,() => null // error Handling section
                ,() => {
                  this.product = new Product();
                  this.product.price = this.appSettings.defaultPrice;
                  this.product.url = this.appSettings.defaultUrl;
                }
              );
  }
  saveProduct(){

  }
  cancel(){

  }
}
