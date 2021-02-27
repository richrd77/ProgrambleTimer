import { Injectable } from '@angular/core';
import { Routine, RoutineCycle } from '../model/routine';
import { SaverService } from './saver.service';
import { Timer } from '../model/timer';

@Injectable()
export class RoutineService {
  constructor(private saveService: SaverService) {}

  SaveNewRoutine(routineName: string, allInterval: Timer[]): void {
    this.saveService.SaveRoutine(
      new Routine(routineName, [new RoutineCycle(allInterval)])
    );
  }
}
