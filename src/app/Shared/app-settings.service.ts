import { Injectable } from '@angular/core';

import { AppSettings } from './app-settings';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  getSettings():  Observable<AppSettings>{
    let settings = new AppSettings();
    return of(settings);
  }
}
