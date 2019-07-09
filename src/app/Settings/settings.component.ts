import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../Shared/app-settings';
import { AppSettingsService } from 'src/app/Shared/app-settings.service';

@Component({
  selector: 'stt-settings',
  templateUrl: './settings.component.html' 
})
export class SettingsComponent implements OnInit {

  appSettings :AppSettings;

  constructor(private appSettingsService : AppSettingsService ) { 

  }

  ngOnInit() {
    this.appSettingsService.getSettings()
      .subscribe(setings=> this.appSettings =setings);
  }

  saveSettings(){
    this.appSettingsService.saveSettings(this.appSettings);
  }
  cancel(){

  }
    
}
