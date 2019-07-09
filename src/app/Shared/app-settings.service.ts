import { Injectable } from '@angular/core';

import { AppSettings } from './app-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { SETTING_LOCATION } from 'src/app/Shared/app-constant';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
 
  constructor(private http:HttpClient) { 
    
  }
  getSettings():  Observable<AppSettings>{    
    return this.http.get<AppSettings>(SETTING_LOCATION);
  }
  // getSettings():  Observable<AppSettings>{
  //   let settings = new AppSettings();
  //   return of(settings);
  // }
}
