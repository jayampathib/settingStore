import { Injectable } from '@angular/core';

import { AppSettings } from './app-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { SETTING_LOCATION, SETTING_KEY } from 'src/app/Shared/app-constant';

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
    let settings = localStorage.getItem(SETTING_KEY);
    if(settings){
        return of(JSON.parse(settings));
    }
    else{
      return this.http.get<AppSettings>(SETTING_LOCATION) 
      .pipe(
        tap(settings => {
            if(settings){
              this.saveSettings(settings)
            }
          }
        ),
        catchError(
          this.handleError('getSettings', new AppSettings())
        )
      );
    } 
  }

  saveSettings(settings :AppSettings):void {
    localStorage.setItem(SETTING_KEY,JSON.stringify(settings));
  }

  // getSettings():  Observable<AppSettings>{
  //   let settings = new AppSettings();
  //   return of(settings);
  // }

}
