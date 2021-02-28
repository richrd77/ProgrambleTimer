import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { RepositoryService } from './repo.service';
import { Settings } from '../model/settings';

@Injectable()
export class SettingService {
  constructor(private cons: Constants, private repo: RepositoryService) {}

  get Settings(): Settings {
    let sett = this.repo.GetDataFromDevice<Settings>(this.cons.SettingKey);
    if (!sett) {
      sett = this.DefaultSettings;
    }
    return sett;
  }

  set Settings(newSettings: Settings) {
    this.repo.SetDataFromDevice(this.cons.SettingKey, newSettings);
  }

  get DefaultSettings(): Settings {
    const def = new Settings();
    def.AutoDeleteOldRecordsDuration = 2;
    def.VibrateEachCycleComplition = true;
    def.VibrationDuration = 1;
    return def;
  }
}
