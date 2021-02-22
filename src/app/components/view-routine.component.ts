import { Component, EventEmitter, Output } from '@angular/core';
import { SaverService } from '../services/saver.service';
import { Routine } from '../model/routine';
import { TableKey } from '../model/table';
import { TableColType } from '../model/enums/tableColumnTypes.enum';
import { Timer } from '../model/timer';

@Component({
  selector: 'app-view-routine',
  template: `
    <section *ngFor="let r of existingRoutine" style="margin-bottom:1rem">
      {{ r.Name }}
      <ng-container *ngFor="let c of r.Cycles">
        <app-grouped-table
          [routineCycle1]="c"
          [displayKeys]="displayKeys"
          [routineName]="r.Name"
          (importClick)="ImportClicked($event)"
        ></app-grouped-table>
      </ng-container>
    </section>
  `,
  styles: [``],
})
export class ViewRoutineComponent {
  existingRoutine: Routine[];
  displayKeys: TableKey[];
  @Output() importCycleEvent: EventEmitter<Timer[]> = new EventEmitter<Timer[]>();

  constructor(private ser: SaverService) {
    this.existingRoutine = this.ser.GetRoutine();
    this.displayKeys = [
      new TableKey('Name', 'Name'),
      new TableKey('Seconds', 'Time (in sec)', TableColType.SevenSegment),
      new TableKey('Repetitions', 'Repetitions', TableColType.SevenSegment),
      new TableKey('Color', '', TableColType.Color),
    ];
  }

  ImportClicked(event: Timer[]): void {
    this.importCycleEvent.emit(event);
  }
}
