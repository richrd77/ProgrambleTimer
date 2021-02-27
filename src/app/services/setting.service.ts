import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { RepositoryService } from './repo.service';
import { Settings } from '../model/settings';

@Injectable()
export class SettingService {
  constructor(private cons: Constants, private repo: RepositoryService) {}

  get Settings(): Settings {
    return this.repo.GetDataFromDevice<Settings>(this.cons.SettingKey);
  }

  set Settings(newSettings: Settings) {
    let existingSettings = this.Settings;
    Object.keys(Settings).forEach((k) => {
        existingSettings[k] = newSettings[k] ?? existingSettings[k];
    });
    this.repo.SetDataFromDevice(this.cons.SettingKey, existingSettings);
  }
}
