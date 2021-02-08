import { Timer } from './timer';

export class Routine {
  Name: string;
  Cycles: Timer[];
  SavedOn: Date;

  constructor(name: string, allCycles: Timer[]) {
    this.Name = name;
    this.Cycles = allCycles;
  }
}
