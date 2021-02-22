import { Timer } from './timer';

export class Routine {
  Name: string;
  Cycles: RoutineCycle[];

  constructor(name: string, allCycles: RoutineCycle[]) {
    this.Name = name;
    this.Cycles = allCycles;
  }
}

export class RoutineCycle {
  Cycles: Timer[];
  SavedOn: Date;

  constructor(allCycles: Timer[]) {
    this.Cycles = allCycles;
    this.SavedOn = new Date();
  }
}

export class ImportRoutine {
  routineName: string;
  cycles: Timer[];

  constructor(name: string, allCycles: Timer[]) {
    this.routineName = name;
    this.cycles = allCycles;
  }
}
