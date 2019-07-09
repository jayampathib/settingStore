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
  private handleError  (operation ='operation', result?: AppSettings){
    return(error :any) : Observable<AppSettings> =>{
      switch (error.status){
        case 404:
          console.error("can't find Loacation :" + SETTING_LOCATION);
          break;
        default:
          console.error(error);
          break;
      }

      return of(result);
    }

  }
 
  getSettings():  Observable<AppSettings>{    
    return this.http.get<AppSettings>(SETTING_LOCATION) 
    .pipe(
      catchError(this.handleError('getSettings', new AppSettings()))
    );
       
     
  }

  // getSettings():  Observable<AppSettings>{
  //   let settings = new AppSettings();
  //   return of(settings);
  // }

}
