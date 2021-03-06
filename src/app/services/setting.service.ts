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

  get TimeZoneLocale(): string {
    return this.cons.Cultures.filter(
      (c) => c.Name === this.Settings.TimeZone.Name
    )[0].Id;
  }

  get DefaultSettings(): Settings {
    const def = new Settings();
    def.AutoDeleteOldRecordsDuration = 2;
    def.VibrateEachCycleComplition = true;
    def.VibrationDuration = 1;
    def.TimeZone = this.cons.Cultures[0];
    return def;
  }
}
