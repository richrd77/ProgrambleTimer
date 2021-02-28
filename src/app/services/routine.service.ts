import { Injectable } from '@angular/core';
import { Routine, RoutineCycle } from '../model/routine';
import { SaverService } from './saver.service';
import { Timer } from '../model/timer';
import { SettingService } from './setting.service';

@Injectable()
export class RoutineService {
  constructor(private saveService: SaverService, private settingsService: SettingService) {}

  SaveNewRoutine(routineName: string, allInterval: Timer[]): void {
    this.saveService.SaveRoutine(
      new Routine(routineName, [new RoutineCycle(allInterval)])
    );
  }

  DeleteOldRoutine(): void {
    this.saveService.DeleteOldData(this.settingsService.Settings.AutoDeleteOldRecordsDuration);
  }
}
