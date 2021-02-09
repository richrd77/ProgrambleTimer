import { Injectable } from '@angular/core';
import { Routine } from '../model/routine';
import { RepositoryService } from './repo.service';
import { Constants } from '../constants';
import { Extensions } from './extensions';

@Injectable()
export class SaverService {
  constructor(
    private repo: RepositoryService,
    private constants: Constants
  ) {}

  IsDarkModeOn(): boolean {
    return this.repo.GetTheme();
  }

  SaveRoutine(newRoutine: Routine): void {
    let existingRoutine = this.repo.GetDataFromDevice<Routine[]>(
      this.constants.RoutineKey
    );
    if (!existingRoutine) {
      existingRoutine = [];
    }
    const foundIndex = existingRoutine.findIndex(
      (v) => v.Name === newRoutine.Name
    );
    if (foundIndex !== -1) {
      existingRoutine[foundIndex].Cycles = existingRoutine[
        foundIndex
      ].Cycles.concat(newRoutine.Cycles);
    } else {
      existingRoutine.push(newRoutine);
    }
    this.repo.SetDataFromDevice(this.constants.RoutineKey, existingRoutine);
  }
}
