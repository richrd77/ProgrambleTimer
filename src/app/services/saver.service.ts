import { Injectable } from '@angular/core';
import { Routine, RoutineCycle } from '../model/routine';
import { RepositoryService } from './repo.service';
import { Constants } from '../constants';
import { Extensions } from './extensions';

@Injectable()
export class SaverService {
  constructor(
    private repo: RepositoryService,
    private constants: Constants,
    private ext: Extensions
  ) {}

  get IsDarkModeOn(): boolean {
    return this.repo.Theme;
  }

  ToggleDarkMode(): boolean {
    return (this.repo.Theme = !this.repo.Theme);
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

  GetRoutine(): Routine[] {
    return this.repo.GetDataFromDevice<Routine[]>(this.constants.RoutineKey);
  }

  get ModalHeader() {
    return this.repo.GetDataFromDevice<string>(this.constants.ModalHeaderKey);
  }

  set ModalHeader(newHeader: string) {
    this.repo.SetDataFromDevice(this.constants.ModalHeaderKey, newHeader);
  }

  DeleteOldData(difference: number): void {
    let newData: Routine[] = [];

    const currentDate = new Date();
    this.repo
      .GetDataFromDevice<Routine[]>(this.constants.RoutineKey)
      ?.forEach((v) => {
        let newRoutineCycle: RoutineCycle[] = [];
        v.Cycles.forEach((r) => {
          if (
            this.ext.MonthDiff(new Date(r.SavedOn), new Date(currentDate)) <=
            difference
          ) {
            newRoutineCycle.push(new RoutineCycle(r.Cycles, r.SavedOn));
          }
        });
        newData.push(new Routine(v.Name, newRoutineCycle));
      });
  }
}
